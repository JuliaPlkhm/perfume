import { SET_USER, SET_LOGIN } from "../types/index"
const initialState = {
    user: null,
    loggedIn: false,
  };
  
  const loginReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case SET_LOGIN:
        return { ...state, loggedIn: true };
         
        case SET_USER:

          return { ...state, user: payload };
           
      default:
        return state;
    }
  };
  
  export default loginReducer;
