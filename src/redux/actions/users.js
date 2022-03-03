import axios from "axios";
import * as types from "../types";

export const setUsers = (user) => {
  return {
    type: types.SET_USERS,
    payload: user,
  };
};

export const getUser = (id) => {
  return (dispatch) => {
    debugger
    axios.get(`https://localhost:5001/users/`).then((res) => {
      dispatch(setUsers(res.data.data));
    });
  };
};