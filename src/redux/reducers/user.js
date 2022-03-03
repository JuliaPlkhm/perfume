// import { SET_USER, SET_LOGIN } from "../types/index"
// const initialState = {
//   userName: null,
//     loggedIn: false,
//   };
  
//   const loginReducer = (state = initialState, { type, payload }) => {
//     switch (type) {
//       case SET_LOGIN:
//         return { ...state, userName: payload.username };
         
//         case SET_USER:
//           return { ...state, userName: payload.username  };
           
//       default:
//         return state;
//     }
//   };
  
//   export default loginReducer;


  import { SET_USER, SET_DOG, SET_GOOGLE_USER } from "../types";

const initialState = {
  user: null,
  dog: null,
  googleUser: null,
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER:
      return { ...state, user: payload };

    case SET_DOG:
      return { ...state, dog: payload };

    case SET_GOOGLE_USER:
      return { ...state, googleUser: payload };

    default:
      return state;
  }
};

export default userReducer;