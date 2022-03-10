 import { deleteRow } from "./getColumnsUser";

 export default function getColumns() {
  //  debugger
    const columns = [
      { field: "lastName", headerName: "Last Name",  editable: true, flex: 1, sortable: false,},
      { field: "firstName", headerName: "First Name",  editable: true, flex: 1, sortable: false,},
      { field: "userName", headerName: "User Name", sortable: false, editable: true, flex: 1},
      { field: "password", headerName: "Password", sortable: false, editable: true, flex: 1},
      { field: "field1", headerName: "Field 1", sortable: false, editable: true, flex: 1},
      {
        field: "delete",
        headerName: "",
        sortable: false,
        align:  'center' ,
        flex: 0.3,
        renderCell: (params) => deleteRow(params),
      },
    ];
    return columns
  }