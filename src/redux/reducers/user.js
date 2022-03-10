import { SET_USER, SET_LOGIN } from "../types/index"
const initialState = {
    user: null,
    loggedIn: 'unknown',
  };
  
  const loginReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case SET_LOGIN:
        return { ...state, loggedIn: payload};
         
        case SET_USER:

          return { ...state, user: payload };
           
      default:
        return state;
    }
  };
  
  export default loginReducer;
