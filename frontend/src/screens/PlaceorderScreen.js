import React, { useEffect } from 'react';
import CheckoutSteps from '../components/CheckoutSteps';
import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import { createOrder } from '../actions/orderAction';
import { ORDER_CREATE_RESET } from '../constants/orderConstant';
import LoadingBox from '../components/loadingBox';
import MessageBox from '../components/messageBox';


export default function PlaceorderScreen(props) {
    const cart = useSelector(state => state.cart);
    if(!cart.paymentMethod){
        props.history.push('/payment');
    }

    const orderCreate = useSelector((state) => state.orderCreate);
    const {loading, error, success, order} = orderCreate;

    const toPrice = (num) => Number(num.toFixed(2));
    cart.itemsPrice = toPrice(cart.cartItems.reduce((a, c) => a + c.qty * c.price, 0));
    cart.shippingPrice = cart.itemsPrice > 40 ? toPrice(0) : toPrice(5);
    cart.taxPrice = toPrice(0.15 * cart.itemsPrice);
    cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice;
    const dispatch = useDispatch();

    const placeOrderHandler = () => {
        dispatch(createOrder({...cart, orderItems: cart.cartItems}));
    }

    useEffect(()=>{
        if(success) {
            props.history.push(`/order/${order._id}`);
            dispatch({type: ORDER_CREATE_RESET})
        }
    }, [success, dispatch, order, props.history]);
    
    return (
        <div  className='shipping-container'>
            <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
            <div className='row-top-plac'>
                <div className='plac-ord-dtls'>
                    <ul>
                        <li>
                            <div className='card card-body'>
                                <h3>Shipping Address</h3>
                                <p>
                                    <strong>Name:</strong> {cart.shippingAddress.fullName} <br/>
                                    <strong>Address: </strong> {cart.shippingAddress.address},
                                    {cart.shippingAddress.postCode},{cart.shippingAddress.city},
                                    {cart.shippingAddress.country}
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className='card card-body'>
                                <h3>Payment</h3>
                                <p>
                                    <strong>Method:</strong> {cart.paymentMethod}
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className='card card-body'>
                                <h3>Order Items</h3>
                                <ul>
                                {cart.cartItems.map((item) =>(
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
                                            <p>Brand: {item.brand}</p>
                                            <p>Color: {item.color ? item.color[0]:''}</p>
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
                                        <p>Items cost</p>
                                        <p>€{cart.itemsPrice.toFixed(2)}</p>
                                    </div>
                                </li>
                                <li className='plac-ord-receipt'>
                                    <div>
                                        <p>Shipping cost</p>
                                        <p>€{cart.shippingPrice.toFixed(2)}</p>
                                    </div>
                                </li>
                                <li className='plac-ord-receipt'>
                                    <div>
                                        <p>Tax</p>
                                        <p>€{cart.taxPrice.toFixed(2)}</p>
                                    </div>
                                </li>
                                <li className='plac-ord-receipt'>
                                    <div className='total-line'>
                                        <p><strong>Order Total</strong></p>
                                        <p><strong>€{cart.totalPrice.toFixed(2)}</strong></p>
                                    </div>
                                </li>
                                <li>
                                    <button 
                                        type='button' 
                                        onClick={placeOrderHandler} 
                                        className='btn-plc'
                                        disabled={cart.cartItems.length === 0}
                                    >Place Order</button>
                                </li>
                            </ul>
                            {loading && <LoadingBox></LoadingBox>}
                            {error && <MessageBox>{error}</MessageBox>}
                        </div>
                </div>
            </div>
        </div>
    )
}
