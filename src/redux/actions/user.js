import axios from "axios";
import * as types from "../types/index";

import { setError } from "./error";

export const setLogged = (isLogged) => {

  return {
    type: types.SET_LOGIN,
    payload: isLogged,
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
            dispatch(setLogged(true))
            dispatch(setUser(res.data));
          }).catch(err=>dispatch(setError(err.response)));
        };
 
};

export const logout = () => {
  return (dispatch) => {
    axios.delete(`https://localhost:5001/Auth/login`, {withCredentials: true}).then((res) => {
      dispatch(setLogged(false))
          
          }).catch(err=>dispatch(setError(err.response.data)));
        };
 
};
export const checkLogged = () => {
  return (dispatch) => {
    axios.get(`https://localhost:5001/Auth/me`, {withCredentials: true}).then((res) => {
            dispatch(setUser(res.data));
            dispatch(setLogged(true))
          
          }).catch(err=>dispatch(setLogged(false)));
        };
 
};