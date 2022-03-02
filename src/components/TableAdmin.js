import React, {useState, useEffect, useRef} from "react";
import { DataGrid } from "@mui/x-data-grid";
import { styled } from '@mui/material/styles';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const CssTextField = styled(Autocomplete)({

    '& .MuiAutocomplete-hasPopupIcon.MuiAutocomplete-hasClearIcon.css-1n7mdqy-MuiAutocomplete-root .MuiOutlinedInput-root': {
        paddingRight: '0px',
    },

    '& .MuiOutlinedInput-root': {
        fontFamily: 'Roboto',
    
        fontWeight: '400',
        fontSize: '14px',
        lineHeight: '16px',
        padding: '0 40px 0 0 !important',
      '& fieldset': {
          border: 0,
      },
    },
  });

const columns = [
  { field: "lastName", headerName: "Last Name",  editable: true, flex: 1,     sortable: false,},
  { field: "firstName", headerName: "First Name",  editable: true, flex: 1,    sortable: false,},
  {
    field: "field1",
    headerName: "Field 1",
    sortable: false,
    editable: true, flex: 1
  },
  {
    field: "field2",
    headerName: "Field 2",
    sortable: false,
    editable: true, flex: 1
  },
  {
    field: "field3",
    headerName: "Field 3",
    sortable: false,
    editable: true, flex: 1
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
    borderRadius: '2px',
    boxShadow:"0px 0px 3px rgba(0, 0, 0, 0.25)",
    backgroundColor: '#FFFFFF',
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
        borderBottom:'1px solid #F5F5F5'
      },
      '& .MuiDataGrid-columnHeader': {
        padding: "0px 0px",
      },
      '& .MuiDataGrid-columnHeader:focus, .MuiDataGrid-cell:focus, .MuiDataGrid-cell.MuiDataGrid-cell--editing:focus-within': {
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
        borderBottom: '0px #F5F5F5',

      },
     
    '& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell, .MuiDataGrid-columnHeaderTitleContainer': {
      padding: "0px 5px"
    },
    '& .MuiDataGrid-cell': {
        fontFamily: 'Roboto',
        fontSize: '14px',
        fontWeight:'400',
        border: 0,
      color:
        theme.palette.mode === 'light' ? 'rgb(0,0,0)' : 'rgba(255,255,255,0.65)',
    },
   
   
  }));
export function TableAdmin() {
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