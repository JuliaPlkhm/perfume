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
  return (dispatch) => {
    axios.post(`https://localhost:5001/Auth/login`, user, {withCredentials: true}).then((res) => {
            console.log(res.data)
            dispatch(setLogged())
            dispatch(setUser(res.data));
          }).catch(err=>console.log(err));
        };
 
};