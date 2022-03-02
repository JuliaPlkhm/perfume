import axios from "axios";
import * as types from "../types/index";

export const setLogin = () => {
  return {
    type: types.LOGIN_USER,
  };
};

