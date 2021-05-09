import {applyMiddleware, 
        createStore, 
        compose, 
        combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { cartReducer } from './reducer/cartReducers';
import { 
        orderDetailsReducer, 
        orderMineListReducer, 
        orderPayReducer, 
        orederCreateReducer } from './reducer/orderReducer';
import { accessoCatListReducer,
        cosmtCatListReducer, 
        everydayCatListReducer, 
        gadgetsCatListReducer, 
        kidsCatListReducer, 
        menCatListReducer, 
        newCatListReducer, 
        productDeleteReducer, 
        productDetailsReducer, 
        productLisReducer, 
        productSaveReducer,
        saleCatListReducer,
        searchListReducer,
        toyesCatListReducer,
        womenCatListReducer} from './reducer/productReducers';
import { 
    userDetailsReducer,
    userForgotPasswordReducer,
    userRegisterReducer, 
    userResetPasswordReducer, 
    userSigninReducer, 
    userUpdateProfileReducer} from './reducer/userReducer';

const initialState = {
    userSignin: {
        userInfo: localStorage.getItem('userInfo')
        ? JSON.parse(localStorage.getItem('userInfo'))
        : null,
    },
    cart: {
        cartItems: localStorage.getItem('cartItems')
          ? JSON.parse(localStorage.getItem('cartItems'))
          : [],
          shippingAddress: localStorage.getItem('shippingAddress')
          ? JSON.parse(localStorage.getItem('shippingAddress'))
          :{},
          paymentMethod: 'PayPal',
    },
};

const reducer = combineReducers({
    productList: productLisReducer,
    searchList: searchListReducer,
    womenCatList: womenCatListReducer,
    menCatList: menCatListReducer,
    kidsCatList: kidsCatListReducer,
    newCatList: newCatListReducer,
    accessoCatList: accessoCatListReducer,
    cosmtCatList: cosmtCatListReducer,
    everydayCatList: everydayCatListReducer,
    gadgetsCatList: gadgetsCatListReducer,
    toyesCatList: toyesCatListReducer,
    saleCatList: saleCatListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    orderCreate: orederCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderMineList: orderMineListReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    productSave: productSaveReducer,
    productDelete: productDeleteReducer,
    userForgotPassword: userForgotPasswordReducer,
    userResetPassword:userResetPasswordReducer,
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk)));

export default store;