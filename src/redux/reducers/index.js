import { combineReducers } from "redux";
import user from "./user";
import users from "./users";
import roles from "./roles";
import rolesForUsers from "./rolesForUsers"
import admin from "./admin";




export default combineReducers({
    admin,
    user,
    users,
    roles,
    rolesForUsers
  });