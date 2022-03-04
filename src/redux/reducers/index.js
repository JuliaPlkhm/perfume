import { combineReducers } from "redux";
import user from "./user";
import users from "./users";
import roles from "./roles";
import rolesForUsers from "./rolesForUsers"



export default combineReducers({
    user,
    users,
    roles,
    rolesForUsers
  });