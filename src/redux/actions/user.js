// import axios from "axios";
// import * as types from "../types/index";

// export const setLogged = (user) => {

//   return {
//     type: types.SET_LOGIN,
//   };
// };

// export const setUser = (user) => {

//     return {
//     type: types.SET_USER,
//     payload: user,
//   };
// };

// export const setLogin = (user) => {
//   debugger 
//   return (dispatch) => {axios.get(`https://reqres.in/api/users`).then((res) => {
//       console.log(res)
//     dispatch(setUser(res.data.data));
//       dispatch(setLogin());

//     }).catch(err=>console.log(err));


  
//     // return { type: types.SET_USER, payload: user };
//   };
 
// };

import axios from "axios";
import * as types from "../types";

export const setUser = (user) => {
  return {
    type: types.SET_USER,
    payload: user,
  };
};

export const getUser = (id) => {
  debugger
  return dispatch => {
  debugger

    axios.get(`https://reqres.in/api/users/`).then((res) => {
      console.log(res)
      dispatch(setUser(res.data.data));
    }).catch(err=>console.log(err));
    // return { type: types.SET_USER, payload: user };
  };
};