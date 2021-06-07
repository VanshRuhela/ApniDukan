import Axios from "axios";
import { PRODCUT_LIST_FAIL, PRODCUT_LIST_REQUEST, PRODCUT_LIST_SUCCESS } from "../constants/productConstants"

export const listProducts = () => async (dispatch) => {
    dispatch({
        type: PRODCUT_LIST_REQUEST
    });
    try {
        const { data } = await Axios.get('/api/products');
        dispatch({ type: PRODCUT_LIST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({type: PRODCUT_LIST_FAIL, payload: error.message});
    }
};