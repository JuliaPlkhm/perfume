import { SET_USERS } from "../types/index"
const initialState = {
  users: null,
  };
  
  const loginReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      
        case SET_USERS:
          return { ...state, userName: payload };
           
      default:
        return state;
    }
  };
  
  export default usersReducer;