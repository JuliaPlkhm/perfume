import { SET_PROFILE } from "../types/index"
const initialState = {
    loggedIn: false,
  };
  
  const loginReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case SET_PROFILE:
        return { ...state, loggedIn: true };
         
      default:
        return state;
    }
  };
  
  export default loginReducer;