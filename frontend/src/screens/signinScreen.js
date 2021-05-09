import React, { useEffect, useState } from 'react';
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import {signin} from '../actions/userAction';
import LoadingBox from '../components/loadingBox.js';
import MessageBox from '../components/messageBox.js';



function SigninScreen (props) {
    // const {handleChange, handleSubmit, values, errors} = useLogin(validate);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';
    const userSignin = useSelector((state)=> state.userSignin);
    const {userInfo, loading, error }= userSignin;
    const {register, handleSubmit, errors} = useForm();
    const emailReg = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
    const passwordReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,12}$/;

    const onSubmit = (data) => {
        dispatch(signin(email, password));
    }
     
    useEffect(()=> {
        if(userInfo){
            props.history.push(redirect);
            localStorage.removeItem('verifySuccess');
        }
    }, [props.history, userInfo, redirect]);

    return ( <>
           <div className="container">
                <div className="signIn-area">
                    <div className="logIN">
                        <div className="singHeader">
                            <p>Welcome Back, Please SIGN IN</p>
                        </div>
                        <form action="" id="logInForm" onSubmit={handleSubmit(onSubmit)}>
                            {loading && <LoadingBox></LoadingBox>}
                            {error && <MessageBox variant='danger'>{error}</MessageBox>}
                            <div className="login-control">
                                <label htmlFor="email">E-mail Address</label>
                                <input 
                                    type="email" 
                                    id="emailLog" 
                                    name="email"
                                    autoComplete='username'
                                    placeholder='Enter email'
                                    ref={register({
                                    required:'Email is required',
                                    validate: (value) => { 
                                        return [emailReg].every((pattern) => pattern.test(value)) || 'Email is Invalid'}
                                    })}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    />
                                    {errors.email && <p id='showErr' className='errorShow'>{errors.email.message}</p> }
                            </div>
                            <div className="login-control">
                                <label htmlFor="password">Password</label>
                                <input 
                                    type="password" 
                                    name="password"
                                    autoComplete='current-password' 
                                    id="passwordLog"
                                    placeholder='Enter password'
                                    ref={register({
                                    required: 'Password is required',
                                    minLength: {
                                        value: 6,
                                        message: 'Minimum 6 Characters',
                                    },
                                    validate: (value) =>{
                                    return [passwordReg].every((pattern) => pattern.test(value)) || 
                                    'At least, One number, One upper & lower case letter'}
                                    }
                                    )}
                                    value={password}
                                    onChange={(e)=> setPassword(e.target.value)}
                                        />
                                    {errors.password && <p id='showErr' className='errorShow'>{errors.password.message}</p> }
                            </div>
                            <div className="subBtn">
                                <button type="submit">Sign In <i className="fa fa-chevron-right"></i></button>
                                <a href="/forgot">(Forget your password?)</a>
                            </div>
                        </form>
                    </div>
                    <div className="register">
                        {/* <div className="singHeader">
                            <p>Join Gift-For-Home</p>
                        </div> */}
                        <div>
                            <h4>New to G-F-H?</h4>
                            <p>Sign up for a free account today</p>
                            <button type="submit"><a href={`/register?redirect=${redirect}`}>Join G-F-H now! <i className=""></i></a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            </>
    )
}


export default SigninScreen;
