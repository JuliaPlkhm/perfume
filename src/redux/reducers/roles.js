import { SET_ROLES, SET_PAGES} from "../types/index"
const initialState = {
    roles: null,
    pages: null,

  };
  
const rolesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ROLES:
      return { ...state, roles: payload };
    case SET_PAGES:
      return { ...state, pages: payload };

    default:
      return state;
  }
};

  export default rolesReducer;