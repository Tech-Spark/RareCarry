import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js';
import { isAuth } from '../utils.js';
import mailgun from "mailgun-js";
import { fileURLToPath } from 'url';
import path from 'path';
import {createInvoice} from '../pdfkit.js';
import dotenv from 'dotenv';

dotenv.config();

const DOMAIN = process.env.DOMAIN_KEY;
const mg = mailgun({apiKey: process.env.MAILGUN_APIKEY, domain: DOMAIN});


const orderRouter = express.Router();

orderRouter.get('/mine', isAuth, expressAsyncHandler(async(req, res) =>{
 const orders = await Order.find({user: req.user._id});
    res.send(orders);
}));
// to remove order from data base
// orderRouter.get('/del', expressAsyncHandler(async (req, res) => {
//     const removeOrder = await Order.find({});
//     await removeOrder.remove();
//     return res.send(removeOrder);
// }));
orderRouter.post(
    '/',
    isAuth, 
    expressAsyncHandler(async(req, res) => {
        if(req.body.orderItems === 0){
            res.status(400).send({message: 'cart is empty'});
        }else {
            const order = new Order({
                orderItems: req.body.orderItems,
                pdfItem:req.body.orderItems,
                shippingAddress:req.body.shippingAddress,
                paymentMethod: req.body.paymentMethod,
                itemsPrice: req.body.itemsPrice,
                shippingPrice: req.body.shippingPrice,
                taxPrice: req.body.taxPrice,
                totalPrice: req.body.totalPrice,
                user:req.user._id,
                invoice_no:0,
            });
            const createdOrder = await order.save();
            res.status(201).send({message: 'New Order Created', order: createdOrder});
        }
}));

orderRouter.get('/:id', isAuth, expressAsyncHandler(async(req, res) => {
    const order = await Order.findById(req.params.id);
    if(order){
        res.send(order);
    }else{
        res.status(404).send({ message: 'Order Doses Not Found'});
    }
}))

orderRouter.put('/:id/pay', isAuth, expressAsyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);
    if(order){
        order.isPaid = true,
        order.paidAt= Date.now(),
        order.invoice_no = Math.floor(Math.random() * 50 + 1) + Date.now(),
        order.paymentResult = {
            id: req.body.id,
            status: req.body.status,
            update_time: req.body.update_time,
            email_addtess: req.body.email_address,
        };
        const updatedOrder = await order.save();
        // pdf generation 
        
        if(updatedOrder){
            // generating pdf
            createInvoice(updatedOrder, './backend/routers/invoice.pdf');
            // sending pdf invoice to client 
            const __filename = fileURLToPath(import.meta.url);
            const __dirname = path.dirname(__filename);
            const invoiceSent = path.join(__dirname, 'invoice.pdf');
            // const fileName = 'invoice.pdf';
            // const file = fs.readFileSync(invoiceSent);
            // const attach = new mailgun.Attachment({data: file, filename: fileName, contentType: 'application/pdf'});
            // console.log(invoiceSent);
                const data = {
                    from: 'noreplay@gmail.com',
                    to: `${req.user.email}, careerit29@gmail.com`,
                    // cc:'careerit29@gmail.com',
                    subject: 'Your order Id &  Invoice',
                    attachment:invoiceSent,
                    html: `<h2>Hello, ${req.user.firstName} ${req.user.lastName}</h2>
                     <h3>Your order ID: ${updatedOrder._id}</h3>
                     <p>Thank you for shopping with us!. we've attached your purchase invoice </p>
                     <em>Please visit our blog and news to get a discount deal. <a href='www.localhost:3000'>G-F-H</a></em>
                    `,
                    // attachtment: fs.readFileSync()
                };
                 mg.messages().send(data, function (error, body) {
                    if(error){
                        return res.status(404).send({
                            message: 'Ooops! Something went wrong'
                        })
                    }
                    return res.send({message: 'Your order payment is successfull', order: updatedOrder});
                });
        }
    }else{
        res.status(404).send({message: 'Order not Found'});
    }
}));
export default orderRouter;