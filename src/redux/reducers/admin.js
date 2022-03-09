import {SET_ADMIN_USERS, ADD_ADMIN_USER} from "../types";

const initialState = {
  adminUsers: null,
  };
  
const adminUsersReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case SET_ADMIN_USERS:
      return { ...state, adminUsers: payload };

      case ADD_ADMIN_USER:
        return { ...state, adminUsers: [...state.adminUsers, payload]};
  
   
    default:
      return state;
  }
};

export default adminUsersReducer;