import * as types from "../types/index";
import { postAPI } from "../../api/api";
import { getAPI } from "../../api/api";
import { deleteAPI } from "../../api/api";
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
    postAPI(`/Auth/login`, user).then((res) => {
      dispatch(setUser(res.data));
      dispatch(setLogged(true))
      dispatch(setError(null))
           
           }).catch(err=>dispatch(setError(err.response.data)));
        };
 
};

export const logout = () => {
  return (dispatch) => {
   deleteAPI(`/Auth/login`).then((res) => {
      dispatch(setUser(null));
      dispatch(setLogged(false))
          
          }).catch(err=>dispatch(setError(err.response.data)));
        };
 
};
export const checkLogged = () => {
  return (dispatch) => {
  getAPI(`/Auth/me`).then((res) => {
            dispatch(setUser(res.data));
            dispatch(setLogged(true))
          
          }).catch(err=>dispatch(setLogged(false)));
        };
 
};