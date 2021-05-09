import React, { useEffect, useState } from 'react';
import {PayPalButton} from 'react-paypal-button-v2';
import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import LoadingBox from '../components/loadingBox';
import MessageBox from '../components/messageBox';
import { detailsOrder, payOrder } from '../actions/orderAction';
import Axios from 'axios';
import {ORDER_PAY_RESET} from '../constants/orderConstant';


export default function OrderDtScreen(props) {
    const orderId = props.match.params.id;
    const [sdkReady, setSdkReady] = useState(false);
    const orderDetails = useSelector(state => state.orderDetails);
    const {loading, error, order } = orderDetails;
    const orderPay = useSelector( state => state.orderPay);
    const {loading: loadingPay, error: errorPay, success: successPay} = orderPay;
    const dispatch = useDispatch();
    const nodeRef = React.useRef();

    useEffect(()=>{
        const addPayPalScript = async () => {
            const { data } = await Axios.get('/api/config/paypal');
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.src=`https://www.paypal.com/sdk/js?client-id=${data}`;
            script.async = true;
            script.onload = () => {
                setSdkReady(true);
            };
            document.body.appendChild(script);
        }
        if(!order || successPay || (order && order._id !== orderId)){
            dispatch({type: ORDER_PAY_RESET});
            dispatch(detailsOrder(orderId));
        }else{
            if(!order.isPaid){
                if(!window.paypal){
                    addPayPalScript();
                }else{
                    setSdkReady(true);
                }
            }
        }
    }, [dispatch, successPay, order, orderId, sdkReady]);

    const successPaymentHandler = (paymentResult) => {
        dispatch(payOrder(order, paymentResult));
    }
    
    return loading? (<LoadingBox></LoadingBox>) :
           error? (<MessageBox>{error}</MessageBox>) :
        (
        <div  className='shipping-container'>
            <div className='row-top-plac'>
                <div className='plac-ord-dtls'>
                        <h2 className='order-id'>Your Order Id: {order._id}</h2>
                    <ul>
                        <li>
                            <div className='card card-body'>
                                <h3>Shipping To</h3>
                                <p>
                                    <strong>Name:</strong> {order.shippingAddress.fullName} <br/>
                                    <strong>Address: </strong> {order.shippingAddress.address},
                                    {order.shippingAddress.postCode},{order.shippingAddress.city},
                                    {order.shippingAddress.country}
                                </p>
                                {order.isDeliverd?
                                <MessageBox>Delivered at: {order.deliveredAt}</MessageBox>
                                : <MessageBox>Not Delivered</MessageBox>
                                }
                            </div>
                        </li>
                        <li>
                            <div className='card card-body'>
                                <h3>Payment</h3>
                                <p>
                                    <strong>Method:</strong> {order.paymentMethod}
                                </p>
                                {order.isPaid?
                                <MessageBox>Paid at: {order.paidAt}</MessageBox>
                                : <MessageBox>Not Paid</MessageBox>
                                }
                            </div>
                        </li>
                        <li>
                            <div className='card card-body'>
                                <h3>Order Items</h3>
                                <ul>
                                {order.orderItems.map((item) =>(
                                    <li key={item.product} className='plac-ord-total'>
                                        <div className='row-plac-img'>
                                            <img
                                               src={item.image[0]}
                                               alt={item.name}
                                               className='small'
                                               ></img>
                                        </div>
                                        <div>
                                            <Link to={`/product/${item.product}`}>{item.name}</Link>
                                        </div>
                                        <div>{item.qty} x €{item.price} = €{item.qty * item.price}</div>
                                    </li>
                                )
                                )}
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='col-1'>
                        <div className='card card-body'>
                            <ul>
                                <li>
                                    <h3>Order Summery</h3>
                                </li>
                                <li className='plac-ord-receipt'>
                                    <div>
                                        <p>Items</p>
                                        <p>€{order.itemsPrice.toFixed(2)}</p>
                                    </div>
                                </li>
                                <li className='plac-ord-receipt'>
                                    <div>
                                        <p>Shipping</p>
                                        <p>€{order.shippingPrice.toFixed(2)}</p>
                                    </div>
                                </li>
                                <li className='plac-ord-receipt'>
                                    <div>
                                        <p>Tax</p>
                                        <p>€{order.taxPrice.toFixed(2)}</p>
                                    </div>
                                </li>
                                <li className='plac-ord-receipt'>
                                    <div className='total-line'>
                                        <p><strong>Order Total</strong></p>
                                        <p><strong>€{order.totalPrice.toFixed(2)}</strong></p>
                                    </div>
                                </li>
                                {
                                    !order.isPaid && (
                                    <>
                                        <li>
                                            <div className='pay-here'>
                                                <p>if the payment button doesn't appear! please reload the page</p>
                                                <i className="fa fa-angle-double-down fa-2x"></i>
                                            </div>
                                        </li>
                                        <li>
                                            {!sdkReady? (<LoadingBox></LoadingBox>):
                                            (<>
                                             {errorPay && <MessageBox>{errorPay}</MessageBox>}
                                             {loadingPay && <LoadingBox></LoadingBox>}
                                                <PayPalButton amount={order.totalPrice} onSuccess={successPaymentHandler} nodeRef={nodeRef}>
                                                </PayPalButton>
                                            </>
                                            )
                                            }
                                        </li>
                                    </>
                                    )
                                }
                            </ul>
                        </div>
                </div>
            </div>
        </div>
    )
}
