import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signout } from '../actions/userAction';


function LoginMiniWindow(props){
    const userSignin = useSelector((state)=> state.userSignin);
    const { userInfo} = userSignin;
    const dispatch = useDispatch();

    const signoutHandler = () => {
        dispatch(signout());
    }
    return (
        <div className='loginMini'>
            {userInfo ? (
                <div>
                    <p>Welcome back <Link to='#'>{userInfo.firstName}</Link></p>
                    <ol className='logMin-list'>
                        <li>
                            <Link to='/profile'>Your Account</Link></li>
                        <li>
                            <Link to='/orderhistory'>Your Orders</Link>
                        </li>
                        <li>Retrun an Item</li>
                        <li>Help  and FAQ</li>
                        <li><Link to='/signout' onClick={signoutHandler}>Sign Out</Link></li>
                    </ol>
                </div>
            ) : (
                <div>
                        <b className='login-minW'><Link to='/signin'>Login</Link></b>
                        <p className='login-regIcon'><Link to='/register'>Register now - </Link>It only takes a minute</p>
                </div>

            )}
            {userInfo && userInfo.isAdmin && (
                <div className='dropAdmin'>
                    <ul>
                        <li>
                            <Link to='/products'>Upload Product</Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default LoginMiniWindow;