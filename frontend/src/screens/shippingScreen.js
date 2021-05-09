import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAddress } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps'

export default function ShippingScreen(props) {
    const userSignin = useSelector(state => state.userSignin);
    const { userInfo} = userSignin;
    const cart = useSelector(state => state.cart);
    const {shippingAddress} = cart;
    const [fullName, setFullName] = useState(shippingAddress.fullName);
    const [address, setAddress] = useState(shippingAddress.address);
    const [postCode, setPostCode] = useState(shippingAddress.postCode);
    const [city, setCity] = useState(shippingAddress.city);
    const [country, setCountry] = useState(shippingAddress.country);
    const dispatch = useDispatch();

    if(!userInfo){
        props.history.push('/signin');
    }

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveShippingAddress({fullName, address, postCode, city, country}));
        props.history.push('/payment');
    }
    return (
        <div className='shipping-container'>
           <CheckoutSteps step1 step2></CheckoutSteps>
           <form onSubmit={submitHandler} className='shipping-form'>
               <div>
                   <h2>Shipping Address</h2>
               </div>
               <div>
                   <label htmlFor='fullName'>Full Name</label>
                   <input
                        type='text'
                        id='fullName'
                        placeholder='Enter full name'
                        value={fullName || ''}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                    ></input>
               </div>
               <div>
                   <label htmlFor='address'>Address</label>
                   <input
                        type='text'
                        id='address'
                        placeholder='Enter address'
                        value={address || ''}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    ></input>
               </div>
               <div>
                   <label htmlFor='postCode'>PostCode</label>
                   <input
                        type='text'
                        id='postCode'
                        placeholder='Enter post code'
                        value={postCode || ''}
                        onChange={(e) => setPostCode(e.target.value)}
                        required
                    ></input>
               </div>
               <div>
                   <label htmlFor='city'>City</label>
                   <input
                        type='text'
                        id='city'
                        placeholder='Enter city'
                        value={city || ''}
                        onChange={(e) => setCity(e.target.value)}
                        required
                    ></input>
               </div>
               <div>
                   <label htmlFor='country'>Country</label>
                   <input
                        type='text'
                        id='country'
                        placeholder='Enter country'         
                        value={country || ''}
                        onChange={(e) => setCountry(e.target.value)}
                        required
                    ></input>
               </div>
               <button type='submit' className='btn'>Continue</button>
           </form>
        </div>
    )
}
