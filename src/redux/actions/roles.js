import axios from "axios";
import * as types from "../types";

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

    axios.get(`https://localhost:5001/Roles/`, {withCredentials: true}).then((res) => {
      dispatch(setRoles(res.data));
    });
  };
};

export const getPages = (id) => {
  return (dispatch) => {

    axios.get(`https://localhost:5001/Roles/permissions`, {withCredentials: true}).then((res) => {
      dispatch(setPages(res.data));
    });
  };
};
export const deleteRole = (id) => {

  return (dispatch) => {
    axios.delete(`https://localhost:5001/Roles/${id}`,  {withCredentials: true}).then((res) => {
      dispatch(getRoles());
    });
  };
};

export const postRole = (role) => {

  return (dispatch) => {
    axios.post(`https://localhost:5001/Roles/`, role, {withCredentials: true}).then((res) => {
      dispatch(getRoles());
    });
  };
};

export const changeRole = (role) => {

  return (dispatch) => {
    axios.put(`https://localhost:5001/Roles/`, role, {withCredentials: true}).then((res) => {
      dispatch(getRoles());
    });
  };
};

export const postPage = (page) => {

  return (dispatch) => {
    axios.post(`https://localhost:5001/Roles/permissions`, page, {withCredentials: true}).then((res) => {
      dispatch(getRoles());
    });
  };
};

export const deletePage = (page) => {

  return (dispatch) => {
    axios.delete(`https://localhost:5001/Roles/permissions`, {withCredentials: true, data: page}).then((res) => {
      dispatch(getRoles());
    });
  };
};

// export const deletePage = (page) => {
// debugger
//   return (dispatch) => {
//     axios.delete(`https://localhost:5001/Roles/permissions`, page, {withCredentials: true}).then((res) => {
//       dispatch(getRoles());
//     });
//   };
// };