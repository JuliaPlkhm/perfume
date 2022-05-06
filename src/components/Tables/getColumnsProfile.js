import React from "react";




 export default function getColumns() {
    const columns = [
      { field: "userName", headerName: "User Name",  editable: true, flex: 1},
      { field: "firstName", headerName: "First Name",  editable: true, flex: 1, sortable: false,},
      { field: "lastName", headerName: "Last Name",  editable: true, flex: 1, sortable: false,},
      { field: "roleName", headerName: "Profile",  editable: true, flex: 1, sortable: false,},

    ];
    return columns
  }