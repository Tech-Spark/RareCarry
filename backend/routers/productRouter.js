import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Product from '../models/productModel.js';
import { isAuth, isAdmin } from '../utils.js';

const productRouter = express.Router();
// sending all products from data base to frontend
productRouter.get(
    '/', 
    expressAsyncHandler(async(req, res) =>{
    const products = await Product.find({});
    res.send(products);
})
);
// search bar 
productRouter.get(
    '/search',
    expressAsyncHandler( async (req, res) => {
        const query = req.query.query;
        const searchItem = await Product.find({title: {$regex: query, $options: '$i'}});
        if(searchItem){
            res.send(searchItem);
        }
    })
);
// women page api
productRouter.get(
    '/women',
    expressAsyncHandler(async (req, res) => {
        const womenCat = await Product.find({});
        const myCat = womenCat.filter((cat) => cat.category.gender === 'women');
        if(myCat){
            return res.send(myCat);
        }else{
            return res.status(404).send({mesage: 'Product category is empty'});
        }
    })
);
// men page api
productRouter.get(
    '/men',
    expressAsyncHandler(async (req, res) => {
        const menCat = await Product.find({});
        const myMenCat = menCat.filter((cat) => cat.category.gender === 'men');
        if(myMenCat){
            return res.send(myMenCat);
        }else{
            return res.status(404).send({mesage: 'Product category is empty'});
        }
    })
);
// kids PAGE api  
productRouter.get(
    '/kids',
    expressAsyncHandler(async (req, res) => {
        const kidsCat = await Product.find({});
        const myKidsCat = kidsCat.filter((cat) => cat.category.gender === 'kids');
        if(myKidsCat){
            return res.send(myKidsCat);
        }else{
            return res.status(404).send({mesage: 'Product category is empty'});
        }
    })
);
// NEWS PAGE API 
productRouter.get(
    '/new',
    expressAsyncHandler(async (req, res) => {
        const newCat = await Product.find({});
        const myNewCat = newCat.filter((cat) => cat.category.belong === 'new');
        if(myNewCat){
            return res.send(myNewCat);
        }else{
            return res.status(404).send({mesage: 'Product category is empty'});
        }
    })
);
// accessories PAGE API 
productRouter.get(
    '/accesso',
    expressAsyncHandler(async (req, res) => {
        const accessoCat = await Product.find({});
        const myAccessoCat = accessoCat.filter((cat) => cat.category.belong === 'accessories');
        if(myAccessoCat){
            return res.send(myAccessoCat);
        }else{
            return res.status(404).send({mesage: 'Product category is empty'});
        }
    })
);
// cosmetics PAGE API 
productRouter.get(
    '/cosmetics',
    expressAsyncHandler(async (req, res) => {
        const cosmtCat = await Product.find({});
        const myCosmtCat = cosmtCat.filter((cat) => cat.category.belong === 'cosmetics');
        if(myCosmtCat){
            return res.send(myCosmtCat);
        }else{
            return res.status(404).send({mesage: 'Product category is empty'});
        }
    })
);
// everyday PAGE API 
productRouter.get(
    '/everyday',
    expressAsyncHandler(async (req, res) => {
        const evdyCat = await Product.find({});
        const myEvdyCat = evdyCat.filter((cat) => cat.category.belong === 'everyday');
        if(myEvdyCat){
            return res.send(myEvdyCat);
        }else{
            return res.status(404).send({mesage: 'Product category is empty'});
        }
    })
);
// GADGETS PAGE API 
productRouter.get(
    '/gadgets',
    expressAsyncHandler(async (req, res) => {
        const gadgtCat = await Product.find({});
        const myGadgtCat = gadgtCat.filter((cat) => cat.category.belong === 'gadgets');
        if(myGadgtCat){
            return res.send(myGadgtCat);
        }else{
            return res.status(404).send({mesage: 'Product category is empty'});
        }
    })
);
// toyes PAGE API 
productRouter.get(
    '/toyes',
    expressAsyncHandler(async (req, res) => {
        const toyesCat = await Product.find({});
        const myToyesCat = toyesCat.filter((cat) => cat.category.belong === 'toyes');
        if(myToyesCat){
            return res.send(myToyesCat);
        }else{
            return res.status(404).send({mesage: 'Product category is empty'});
        }
    })
);
// sale PAGE API 
productRouter.get(
    '/sales',
    expressAsyncHandler(async (req, res) => {
        const saleCat = await Product.find({});
        const mySaleCat = saleCat.filter((cat) => cat.category.belong === 'sale');
        if(mySaleCat){
            return res.send(mySaleCat);
        }else{
            return res.status(404).send({mesage: 'Product category is empty'});
        }
    })
);
productRouter.put(
    '/:id',
    isAuth, 
    isAdmin, 
    expressAsyncHandler(async (req, res) => {
        const productId = req.params.id;
        const product = await Product.findById({_id: productId});
        if(product){
            product.title = req.body.title;
            product.name = req.body.name;
            product.price = req.body.price;
            product.image = req.body.image;
            product.brand = req.body.brand;
            product.category = req.body.category;
            product.countInStock = req.body.countInStock;
            product.description = req.body.description;
            const updatedProduct = await product.save();
    if(updatedProduct){
        return res.status(200).send({message: 'Product Updated successfuly', data: updatedProduct});
    }
        }
    
    return res.status(500).send({message: 'Error In Updating Product'});
}))

productRouter.delete(
    '/:id', 
    isAuth, 
    isAdmin, 
    expressAsyncHandler(async (req, res) => {
        const deleteProduct = await Product.findById(req.params.id);
        if(deleteProduct) {
            await deleteProduct.remove();
            res.send({message: 'Product Deleted successfully'});
        }else{
            res.status(404).send('Error in Delition');
        }
}))


productRouter.post(
    '/create',
    isAuth, 
    isAdmin, 
    expressAsyncHandler(async (req, res) => {
        const product = new Product({
            title: req.body.title,
            name: req.body.name,
            image: req.body.image,
            brand: req.body.brand,
            category:req.body.category,
            description:req.body.description,
            price:req.body.price,
            countInStock:req.body.countInStock,
            rating:req.body.rating,
            numReviews: req.body.numReviews,
    });
    const newProduct = await product.save();
    if(newProduct){
        return res.status(201).send({message: 'Product Created successfuly', data: newProduct});
    }
    return res.status(500).send({message: 'Error in Creating Product'});
}))


productRouter.get(
    '/seed', 
    expressAsyncHandler(async(req, res) => {
        // await Product.remove({});
    const createdProducts = await Product.insertMany(data.products);
    res.send({createdProducts});
})
);

// details api should be at the bottom or it can have confilit with seed api
productRouter.get(
    '/:id', 
    expressAsyncHandler(async(req, res) =>{
    const product = await Product.findById(req.params.id);
    if(product){
        res.send(product);
    }else{
        res.status(404).send({message: 'Product Not Found'});
    }
})
);
export default productRouter;