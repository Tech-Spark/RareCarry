import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { detailsUser, updateUserProfile } from '../actions/userAction';
import LoadingBox from '../components/loadingBox';
import MessageBox from '../components/messageBox';
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstant';

export default function ProfileScreen() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPasswrod] = useState('');
    const [confirmPassword, setConfirmPasswrod] = useState('');

    const userSignin = useSelector((state) => state.userSignin);
    const {userInfo} = userSignin;
    const userDetails = useSelector((state) => state.userDetails);
    const {loading, error, user} = userDetails;
    const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
    const {
        success: successUpdate, 
        error: errorUpdate, 
        loading: loadingUpdate
        } = userUpdateProfile;
    const dispatch = useDispatch();

    useEffect(() =>{
        if(!user){
            dispatch({type: USER_UPDATE_PROFILE_RESET})
            dispatch(detailsUser(userInfo._id)); 
        }else{
           setFirstName(user.firstName);
           setLastName(user.lastName);
           setEmail(user.email); 
        }
          
    }, [dispatch, userInfo._id, user]);

    const submitHandler = (e) => {
        e.preventDefault();
        if(password !== confirmPassword){
            alert('Password does not match');
        }else{
            dispatch(updateUserProfile({userId: user._id, firstName, lastName, email, password}));
        }
    }
    return (
        <div className='prof-container'>
            <form className='prof-form' onSubmit={submitHandler}>
                <div>
                    <h2>User Profile</h2>
                </div>
                {
                    loading ? (<LoadingBox></LoadingBox>)
                    :
                    error ? (<MessageBox>{error}</MessageBox>)
                    : (
                    <>
                    {loadingUpdate && (<LoadingBox></LoadingBox>)}
                    {errorUpdate && (<MessageBox>{errorUpdate}</MessageBox>)}
                    {successUpdate && (<MessageBox>Profile Updated Successfully</MessageBox>)}
                       <div>
                           <label htmlFor='firstName'>FirstName</label>
                           <input
                             id='firstName'
                             name='firstName'
                             type='text'
                             placeholder='Enter first name'
                             value={firstName}
                             onChange={(e) => setFirstName(e.target.value)}
                           ></input>
                       </div>
                       <div>
                           <label htmlFor='laststName'>LastName</label>
                           <input
                             id='lastName'
                             name='lastName'
                             type='text'
                             placeholder='Enter lastst name'
                             value={lastName}
                             onChange={(e) => setLastName(e.target.value)}
                           ></input>
                       </div>
                       <div>
                           <label htmlFor='email'>Email</label>
                           <input
                             id='email'
                             name='email'
                             type='text'
                             placeholder='Enter email'
                             value={email}
                             onChange={(e) => setEmail(e.target.value)}
                           ></input>
                       </div>
                       <div>
                           <label htmlFor='password'>Password</label>
                           <input
                             id='password'
                             name='password'
                             type='password'
                             placeholder='Enter password'
                             onChange={(e) => setPasswrod(e.target.value)}
                           ></input>
                       </div>
                       <div>
                           <label htmlFor='confirmpassword'>Confirm Password</label>
                           <input
                             id='confirmpassword'
                             name='confirmPassword'
                             type='password'
                             placeholder='Enter confirm password'
                             onChange={(e) => setConfirmPasswrod(e.target.value)}
                           ></input>
                       </div>
                       <div>
                           <button className='primary' type='submit'>
                               Update
                           </button>
                       </div>
                    </>
                    )
                }
            </form>
        </div>
    )
}
