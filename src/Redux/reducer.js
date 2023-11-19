import { GET_DATA_ERROR, GET_DATA_LOADING, GET_DATA_SUCCESS } from "./actionType";

const intitalState={
    isLoading:false,
    isError:false,
    todos:[]
}

export const reducer=(state=intitalState,{type,payload})=>{

    switch (type) {
      case GET_DATA_LOADING: {
        return {
          ...state,
          isLoading: true,
          isError: false,
        };
      }
      case GET_DATA_SUCCESS: {
        return {
          todos: payload,
          isLoading: false,
          isError: false,
        };
      }
      case GET_DATA_ERROR: {
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      }
      default:
        return state;
    }
}