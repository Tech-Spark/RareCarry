import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiUserLine, RiShoppingBagLine } from 'react-icons/ri';
import LoginMiniWindow from './loginMiniWindow';
import CartMiniWindow from './cartMiniWidow';
import { useSelector } from 'react-redux';
import SearchComponant from './SearchComponant';
import RespNavBar from './RespNavBar';


function HeaderSect(){

    const [loginMini, setLoginMini] = useState(false);
    const [cartMini, setCartMini] = useState(false);
    const cart = useSelector(state => state.cart);
    const [navBar, setNavBar] = useState(false);
    const { cartItems} = cart;

    const showMenu = () => {
        setNavBar(!navBar);
        setTimeout(() => {
            setNavBar(false);
        }, 3500);
    }

    return (
        <div className='container-header'>
            <section className='header-top-bar'>
                <div className='top-bar'>
                    <ul className='top-bar-link'>
                        <li><Link to='/help-contact'>Help and contact</Link></li>
                        <li><Link to='/delivery-return'>Free delivery and returns*</Link></li>
                        <li><Link to='/all-about'>All about RareCarry</Link></li>
                    </ul>
                </div>
            </section>
            <section className='logo-bar'>
                <div className='logo'>
                   <Link to='/'> <img src='/images/logoMain.png' alt=''></img></Link>
                </div>
                <div className='Gender-category'>
                    <ul>
                        <li><Link to='/man'>Men</Link></li>
                        <li><Link to='/women'>Women</Link></li>
                        <li><Link to='/kids'>kids</Link></li>
                    </ul>
                </div>
                <div className='signin-Cart'>
                    <ul className='sign-cart-icon'>
                        <li 
                          onMouseEnter={() => setLoginMini(!loginMini)}
                          onMouseLeave={() =>setLoginMini(!loginMini)}>
                          <RiUserLine size='1.5em'></RiUserLine>
                          { loginMini && <LoginMiniWindow/>}
                        </li>
                        <li 
                          className='cart-hover-box'
                          onMouseEnter={() => setCartMini(!cartMini)}
                          onMouseLeave={() =>setCartMini(!cartMini)}>
                          <RiShoppingBagLine size='1.5em'></RiShoppingBagLine>
                          {cartMini && <CartMiniWindow/>}
                          {cartItems.length > 0 && (
                            <b className='cart-digit'>{cartItems.length}</b>)}
                        </li>
                    </ul>
                </div>
            </section>
            <section className='nav-bar'>
                <div className='main-nav'>
                    <ul className='nav-ul'>
                        <li><Link to='/news'>New</Link></li>
                        <li><Link to='/accessories'>Accessories</Link></li>
                        <li><Link to='/cosmetics'>Cosmetics</Link></li>
                        <li><Link to='/everyday'>Everyday</Link></li>
                        <li><Link to='/gadgets'>Gadgets</Link></li>
                        <li><Link to='/toyes'>Toyes</Link></li>
                        <li className='sale'><Link to='/sales'>Sale</Link></li>
                    </ul>
                    <div className='menu-bar' onClick={showMenu}><i className="fa fa-bars fa-2x"></i></div>
                </div>
                {navBar && <RespNavBar></RespNavBar> }
                <SearchComponant></SearchComponant>
            </section>
            <div className='Hr-line'>
                <hr></hr>
            </div>
        </div>
    )

}





export default HeaderSect;