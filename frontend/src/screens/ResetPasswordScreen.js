import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import { resetPassword } from '../actions/userAction';
import LoadingBox from '../components/loadingBox';
import MessageBox from '../components/messageBox';

export default function ResetPasswordScreen(props) {
    const newPasswordReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,12}$/;
    const [newPassword, setNewPassword] = useState('');
    const [confmNewPassword, setConfmNewPassword] = useState('');
    const {token} = props.match.params;
    const {register, handleSubmit, errors} = useForm();
    const dispatch = useDispatch();
    const userResetPassword = useSelector((state) => state.userResetPassword);
    const {loading, error, userInfo } = userResetPassword;

    const onSubmit = (data) => {
        dispatch(resetPassword(newPassword, token));
    }
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
             <h3>Please, Reset your password.</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='formControl'>
                    <label>New Password</label>
                    <input 
                        type='Password' 
                        name='newPassword'
                        ref={register(
                            {required: 'New password is required',
                            minLength: {value: 6, message: 'Minimum 6 Characters'}, 
                            validate:(value) => {
                                return [newPasswordReg].every((pattern) => pattern.test(value)) || 
                                'At least, One number, One upper & lower case letter'}
                            })}
                        value={newPassword}
                        onChange={(e)=> setNewPassword(e.target.value)}
                    ></input>
                    {errors.newPassword && <p className='errorShow'>{errors.newPassword.message}</p>}
                </div>
                <div className='formControl'>
                    <label>Confirm new password</label>
                    <input 
                        type='Password' 
                        name='confmNewPassword'
                        ref={register(
                            {required: 'Confirm password is required',
                            validate:(value) => {
                                if(value === newPassword){
                                    return true;
                                }
                                return 'Password does not match'}
                            })}
                        value={confmNewPassword}
                        onChange={(e)=> setConfmNewPassword(e.target.value)}
                    ></input>
                    {errors.confmNewPassword && <p className='errorShow'>{errors.confmNewPassword.message}</p>}
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
