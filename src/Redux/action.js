import axios from 'axios'
import { GET_DATA_ERROR, GET_DATA_LOADING, GET_DATA_SUCCESS } from './actionType';

export const getData=()=>async(dispatch)=>{
 try {
    dispatch({type:GET_DATA_LOADING});
    const res = await axios.get("https://tododata-6410.onrender.com/Todo");

    dispatch({type:GET_DATA_SUCCESS,  payload: res.data });
    
 } catch (error) {
    dispatch({type:GET_DATA_ERROR})
 }
}