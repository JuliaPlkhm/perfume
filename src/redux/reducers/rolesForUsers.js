import { SET_ROLES_FOR_USER } from "../types/index"
const initialState = {
  rolesForUsers: null,
   
  };
  
  const rolesForUsersReducer = (state = initialState, { type, payload }) => {
    switch (type) {
     
        case SET_ROLES_FOR_USER:

          return { ...state,  rolesForUsers: payload };
           
      default:
        return state;
    }
  };
  
  export default rolesForUsersReducer;


