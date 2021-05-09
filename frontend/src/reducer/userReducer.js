import { 
    USER_SIGNIN_REQUEST, 
    USER_SIGNIN_SUCCESS, 
    USER_SIGNIN_FAIL,  
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
    USER_SIGNOUT,
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL,
    USER_UPDATE_PROFILE_SUCCESS,
    USER_UPDATE_PROFILE_FAIL,
    USER_UPDATE_PROFILE_RESET,
    USER_UPDATE_PROFILE_REQUEST,
    USER_FORGOT_PASSWORD_REQUEST,
    USER_FORGOT_PASSWORD_SUCCESS,
    USER_FORGOT_PASSWORD_FAIL,
    USER_RESET_PASSWORD_FAIL,
    USER_RESET_PASSWORD_SUCCESS,
    USER_RESET_PASSWORD_REQUEST,
} from "../constants/userConstant";

export const userSigninReducer = (state = {}, action) => {
    switch(action.type) {
        case USER_SIGNIN_REQUEST:
            return { loading: true};
        case USER_SIGNIN_SUCCESS:
            return { loading: false, userInfo: action.payload};
        case USER_SIGNIN_FAIL:
            return { loading: false, error: action.payload};
        case USER_SIGNOUT:
            return {};
        default: 
            return state;
    }
}

export const userRegisterReducer = (state = {}, action) => {
    switch(action.type) {
        case USER_REGISTER_REQUEST:
            return { loading: true};
        case USER_REGISTER_SUCCESS:
            return { loading: false, userInfo: action.payload};
        case USER_REGISTER_FAIL:
            return { loading: false, error: action.payload};
        default: 
            return state;
    }
}

export const userForgotPasswordReducer = (state = {}, action) => {
    switch(action.type) {
        case USER_FORGOT_PASSWORD_REQUEST:
            return { loading: true};
        case USER_FORGOT_PASSWORD_SUCCESS:
            return { loading: false, userInfo: action.payload};
        case USER_FORGOT_PASSWORD_FAIL:
            return { loading: false, error: action.payload};
        default: 
            return state;
    }
}

export const userResetPasswordReducer = (state = {}, action) => {
    switch(action.type){
        case USER_RESET_PASSWORD_REQUEST:
            return { loading: true};
        case USER_RESET_PASSWORD_SUCCESS:
            return {loading: false, userInfo: action.payload};
        case USER_RESET_PASSWORD_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}

export const userDetailsReducer = (state = {loading: true}, action) =>{
    switch(action.type) {
        case USER_DETAILS_REQUEST:
            return {loading: true};
        case USER_DETAILS_SUCCESS:
            return {loading: false, user: action.payload};
        case USER_DETAILS_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}

export const userUpdateProfileReducer = (state = {}, action) => {
    switch(action.type){
        case USER_UPDATE_PROFILE_REQUEST:
            return { loading: true};
        case USER_UPDATE_PROFILE_SUCCESS:
            return { loading: false, success: true};
        case USER_UPDATE_PROFILE_FAIL:
            return { loading: false, error: action.payload};
        case USER_UPDATE_PROFILE_RESET:
            return {};
        default:
            return state;
    }
}