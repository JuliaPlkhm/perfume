import * as types from "../types/index";


export const setError = (error) => {
// debugger
    return {
    type: types.SET_ERROR,
    payload: error,
  };
};