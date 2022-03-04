import { SET_ROLES} from "../types/index"
const initialState = {
    roles: null,
  };
  
  const rolesReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case SET_ROLES:
        return { ...state,  roles: payload };
         
      default:
        return state;
    }
  };
  
  export default rolesReducer;