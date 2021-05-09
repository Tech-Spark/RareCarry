import React, {useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {registerForm} from '../actions/userAction';
import LoadingBox from '../components/loadingBox';
import MessageBox from '../components/messageBox';
import {useForm} from 'react-hook-form';


function RegisterScreen (props) {
    // const {handleChange, handleSubmit, values, errors} = useForm(validate);
    const dispatch = useDispatch();
    const letterReg = /^[A-Za-z]+$/;
    const emailReg = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
    const passwordReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,12}$/;
    const {register, handleSubmit, errors} = useForm();
    const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';
    const userRegister = useSelector((state) => state.userRegister);
    const { loading, error, userInfo} = userRegister;
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    // const [emailvfySuccess, setEmailvfySuccess] = useState(null);

    const onSubmit = () => {
            dispatch(registerForm(firstName, lastName, email, password));
        }
    // const vrfyMe = () => {
    //         const emailSentSuccess = localStorage.getItem('getMsg');
    //         setEmailvfySuccess(emailSentSuccess);
    //     }
    // const succMsg = JSON.parse(emailSentSucces);
    // useEffect(() => {
        // vrfyMe();
            // props.history.push('/verify-email');
    // }, []);
    
    return (
        <>
        {userInfo ? (
            <p className='email-noti'>{userInfo.message}</p>
        ): (
        <>
          <div className="container">
          <div className="formBody">
            <div className='login-direct'>
                <h3> I'm new here</h3>
                <p>Already have an account? <a href={`/signin?redirect=${redirect}`}>Login</a> </p>
                {loading && <LoadingBox></LoadingBox> }
            </div>
            <form action="" id="form" onSubmit={handleSubmit(onSubmit)}>
                <div className="formControl0">
                    {error && <MessageBox>{error} </MessageBox>}
                    <div className="formControl">
                        <label htmlFor="fname">First Name: *</label>
                        <input 
                            type="text" 
                            id="fname" 
                            name='firstName' 
                            className="styleipt" 
                            placeholder="First Name"
                            ref={register({
                                required: 'First Name is required',
                                maxLength:{
                                    value: 10,
                                    message: 'Maximum 10 Letters'
                                },
                                minLength: {
                                    value: 3,
                                    message: 'At lest 3 characters',
                                },
                                validate: (value) => {
                                    return [letterReg].every((pattern) => pattern.test(value)) || 'Only Letters'},
                            })}
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        {errors.firstName && 
                            <p className='errorShow'>{errors.firstName.message}</p>
                        }
                    </div>
                    <div className="formControl">
                        <label htmlFor="lname">Last Name: *</label>
                        <input 
                            type="text" 
                            id="lname" 
                            name="lastName" 
                            className="styleipt" 
                            placeholder="Last Name"
                            ref={register({
                                required: 'Last Name is required',
                                maxLength:{
                                    value: 10,
                                    message: 'Maximum 10 Letters'
                                },
                                minLength: {
                                    value: 3,
                                    message: 'At lest 3 characters',
                                },
                                validate: (value) => {
                                    return [letterReg].every((pattern) => pattern.test(value)) || 'Only Letters'},
                            })}
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        {errors.lastName && 
                            <p className='errorShow'>{errors.lastName.message}</p>
                        }
                    </div>
                    <div className="formControl">
                        <label htmlFor="email">Email: *</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email"
                            autoComplete='username' 
                            className="styleipt" 
                            placeholder="email"
                            ref={register({
                                required:'Email is required',
                                validate: (value) => { 
                                    return [emailReg].every((pattern) => pattern.test(value)) || 'Email format is Invalid'}
                                })}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && <p className='errorShow'>{errors.email.message}</p>}
                    </div>
                    <div className="formControl">
                        <label htmlFor="pwssd">Password: *</label>
                        <input 
                            type="password" 
                            id="pwssd" 
                            name='password'
                            autoComplete='new-password' 
                            className="styleipt" 
                            placeholder="At least 6 characters"
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
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {errors.password && <p className='errorShow'>{errors.password.message}</p>}
                    </div>
                    <div className="formControl">
                        <label htmlFor="confirm-password">Confirm Password: *</label>
                        <input 
                            type="password" 
                            id="c-pwssd" 
                            name='cPassword' 
                            className="styleipt"
                            autoComplete='new-password' 
                            placeholder="Confirm password"
                            ref={register({
                                required: 'Confirm Password is required',
                                validate: (value) =>{
                                    if(value === password){
                                        return true;
                                    }
                                    return 'Password does not match';
                                }
                            })}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        {errors.cPassword && <p className='errorShow'>{errors.cPassword.message}</p>}
                    </div>
                    {/* <div className="formControl">
                        <label htmlFor="datemin">Birthday: *</label>
                        <input 
                            type="date" 
                            id="datemin" 
                            name="datemin" 
                            min="1960-01-01" 
                            max="2020-01-01"
                            value={values.datemin}
                            onChange={handleChange}/>
                        {errors.datemin && <p className='errorShow'>{errors.datemin}</p>}
                    </div> */}
                    <div className="signEmail">
                        <h3>G-F-H Email SignUp</h3>
                        <p>sign up for emails and receive exclusive offers, new arrivals & more! you can unsubscribe at
                            any
                            time.</p>
                        <div className="adcbox">
                            <input type="checkbox" id="cbox"/>
                            <i>Sign up for G-F-H emails</i></div>
                    </div>
                    <button type="submit" id="btnRg">Join Us</button>
                </div>
            </form>
        </div>
    </div>
    </>
    )}
        </>
    )
}


export default RegisterScreen;
