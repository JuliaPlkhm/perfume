// import React, {useState, useEffect, useRef} from "react";
// import { DataGrid } from "@mui/x-data-grid";

// function checkBox() {
//   return <input type="checkbox" />;
// }
// const header = (params)=>{
//     console.log(params)
//     return(
//         <div >Profile 1</div>

//     )

// }
// const columns = [
//   { field: "user", headerName: "Users", width: 90, editable: true, },
//   {
//     field: "profine1",
//     renderHeader: (params) => header(params),
//     // headerName: "Profile 1",
//     width: 150,
   
//     sortable: false,
//     renderCell: (params) => checkBox()
//   },
//   {
//     field: "profine2",
//     headerName: "Profile 2",
//     width: 150,
//     sortable: false,
//     renderCell: (params) => checkBox()
//   },
//   {
//     field: "profine3",
//     headerName: "Profile 3",
//     width: 150,
//     sortable: false,
//     renderCell: (params) => checkBox()
//   },
//   {
//     field: "profin4",
//     headerName: "Profile 4",
//     width: 150,
//     sortable: false,
//     renderCell: (params) => checkBox()
//   },
//   {
//     field: "profine5",
//     headerName: "Profile 5",
//     width: 150,
//     sortable: false,
//     renderCell: (params) => checkBox()
//   },
// ];

// const rows = [
//   {
//     id: 1,
//     user: "Page 1",
    
//   },
//   {
//     id: 2,
//     user: "Page 2",
    
//   },{
//     id: 3,
//     user: "Page 3",
    
//   },{
//     id: 4,
//     user: "Page 4",
    
//   },{
//     id: 5,
//     user: "Page 5",
    
//   }
// ];

// export default function ProfileOld() {
//  const [profiles, setProfiles] = useState()
//  const [headers, setHeaders] = useState()
//  const [stateRename, setStateRename] = useState([]);
//  const ref= useRef()
// //  useEffect(()=>{
// //  profiles.map((el, i)=>{
// //     setStateRename([...stateRename, 0])
// //      const header = {
// //             field: i,
// //             renderHeader: (params) => header(params, el, stateRename[i]),
          
// //             width: 150,
           
// //             sortable: false,
// //             renderCell: (params) => checkBox()
// //           }
     
// //  })
// //  },[profiles])

//   return (
//     <div style={{ width: "100%" }}>
//       <DataGrid
     
        
//         rowHeight='84'
//        autoHeight 
//        rows={rows}
//        columns={columns} 
//         disableColumnFilter
//         disableColumnMenu
//         onColumnHeaderDoubleClick={(params, event)=> console.log(event)}
//         hideFooter
//       />
//     </div>
//   );
// }