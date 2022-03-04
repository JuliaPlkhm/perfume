import axios from "axios";
import * as types from "../types/index";

export const setLogged = () => {

  return {
    type: types.SET_LOGIN,
  };
};

export const setUser = (user) => {

    return {
    type: types.SET_USER,
    payload: user,
  };
};



export const setLogin = (user) => {
  // debugger 
  return (dispatch) => {
    axios.post(`https://localhost:5001/Auth/login`, user, {withCredentials: true}).then((res) => {
            console.log(res.data)
            dispatch(setLogged())
            dispatch(setUser(res.data));
          }).catch(err=>console.log(err));
        };
 
};

// import axios from "axios";
// import * as types from "../types";

// export const setUser = (user) => {
//   return {
//     type: types.SET_USER,
//     payload: user,
//   };
// };

// export const getUser = (id) => {
//   // debugger
//   return dispatch => {
//   // debugger

//     axios.post(`https://localhost:5001/Auth/login`,{userName: "admin", password: "admin"}).then((res) => {
//       console.log(res)
//       dispatch(setUser(res.data.data));
//     }).catch(err=>console.log(err));
//     // return { type: types.SET_USER, payload: user };
//   };
// };