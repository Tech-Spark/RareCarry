import { PRODUCT_ACCESSOCAT_LIST_FAIL, PRODUCT_ACCESSOCAT_LIST_REQUEST, PRODUCT_ACCESSOCAT_LIST_SUCCESS, PRODUCT_COSMTCAT_LIST_FAIL, PRODUCT_COSMTCAT_LIST_REQUEST, PRODUCT_COSMTCAT_LIST_SUCCESS, PRODUCT_DELETE_FAIL, PRODUCT_DELETE_REQUEST, PRODUCT_DELETE_SUCCESS, PRODUCT_DETAILS_FAIL, 
         PRODUCT_DETAILS_REQUEST, 
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

export const productLisReducer = (state = {products: [] }, action) => {
    switch(action.type){
        case PRODUCT_LIST_REQUEST:
            return { loading: true, products: []};
        case PRODUCT_LIST_SUCCESS:
            return {loading: false, products: action.payload};
        case PRODUCT_LIST_FAIL:
            return {loading:false, error: action.payload};
        default: 
            return state;
    }
}
//WOMEN CAT PAGE reducer
export const womenCatListReducer = (state = {products: [] }, action) => {
    switch(action.type){
        case PRODUCT_WOMENCAT_LIST_REQUEST:
            return { loading: true, products: []};
        case PRODUCT_WOMENCAT_LIST_SUCCESS:
            return {loading: false, products: action.payload};
        case PRODUCT_WOMENCAT_LIST_FAIL:
            return {loading:false, error: action.payload};
        default: 
            return state;
    }
}
// MEN CAT PAGE reducer 
export const menCatListReducer = (state = {products: [] }, action) => {
    switch(action.type){
        case PRODUCT_MENCAT_LIST_REQUEST:
            return { loading: true, products: []};
        case PRODUCT_MENCAT_LIST_SUCCESS:
            return {loading: false, products: action.payload};
        case PRODUCT_MENCAT_LIST_FAIL:
            return {loading:false, error: action.payload};
        default: 
            return state;
    }
}
// kids cat page reducer
export const kidsCatListReducer = (state = {products: [] }, action) => {
    switch(action.type){
        case PRODUCT_KIDSCAT_LIST_REQUEST:
            return { loading: true, products: []};
        case PRODUCT_KIDSCAT_LIST_SUCCESS:
            return {loading: false, products: action.payload};
        case PRODUCT_KIDSCAT_LIST_FAIL:
            return {loading:false, error: action.payload};
        default: 
            return state;
    }
}

// new cat page ruducer 
export const newCatListReducer = (state = {products: [] }, action) => {
    switch(action.type){
        case PRODUCT_NEWCAT_LIST_REQUEST:
            return { loading: true, products: []};
        case PRODUCT_NEWCAT_LIST_SUCCESS:
            return {loading: false, products: action.payload};
        case PRODUCT_NEWCAT_LIST_FAIL:
            return {loading:false, error: action.payload};
        default: 
            return state;
    }
}
// ACCESSO cat page ruducer 
export const accessoCatListReducer = (state = {products: [] }, action) => {
    switch(action.type){
        case PRODUCT_ACCESSOCAT_LIST_REQUEST:
            return { loading: true, products: []};
        case PRODUCT_ACCESSOCAT_LIST_SUCCESS:
            return {loading: false, products: action.payload};
        case PRODUCT_ACCESSOCAT_LIST_FAIL:
            return {loading:false, error: action.payload};
        default: 
            return state;
    }
}
// COSMETICS cat page ruducer 
export const cosmtCatListReducer = (state = {products: [] }, action) => {
    switch(action.type){
        case PRODUCT_COSMTCAT_LIST_REQUEST:
            return { loading: true, products: []};
        case PRODUCT_COSMTCAT_LIST_SUCCESS:
            return {loading: false, products: action.payload};
        case PRODUCT_COSMTCAT_LIST_FAIL:
            return {loading:false, error: action.payload};
        default: 
            return state;
    }
}
// EVERYDAY cat page ruducer 
export const everydayCatListReducer = (state = {products: [] }, action) => {
    switch(action.type){
        case PRODUCT_EVERYDAYCAT_LIST_REQUEST:
            return { loading: true, products: []};
        case PRODUCT_EVERYDAYCAT_LIST_SUCCESS:
            return {loading: false, products: action.payload};
        case PRODUCT_EVERYDAYCAT_LIST_FAIL:
            return {loading:false, error: action.payload};
        default: 
            return state;
    }
}
// GADGETS cat page ruducer 
export const gadgetsCatListReducer = (state = {products: [] }, action) => {
    switch(action.type){
        case PRODUCT_GADGETSCAT_LIST_REQUEST:
            return { loading: true, products: []};
        case PRODUCT_GADGETSCAT_LIST_SUCCESS:
            return {loading: false, products: action.payload};
        case PRODUCT_GADGETSCAT_LIST_FAIL:
            return {loading:false, error: action.payload};
        default: 
            return state;
    }
}
// toyes cat page ruducer 
export const toyesCatListReducer = (state = {products: [] }, action) => {
    switch(action.type){
        case PRODUCT_TOYESCAT_LIST_REQUEST:
            return { loading: true, products: []};
        case PRODUCT_TOYESCAT_LIST_SUCCESS:
            return {loading: false, products: action.payload};
        case PRODUCT_TOYESCAT_LIST_FAIL:
            return {loading:false, error: action.payload};
        default: 
            return state;
    }
}
// SALE cat page ruducer 
export const saleCatListReducer = (state = {products: [] }, action) => {
    switch(action.type){
        case PRODUCT_SALECAT_LIST_REQUEST:
            return { loading: true, products: []};
        case PRODUCT_SALECAT_LIST_SUCCESS:
            return {loading: false, products: action.payload};
        case PRODUCT_SALECAT_LIST_FAIL:
            return {loading:false, error: action.payload};
        default: 
            return state;
    }
}
// SEARCH LIST REDUCER
export const searchListReducer = (state = {products: [] }, action) => {
    switch(action.type){
        case PRODUCT_SEARCH_LIST_REQUEST:
            return { loading: true, products: []};
        case PRODUCT_SEARCH_LIST_SUCCESS:
            return {loading: false, products: action.payload};
        case PRODUCT_SEARCH_LIST_FAIL:
            return {loading:false, error: action.payload};
        default: 
            return state;
    }
}
export const productDetailsReducer = (state = {product:{}, loading: true,}, action) => {
    switch(action.type){
        case PRODUCT_DETAILS_REQUEST:
            return { loading: true};
        case PRODUCT_DETAILS_SUCCESS:
            return {loading: false, success: true, product: action.payload};
        case PRODUCT_DETAILS_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}

export const productDeleteReducer = (state = {product:{}, loading: true,}, action) => {
    switch(action.type){
        case PRODUCT_DELETE_REQUEST:
            return { loading: true};
        case PRODUCT_DELETE_SUCCESS:
            return {loading: false, success: true, product: action.payload};
        case PRODUCT_DELETE_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}

export const productSaveReducer = (state = {product:{}}, action) => {
    switch(action.type){
        case PRODUCT_SAVE_REQUEST:
            return { loading: true};
        case PRODUCT_SAVE_SUCCESS:
            return {loading: false, success: true, product: action.payload};
        case PRODUCT_SAVE_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}