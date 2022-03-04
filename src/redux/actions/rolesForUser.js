import axios from "axios";
import * as types from "../types/index";


export const setRolesForUser = (user) => {
// debugger
    return {
    type: types.SET_ROLES_FOR_USER,
    payload: user,
  };
};


