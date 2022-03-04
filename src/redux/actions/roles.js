import axios from "axios";
import * as types from "../types";

export const setRoles = (user) => {
  return {
    type: types.SET_ROLES,
    payload: user,
  };
};

export const getRoles = (id) => {
  return (dispatch) => {

    axios.get(`https://localhost:5001/Roles/`, {withCredentials: true}).then((res) => {
      dispatch(setRoles(res.data));
    });
  };
};