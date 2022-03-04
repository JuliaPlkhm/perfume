import axios from "axios";
import * as types from "../types";

export const setUsers = (user) => {
  return {
    type: types.SET_USERS,
    payload: user,
  };
};

export const addUser = (user) => {
  return {
    type: types.ADD_USER,
    payload: user,
  };
};

export const postUser = (user) => {

  return (dispatch) => {
    axios.post(`https://localhost:5001/users/`, user, {withCredentials: true}).then((res) => {
      dispatch(addUser(res.data));
    });
  };
};

export const deleteUser = (id) => {

  return (dispatch) => {
    axios.delete(`https://localhost:5001/users/${id}`, id, {withCredentials: true}).then((res) => {
      dispatch(getUsers(res.data));
    });
  };
};
export const changeUser = (user) => {

  return (dispatch) => {
    axios.put(`https://localhost:5001/users/`, user, {withCredentials: true}).then((res) => {
      dispatch(getUsers(res.data));
    });
  };
};


export const getUsers = () => {
  return (dispatch) => {
    // debugger
    // fetch("https://reqres.in/api/users/",
    // {
    //   method: 'GET', // *GET, POST, PUT, DELETE, etc.
    //   mode: 'cors', // no-cors, *cors, same-origin
     
    //   credentials: 'include', // include, *same-origin, omit
    //   headers: {
    //     'Content-Type': 'application/json'
    //     // 'Content-Type': 'application/x-www-form-urlencoded',
    //   },
   
    // }
    // ).then(async (res) => {
    //     const json = await res.json();
    //     console.log(json);
    //     dispatch(setUsers(res.data));
    //   })
    axios.get(`https://localhost:5001/users/`, {withCredentials: true}).then((res) => {
      dispatch(setUsers(res.data));
    });
  };
};