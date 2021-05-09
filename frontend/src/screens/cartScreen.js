import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../actions/cartActions';

function CartScreen (props) {
    const productId = props.match.params.id;
    const qty = props.location.search ? 
    Number(props.location.search.split('=')[1])
    : 1;
    const cart = useSelector(state => state.cart);
    // const toPrice = (num) => Number(num.toFixed(2));
    const {cartItems} = cart;
    const dispatch = useDispatch();
    let delFees = 5;
    let freeDelAmount = 40;
    const subTotal = cartItems.reduce((a , c) => a + c.price * c.qty, 0);
    const deliveryFees = subTotal < freeDelAmount && subTotal > 0  ? delFees : 0;
    


    // get current date
    const myDate = new Date();
    const weekDay = ['Sun', 'Mon', 'Tues', 'Wed', 'Thrus', 'Fri', 'Sat'];
    // const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    const day = weekDay[myDate.getDay()];
    const date = myDate.getDate();
    const month = myDate.getMonth() + 1;
    const year = myDate.getFullYear();
    const fixDay = weekDay[myDate.getDay() + 3];
    const fixDate = myDate.setDate(myDate.getDate() + 3);

    const total = ()=> {
        return subTotal + deliveryFees;
    }
    useEffect(()=>{
        if(productId){
            dispatch(addToCart(productId, qty));
        }
    }, [dispatch, productId, qty]);

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id));
    }
    const checkOutHandler = () => {
        props.history.push('/signin?redirect=shipping');
    }
    return (
        <>
            <div className='back-to-main'><i className="fa fa-angle-double-left"></i><Link to='/'>Back</Link></div>
            <section className='cartItems'>
                <div className='cartIttems-details'>
                    <div className='cartList'>
                        <div className='pd-list-block'>
                            {cartItems.length === 0 ? <h3>Your Cart is Empty! Go Shopping.<Link to='/'>Shop Now</Link></h3>
                            : (
                            <div className='product-brif'>
                            <h3> Your Bag ({cartItems.length > 1 ? cartItems.length + 'Items': cartItems.length + 'Item'}) </h3>
                            <ul className='cart-pd-list'>
                                {cartItems.map((item) => (
                                <li key={item.product} className='pd-list'>
                                    <div className='cart-pd-img'>
                                        <img src={item.image[0]} alt='pdList'/>
                                    </div>
                                    <div>
                                        <ul className='cart-pd-title'>
                                            <li><Link to={`/product/${item.product}`}>{item.name}</Link></li>
                                            <li>{item.brand}</li>
                                            <li>{item.color ? item.color[0] : ''}</li>
                                            <li><button type='button'
                                                        onClick={() => removeFromCartHandler(item.product)}
                                                        className='Rmv-F-ct'>Remove</button></li>
                                        </ul>
                                    </div>
                                    <div className='pr-qty'>
                                        <select
                                        value={item.qty}
                                        onChange={(e)=>
                                        dispatch(
                                            addToCart(item.product, Number(e.target.value))
                                            )
                                        }
                                        >
                                            {[...Array(item.countInStock).keys()].map((x) => (
                                                <option key={x + 1}>{x + 1}</option>
                                            ))}
                                        </select>
                                        <div>
                                            <strong> € {item.price}</strong>
                                        </div>
                                    </div>
                                </li>
                                ))}
                                </ul>
                            </div>)}
                            <div className='total-price'>
                                <h3>Total Quantity: <b>{cartItems.reduce((a, c) => a + c.qty, 0 )}</b></h3>
                                <p>Subtotal: € <b> {subTotal.toFixed(2)}</b></p>
                                <p>Delivery Cost: € <b>{deliveryFees.toFixed(2)}</b></p>
                                <p className='total'>Total: € <small>(VAT excluded)</small> <b>{total().toFixed(2)}</b></p>
                                <p className='checkout-btn'>
                                    <button type='button'
                                            onClick={checkOutHandler}
                                            disabled={cartItems.length === 0}>
                                            Go To CHECKOUT</button>
                                </p>
                            </div>
                        </div>
                        <div className='adtnl-info'>
                            <h4>Estimated Delivery</h4>
                            <div className='delivery-date'>
                                <ul className='current-date'>
                                    <li>{day}</li>
                                    <li>-</li>
                                    <li> {date}</li>
                                    <li>/</li>
                                    <li>{month}</li>
                                    <li>/</li>
                                    <li> {year}</li>
                                </ul>
                                <strong className='seperator'>--</strong>
                                <ul className='future-date'>
                                    <li>{fixDay}</li>
                                    <li>-</li>
                                    <li> {fixDate}</li>
                                    <li>/</li>
                                    <li>{month}</li>
                                    <li>/</li>
                                    <li> {year}</li>
                                </ul>
                            </div>
                        </div>
                        <div className='adtnl-info'>
                            <h4>We accept</h4>
                            <ul className='pay-options'>
                                <li><img src='/images/visa.png' alt='payments'/></li>
                                <li><img src='/images/master.jpg' alt='payments'/></li>
                                <li><img src='/images/paypal.png' alt='payments'/></li>
                                <li><img src='/images/amex.png' alt='payments'/></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <article className='reltd-items'>
                    <div className='reltd-item'>
                        <div className='title-smlr-cart'>
                            <h3> You might also like</h3>
                        </div>
                        <ul className='related-items'>
                            <li><img src='' alt=''></img></li>
                            <li><img src='' alt=''></img></li>
                            <li><img src='' alt=''></img></li>
                            <li><img src='' alt=''></img></li>
                        </ul>
                    </div>
                </article>
            </section>
            
        </>
    )
}


export default CartScreen;
