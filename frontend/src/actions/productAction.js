import Axios from "axios";
import {PRODUCT_ACCESSOCAT_LIST_FAIL, PRODUCT_ACCESSOCAT_LIST_REQUEST, PRODUCT_ACCESSOCAT_LIST_SUCCESS, PRODUCT_COSMTCAT_LIST_FAIL, PRODUCT_COSMTCAT_LIST_REQUEST, PRODUCT_COSMTCAT_LIST_SUCCESS, PRODUCT_DELETE_FAIL, PRODUCT_DELETE_REQUEST, PRODUCT_DELETE_SUCCESS, PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, 
    PRODUCT_DETAILS_SUCCESS, 
    PRODUCT_EVERYDAYCAT_LIST_FAIL, 
    PRODUCT_EVERYDAYCAT_LIST_REQUEST, 
    PRODUCT_EVERYDAYCAT_LIST_SUCCESS, 
    PRODUCT_GADGETSCAT_LIST_FAIL, 
    PRODUCT_GADGETSCAT_LIST_REQUEST, 
    PRODUCT_GADGETSCAT_LIST_SUCCESS, 
    PRODUCT_KIDSCAT_LIST_FAIL, 
    PRODUCT_KIDSCAT_LIST_REQUEST, 
    PRODUCT_KIDSCAT_LIST_SUCCESS, 
        PRODUCT_LIST_FAIL,
        PRODUCT_LIST_REQUEST,
        PRODUCT_LIST_SUCCESS,
        PRODUCT_MENCAT_LIST_FAIL,
        PRODUCT_MENCAT_LIST_REQUEST,
        PRODUCT_MENCAT_LIST_SUCCESS,
        PRODUCT_NEWCAT_LIST_FAIL,
        PRODUCT_NEWCAT_LIST_REQUEST,
        PRODUCT_NEWCAT_LIST_SUCCESS,
        PRODUCT_SALECAT_LIST_FAIL,
        PRODUCT_SALECAT_LIST_REQUEST,
        PRODUCT_SALECAT_LIST_SUCCESS,
        PRODUCT_SAVE_FAIL,
        PRODUCT_SAVE_REQUEST,
        PRODUCT_SAVE_SUCCESS,
        PRODUCT_SEARCH_LIST_FAIL,
        PRODUCT_SEARCH_LIST_REQUEST,
        PRODUCT_SEARCH_LIST_SUCCESS,
        PRODUCT_TOYESCAT_LIST_FAIL,
        PRODUCT_TOYESCAT_LIST_REQUEST,
        PRODUCT_TOYESCAT_LIST_SUCCESS,
        PRODUCT_WOMENCAT_LIST_FAIL,
        PRODUCT_WOMENCAT_LIST_REQUEST,
        PRODUCT_WOMENCAT_LIST_SUCCESS} from '../constants/productConstant';

// Search bar action 
export const searchList = (keyWord) => async (dispatch) => {
    dispatch({type: PRODUCT_SEARCH_LIST_REQUEST, payload: keyWord});
    try{
        const {data} = await Axios.get(`api/products/search?query=${keyWord}`);
        dispatch({type: PRODUCT_SEARCH_LIST_SUCCESS, payload: data})
    }catch(error){
        dispatch({type: PRODUCT_SEARCH_LIST_FAIL, payload: error.response && error.response.data.message
            ? error.response.data.message : error.message});
    }
}

//women category page action
export const womenCatList = () => async(dispatch) => {
    dispatch({type: PRODUCT_WOMENCAT_LIST_REQUEST});
    try {
        const { data } = await Axios.get('/api/products/women');
        dispatch({type: PRODUCT_WOMENCAT_LIST_SUCCESS, payload: data});
    }catch(error) {
        dispatch({type:PRODUCT_WOMENCAT_LIST_FAIL, payload: error.message});
    }
}

// men category page action
export const menCatList = () => async(dispatch) => {
    dispatch({type: PRODUCT_MENCAT_LIST_REQUEST});
    try {
        const { data } = await Axios.get('/api/products/men');
        dispatch({type: PRODUCT_MENCAT_LIST_SUCCESS, payload: data});
    }catch(error) {
        dispatch({type:PRODUCT_MENCAT_LIST_FAIL, payload: error.message});
    }
}

// kids category page action
export const kidsCatList = () => async(dispatch) => {
    dispatch({type: PRODUCT_KIDSCAT_LIST_REQUEST});
    try {
        const { data } = await Axios.get('/api/products/kids');
        dispatch({type: PRODUCT_KIDSCAT_LIST_SUCCESS, payload: data});
    }catch(error) {
        dispatch({type:PRODUCT_KIDSCAT_LIST_FAIL, payload: error.message});
    }
}
// news category page action
export const newCatList = () => async(dispatch) => {
    dispatch({type: PRODUCT_NEWCAT_LIST_REQUEST});
    try {
        const { data } = await Axios.get('/api/products/new');
        dispatch({type: PRODUCT_NEWCAT_LIST_SUCCESS, payload: data});
    }catch(error) {
        dispatch({type:PRODUCT_NEWCAT_LIST_FAIL, payload: error.message});
    }
}
// accesso cat page action
export const accessoCatList = () => async(dispatch) => {
    dispatch({type: PRODUCT_ACCESSOCAT_LIST_REQUEST});
    try {
        const { data } = await Axios.get('/api/products/accesso');
        dispatch({type: PRODUCT_ACCESSOCAT_LIST_SUCCESS, payload: data});
    }catch(error) {
        dispatch({type:PRODUCT_ACCESSOCAT_LIST_FAIL, payload: error.message});
    }
}
// cometics cat page action
export const cosmtCatList = () => async(dispatch) => {
    dispatch({type: PRODUCT_COSMTCAT_LIST_REQUEST});
    try {
        const { data } = await Axios.get('/api/products/cosmetics');
        dispatch({type: PRODUCT_COSMTCAT_LIST_SUCCESS, payload: data});
    }catch(error) {
        dispatch({type:PRODUCT_COSMTCAT_LIST_FAIL, payload: error.message});
    }
}
// everyday cat page action
export const everydCatList = () => async(dispatch) => {
    dispatch({type: PRODUCT_EVERYDAYCAT_LIST_REQUEST});
    try {
        const { data } = await Axios.get('/api/products/everyday');
        dispatch({type: PRODUCT_EVERYDAYCAT_LIST_SUCCESS, payload: data});
    }catch(error) {
        dispatch({type:PRODUCT_EVERYDAYCAT_LIST_FAIL, payload: error.message});
    }
}
// gadgets cat page action
export const gadgtCatList = () => async(dispatch) => {
    dispatch({type: PRODUCT_GADGETSCAT_LIST_REQUEST});
    try {
        const { data } = await Axios.get('/api/products/gadgets');
        dispatch({type: PRODUCT_GADGETSCAT_LIST_SUCCESS, payload: data});
    }catch(error) {
        dispatch({type:PRODUCT_GADGETSCAT_LIST_FAIL, payload: error.message});
    }
}
// toyes cat page action
export const toyCatList = () => async(dispatch) => {
    dispatch({type: PRODUCT_TOYESCAT_LIST_REQUEST});
    try {
        const { data } = await Axios.get('/api/products/toyes');
        dispatch({type: PRODUCT_TOYESCAT_LIST_SUCCESS, payload: data});
    }catch(error) {
        dispatch({type:PRODUCT_TOYESCAT_LIST_FAIL, payload: error.message});
    }
}
// sales cat page action
export const salesCatList = () => async(dispatch) => {
    dispatch({type: PRODUCT_SALECAT_LIST_REQUEST});
    try {
        const { data } = await Axios.get('/api/products/sales');
        dispatch({type: PRODUCT_SALECAT_LIST_SUCCESS, payload: data});
    }catch(error) {
        dispatch({type:PRODUCT_SALECAT_LIST_FAIL, payload: error.message});
    }
}
//total product list action
export const listProducts = () => async(dispatch) => {
    dispatch({
        type:PRODUCT_LIST_REQUEST,
    });
    try{
        const { data } = await Axios.get('/api/products');
        dispatch({type: PRODUCT_LIST_SUCCESS, payload: data});
    }catch(error){
        dispatch({type:PRODUCT_LIST_FAIL, payload: error.message});
    }
}

export const saveProduct = (product) => async (dispatch, getState) => {
    try{
        dispatch({ type: PRODUCT_SAVE_REQUEST, payload: product});
        const {userSignin: {userInfo}} = getState();
        if(!product._id){
        const { data } = await Axios.post('/api/products/create', product, {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
        }
        });
        dispatch({type: PRODUCT_SAVE_SUCCESS, payload: data});
    }else{
        const {data} = await Axios.put('/api/products/' + product._id, product, {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            }
        });
        dispatch({type: PRODUCT_SAVE_SUCCESS, payload: data});
        }
    }catch(error) {
        dispatch({type: PRODUCT_SAVE_FAIL, payload: error.message});
    }
}

export const detailsProduct = (productId) => async (dispatch) => {
    dispatch({type: PRODUCT_DETAILS_REQUEST, payload: productId});
    try{
        const {data} = await Axios.get(`/api/products/${productId}`);
    dispatch({type: PRODUCT_DETAILS_SUCCESS, payload: data});
    }catch(error){
    dispatch({type: PRODUCT_DETAILS_FAIL, payload: error.response && error.response.data.message
    ? error.response.data.message : error.message});
    }
}

export const deleteProduct = (productId) => async (dispatch, getState) => {
    dispatch({type: PRODUCT_DELETE_REQUEST, payload: productId});
    const {userSignin: {userInfo}} = getState();
    try{
        const {data} = await Axios.delete(`/api/products/${productId}`, {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            }
        });
    dispatch({type: PRODUCT_DELETE_SUCCESS, payload: data, succes: true});
    }catch(error){
    dispatch({type: PRODUCT_DELETE_FAIL, payload: error.response && error.response.data.message
    ? error.response.data.message : error.message});
    }
}