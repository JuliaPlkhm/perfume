import { SET_USERS, ADD_USER, DELETE_USER} from "../types/index"
const initialState = {
  users: null,
  };
  
const usersReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case SET_USERS:
      // debugger
      return { ...state, users: payload };

      case ADD_USER:
        // debugger
        return { ...state, users: [...state.users, payload]};
  
   
    default:
      return state;
  }
};

export default usersReducer;