import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { savePaymentMethod } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps'

export default function PaymentScreen(props) {
    const cart = useSelector(state => state.cart);
     const { shippingAddress} = cart;
     if(!shippingAddress.address){
         props.history.push('/shpping');
     }
    const [paymentMethod, setPaymentMethod] = useState('PayPal');
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(savePaymentMethod(paymentMethod));
        props.history.push('/placeorder');
    }
    return (
        <div className='shipping-container'>
            <CheckoutSteps step1 step2 step3></CheckoutSteps>
            <form className='payment-form' onSubmit={submitHandler}>
                <div>
                    <h2>Choose Payment method</h2>
                    <p>Note: At present paypal payment method is possible. soon we will add another methods! sorry for the inconvinent.</p>
                </div>
                <div className='pay-method'>
                    <div>
                        <input 
                        type='radio' 
                        id='paypal' 
                        value='PayPal' 
                        name='paymentMethod' 
                        required 
                        checked 
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        ></input>
                        {/* <label htmlFor='paypal' className='payment-lable'>PayPal</label> */}
                        <img src='/images/paypal.png' alt='paypal'></img>
                    </div>
                    <div>
                        <input 
                        type='radio' 
                        id='visa' 
                        value='visa' 
                        name='paymentMethod' 
                        required  
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        ></input>
                        {/* <label htmlFor='visa' className='payment-lable'>vsia</label> */}
                        <img src='/images/visa.png' alt='visa'></img>
                    </div>
                    <div>
                        <input 
                        type='radio' 
                        id='master' 
                        value='master' 
                        name='paymentMethod' 
                        required  
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        ></input>
                        {/* <label htmlFor='master' className='payment-lable'>vsia</label> */}
                        <img src='/images/master.jpg' alt='master'></img>
                    </div>
                </div>
                <button type='submit' className='btn'>Continue</button>
            </form>

        </div>
    )
}
