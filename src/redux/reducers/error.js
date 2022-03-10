import {SET_ERROR} from "../types";

const initialState = {
  error: null,
  };
  
const errorReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case SET_ERROR:
      return { ...state, error: payload };

   
    default:
      return state;
  }
};

export default errorReducer;