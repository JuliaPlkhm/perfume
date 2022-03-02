import React, {useState, useEffect, useRef} from "react";
import { DataGrid } from "@mui/x-data-grid";
import { alpha, styled } from '@mui/material/styles';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

function checkBox() {
    return (
    <div className='checkboxGroup'>
    <input type="checkbox" />
    <p className='form__label' >Denied</p>
    </div>)
  }

const columns = [
  { field: "lastName", headerName: "Last Name",  editable: true, flex: 1, sortable: false,},
    { field: "firstName", headerName: "First Name", editable: true, flex: 1, sortable: false,
        renderCell: (params) => checkBox()
    },
  {
    field: "profine",
    headerName: "Profile",
    minWidth: 100,
    sortable: false,
    flex: 1,
    renderCell: (params) => checkBox()
  },
  {
    field: "field1",
    headerName: "Field 1",
    sortable: false,
    editable: true, flex: 1,
    renderCell: (params) => checkBox()
  },
  {
    field: "field2",
    headerName: "Field 2",
    sortable: false,
    editable: true, flex: 1,
    renderCell: (params) => checkBox()
  },
  {
    field: "field3",
    headerName: "Field 3",
    sortable: false,
    editable: true, flex: 1,
    renderCell: (params) => checkBox()
  },
];

const rows = [
  {
    id: 1,
    lastName: "Trent",
    firstName: "Donald",
    profile: "manager",
    field1:'lorem',
    field2:'lorem',
    field3:'lorem'
  },
  {
    id: 2,
    lastName: "Trent",
    firstName: "Donald",
    profile: "manager",
    field1:'lorem',
    field2:'lorem',
    field3:'lorem'
    
  },{
    id: 3,
    lastName: "Trent",
    firstName: "Donald",
    profile: "manager",
    field1:'lorem',
    field2:'lorem',
    field3:'lorem'
    
  },{
    id: 4,
    lastName: "Trent",
    firstName: "Donald",
    profile: "manager",
    field1:'lorem',
    field2:'lorem',
    field3:'lorem',
    
  },{
    id: 5,
    lastName: "Trent",
    firstName: "Donald",
    profile: "manager",
    field1:'lorem',
    field2:'lorem',
    field3:'lorem'
    
  },
];

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
    border: 0,

    color:
      theme.palette.mode === 'light' ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.85)',
    fontFamily: [
        'Roboto',
      ].join(','),
    WebkitFontSmoothing: 'auto',
    letterSpacing: 'normal',
 
    '& .MuiDataGrid-iconSeparator': {
      display: 'none',
    },
  
    
    '& .MuiDataGrid-row': {
        padding: "0px 40px",
        backgroundColor: '#FFFFFF',
        boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.25)',
        borderRadius: '2px',
        marginBottom: '14px',
      },
      '& .MuiDataGrid-columnHeader': {
        padding: "0px 0px",
      },
      '& .MuiDataGrid-columnHeader:focus, .MuiDataGrid-cell:focus, .MuiDataGrid-cell.MuiDataGrid-cell--editing:focus-within, .MuiDataGrid-cell:focus-within': {
        outline: 'none',
      },
        '& .MuiInputBase-input':{
            padding: '0 5px'
      },
      '& .MuiDataGrid-columnHeaders': {
        padding: "30px 40px",
        maxHeight:"76px"
      },
      '& .MuiDataGrid-virtualScroller': {
        marginTop: "76px",
        
      },
      '& .MuiDataGrid-columnHeaderTitle': {
        fontWeight:'700',
        fontSize: '14px',
        lineHeight: '16px',

      },
     
    '& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell, .MuiDataGrid-columnHeaderTitleContainer': {
      padding: "0px 5px"
    },
    '& .MuiDataGrid-cell': {
        fontFamily: 'Roboto',
        fontSize: '14px',
        fontWeight:'400',
        border: 0,
        
        padding:'20px 0',
        position: 'relative',
        overflow: 'initial',
      color:
        theme.palette.mode === 'light' ? 'rgb(0,0,0)' : 'rgba(255,255,255,0.65)',
    },
    '&  .MuiDataGrid-cell:not(:last-of-type)::after, .MuiDataGrid-columnHeader:not(:last-of-type)::after': {
        content: "''",
        position: 'absolute',
        top:'50px',
        width:'97px',
        transform: 'rotate(-90deg)',
        left:'100px',
        borderTop: '1px dashed rgba(0, 0, 0, 0.5)'
      },
   
      

  }));
export function TableProfile() {
 const [profiles, setProfiles] = useState()
 const [headers, setHeaders] = useState()
 const [stateRename, setStateRename] = useState([]);
 const ref= useRef()
//  useEffect(()=>{
//  profiles.map((el, i)=>{
//     setStateRename([...stateRename, 0])
//      const header = {
//             field: i,
//             renderHeader: (params) => header(params, el, stateRename[i]),
          
//             width: 150,
           
//             sortable: false,
//             renderCell: (params) => checkBox()
//           }
     
//  })
//  },[profiles])

  return (
    <div style={{ display: 'flex',  }}>
      <StyledDataGrid
        rowHeight='84'
       autoHeight 
       headerHeight='76'
     
  
        rows={rows}
        columns={columns}
        disableColumnFilter
        disableColumnMenu
        hideFooter
      />
    </div>

  );
}