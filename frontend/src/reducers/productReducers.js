import { PRODCUT_LIST_FAIL, PRODCUT_LIST_REQUEST, PRODCUT_LIST_SUCCESS } from "../constants/productConstants";

export const productListReducer = (state = { loading:true,  products: [] }, action) => {
    switch (action.type) {
        case PRODCUT_LIST_REQUEST:
            return { loading: true };
        case PRODCUT_LIST_SUCCESS:
            return { loading: false, products: action.payload };
        case PRODCUT_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};