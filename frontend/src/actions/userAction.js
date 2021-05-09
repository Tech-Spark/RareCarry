import {
    USER_SIGNIN_REQUEST, 
    USER_SIGNIN_SUCCESS, 
    USER_SIGNIN_FAIL,
    USER_SIGNOUT,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL,
    USER_UPDATE_PROFILE_REQUEST,
    USER_UPDATE_PROFILE_SUCCESS,
    USER_UPDATE_PROFILE_FAIL,
    USER_FORGOT_PASSWORD_REQUEST,
    USER_FORGOT_PASSWORD_SUCCESS,
    USER_FORGOT_PASSWORD_FAIL,
    USER_RESET_PASSWORD_REQUEST,
    USER_RESET_PASSWORD_SUCCESS,
    USER_RESET_PASSWORD_FAIL
    } from "../constants/userConstant";
import Axios from 'axios';

export const signin = (email, password) => async (dispatch) => {
    dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password }});
    try {
        const {data} = await Axios.post('/api/users/signin', {email, password});
        dispatch({type:USER_SIGNIN_SUCCESS, payload: data});
        localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({type:USER_SIGNIN_FAIL,
        payload: error.response && error.response.data.message
        ? error.response.data.message
        :error.message,
    });
    }
}
// user registration from actions.
export const registerForm = (firstName, lastName,email, password) => async (dispatch, getState) => {
    dispatch({ type: USER_REGISTER_REQUEST, payload: { 
            firstName, lastName, email, password }});
    try {
        const {data} = await Axios.post('/api/users/register', {
            firstName, lastName, email, password});
        dispatch({type:USER_REGISTER_SUCCESS, payload: data});
        // dispatch({type:USER_SIGNIN_SUCCESS, payload: data});
        localStorage.setItem('getMsg', JSON.stringify(data));
    } catch (error) {
        dispatch({type:USER_REGISTER_FAIL,
        payload: error.response && error.response.data.message
        ? error.response.data.message
        :error.message,
    });
    }
}

export const signout = () => (dispatch) => {
    localStorage.removeItem('userInfo');
    localStorage.removeItem('cartItems');
    localStorage.removeItem('shippingAddress');
    dispatch({type: USER_SIGNOUT});
}

export const detailsUser = (userId) => async (dispatch, getState) => {
    dispatch({type: USER_DETAILS_REQUEST, payload: userId});
    const {userSignin: {userInfo}} = getState();
    try{
        const {data} = await Axios.get(`/api/users/${userId}`, {
            headers: {Authorization: `Bearer ${userInfo.token}`}
        });

        dispatch({type: USER_DETAILS_SUCCESS, payload: data});
    }catch(error) {
        const message = error.response && error.response.data.message
        ? error.response.data.message
        :error.message;
        dispatch({type: USER_DETAILS_FAIL, payload: message});
    }
}

export const forgotPassword = (email) => async (dispatch) => {
    dispatch({type: USER_FORGOT_PASSWORD_REQUEST, payload: email});
    try{
        const {data} = await Axios.put(`/api/users/forgot`, {email});
        dispatch({type: USER_FORGOT_PASSWORD_SUCCESS, payload: data});
    }catch(error){
        const message = error.response && error.response.data.message
        ? error.response.data.message
        :error.message;
        dispatch({type: USER_FORGOT_PASSWORD_FAIL, payload: message});
    }
}

export const resetPassword = (newPassword, token) => async (dispatch) => {
    dispatch({type: USER_RESET_PASSWORD_REQUEST, payload: {newPassword, token}});
    try{
        const {data} = await Axios.put(`/api/users/reset-password`, {newPassword, token});
        dispatch({type: USER_RESET_PASSWORD_SUCCESS, payload: data});
    }catch(error){
        const message = error.response && error.response.data.message
        ? error.response.data.message
        :error.message;
        dispatch({type: USER_RESET_PASSWORD_FAIL, payload: message});
    }
}

export const updateUserProfile = (user) => async (dispatch, getState) =>{
    dispatch({type: USER_UPDATE_PROFILE_REQUEST, payload: user});
    const { userSignin: {userInfo}} = getState();
    try{
        const {data} = await Axios.put(`/api/users/profile`, user, {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            }
        });
        dispatch({type: USER_UPDATE_PROFILE_SUCCESS, payload: data});
        dispatch({type: USER_SIGNIN_SUCCESS, payload: data});
        localStorage.setItem('userInfo', JSON.stringify(data));
    }catch(error){
        const message = error.response && error.response.data.message
        ? error.response.data.message
        :error.message;
        dispatch({type: USER_UPDATE_PROFILE_FAIL, payload: message});
    }
}
