 import { deleteRow } from "./getColumnsUser";
 import { PasswordCell } from "./PasswordCell";

 export default function getColumns() {
  //  debugger
    const columns = [
     
      { field: "userName", headerName: "User Name", editable: true, flex: 1},
      { field: "firstName", headerName: "First Name",  editable: true, flex: 1, sortable: false,},
      { field: "lastName", headerName: "Last Name",  editable: true, flex: 1, sortable: false,},
      {
        field: "password",
        headerName: "Password",
        sortable: false,
        flex: 1,
        renderCell: (params) => <PasswordCell params={params}/>,
      },
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