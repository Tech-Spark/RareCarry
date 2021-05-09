import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useForm} from 'react-hook-form';
import { forgotPassword } from '../actions/userAction';
import LoadingBox from '../components/loadingBox';
import MessageBox from '../components/messageBox';

export default function ForgotPasswordScreen() {
    const dispatch = useDispatch();
    const emailReg = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
    const [email, setEmail] = useState('');
    const {register, handleSubmit, errors} = useForm();
    const userForgotPassword = useSelector((state) => state.userForgotPassword);
    const {loading, error, userInfo } = userForgotPassword;

    const onSubmit = (data) => {
        dispatch(forgotPassword(email));
    }

    // useEffect(() => {
       
    // }, [])

    return (
        <>
         {loading ? ( 
           <LoadingBox></LoadingBox>
           )
            : userInfo ? (
                <p className='email-noti'>{userInfo.message}</p>
            )
            : error ? (
               <MessageBox variant='danger'>{error}</MessageBox>
            )   
            : (
          <div className='forgot-container'>
             <h3>Please, Enter your email address.</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                {}
                <div className='formControl'>
                    <label>Email</label>
                    <input 
                        type='email' 
                        name='email'
                        ref={register(
                            {required: 'Email is required', 
                            validate:(value) => {
                                return [emailReg].every((pattern) => pattern.test(value)) || 'Email is Invalid'}
                            })}
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                    ></input>
                    {errors.email && <p className='errorShow'>{errors.email.message}</p>}
                </div>
                <div className='btn-forgot-div'>
                    <button type='submit' className='btn-forgot'>Submit</button>
                </div>
            </form>
            </div>
                )}
        </>
    )

}
