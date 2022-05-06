import axios from "axios";
import * as types from "../types";
import { setError } from "./error";

import { postAPI } from "../../api/api";
import { getAPI } from "../../api/api";
import { deleteAPI } from "../../api/api";
import { putAPI } from "../../api/api";

export const setRoles = (user) => {
  return {
    type: types.SET_ROLES,
    payload: user,
  };
};

export const setPages = (user) => {
  return {
    type: types.SET_PAGES,
    payload: user,
  };
};

export const getRoles = (id) => {
  return (dispatch) => {

   getAPI(`/Roles/`).then((res) => {
      dispatch(setRoles(res.data));
    }).catch(err=>dispatch(setError(err.response.data)));
  };
};

export const getPages = (id) => {
  return (dispatch) => {

    getAPI(`/Roles/permissions`).then((res) => {
      dispatch(setPages(res.data));
    }).catch(err=>dispatch(setError(err.response.data)));
  };
};
export const deleteRole = (id) => {

  return (dispatch) => {
    deleteAPI(`/Roles/${id}`).then((res) => {
      dispatch(getRoles());
    }).catch(err=>dispatch(setError(err.response.data)));
  };
};

export const postRole = (role) => {

  return (dispatch) => {
    postAPI(`/Roles/`, role).then((res) => {
      dispatch(getRoles());
      dispatch(setError(null))

    }).catch(err=>dispatch(setError(err.response.data)));
  };
};

export const changeRole = (role) => {

  return (dispatch) => {
    putAPI(`/Roles/`, role).then((res) => {
      dispatch(getRoles());
    }).catch(err=>dispatch(setError(err.response.data)));
  };
};

export const postPage = (page) => {

  return (dispatch) => {
   postAPI(`/Roles/permissions`, page).then((res) => {
      dispatch(getRoles());
    }).catch(err=>dispatch(setError(err.response.data)));
  };
};

export const deletePage = (page) => {

  return (dispatch) => {
    axios.delete(`https://localhost:5001/Roles/permissions`, {withCredentials: true, data: page}).then((res) => {
      dispatch(getRoles());
    });
  };
};
