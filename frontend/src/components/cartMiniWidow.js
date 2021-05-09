import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../actions/cartActions';

function CartMiniWindow(props){
    const productId = props;
    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;
    const dispatch = useDispatch();

    useEffect(()=>{
        if(productId){
            dispatch(addToCart(productId));
        }
    }, [dispatch, productId]);
    return (
        <div className='CartMini'>
           {cartItems.length === 0 ? (
              <div className='emptyMCart-display'>
                <h3>Your Bag is Empty</h3>
                <p className='go-fill'>Go. Go fill it up with all your fashion hopes and dreams.</p>
                <p className='not-know'>Don't know where to start?</p>
             </div>
         ) : (
         
            <>
            <h3>Items in your bag!</h3>
            <div className='hideCart-item'>
            <ul className='cartMinItem'>
                {cartItems.map((item) => (
                <li key={item.product}>
                    <div className='cart-pd-img'>
                        <img src={item.image[0]} alt='pdList'/>
                    </div>
                    <strong>{item.name}</strong>
                    <strong>Price: € {item.price}</strong>
                </li>
                )
                )}
            </ul>
            </div>
         </>
         )}
            {cartItems.length < 1 ? <div className='see-newpd'><Link to='/news'>See What's New?</Link></div> : ''}
            <div className='see-theCart'><Link to='/cart'>BASKET</Link></div>
        </div>
    )
}

export default CartMiniWindow;