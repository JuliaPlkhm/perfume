import { SET_USERS, ADD_USER, DELETE_USER} from "../types/index"
const initialState = {
  users: null,
  };
  
const usersReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case SET_USERS:
      return { ...state, users: payload };

      case ADD_USER:
        return { ...state, users: [...state.users, payload]};
  
   
    default:
      return state;
  }
};

export default usersReducer;