import * as types from "../types/index";


export const setError = (error) => {
    return {
    type: types.SET_ERROR,
    payload: error,
  };
};