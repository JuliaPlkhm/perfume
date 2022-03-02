import { LOGIN_USER } from "../types/index"
const initialState = {
    loggedIn: false,
  };
  
  const loginReducer = (state = initialState, { type }) => {
    switch (type) {
      case LOGIN_USER:
        return { ...state, loggedIn: true };
         
      default:
        return state;
    }
  };
  
  export default loginReducer;