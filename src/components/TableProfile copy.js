import * as React from "react";
import './TableProfile.css';
import { DataGrid } from "@mui/x-data-grid";
import {styled } from '@mui/material/styles';
import icon from '../assets/del.png'

function checkBox(params) {
      return (
      <div className='profile__checkboxGroup'>
      <input id={`P_${params.colDef.field}_${params.id}`} type="checkbox" className='profile__checkbox' />
      <label for={`P_${params.colDef.field}_${params.id}`} className='checkboxGroup__label' >Denied</label>
      </div>
      )}
   
    function header (params){
  return(
      <div className="gridHeader">{params.colDef.headerName}</div>
  )}

  function deleteRow (params){
    return(
      <div className="gridIcon"> 
        <img src={icon} />

      </div>
    )}

  const columns = [
  { field: "lastName", headerName: "",  editable: true, flex: 1, sortable: false,  align:  'center' },
    { field: "firstName", headerName: "Page 1", editable: true, flex: 1, sortable: false, renderHeader: (params) => header(params),
        renderCell: (params) => checkBox(params)
    },
  {
    field: "profine",
    headerName: "Page 2",
    sortable: false,
    flex: 1,
    renderCell: (params) => checkBox(params),
    renderHeader: (params) => header(params)
  },
  {
    field: "field1",
    headerName: "Page 3",
    sortable: false,
     flex: 1,
    renderCell: (params) => checkBox(params),
    renderHeader: (params) => header(params)
  },
  {
    field: "field2",
    headerName: "Page 4",
    sortable: false,
     flex: 1,
    renderCell: (params) => checkBox(params),
    renderHeader: (params) => header(params)
  },
  {
    field: "field3",
    headerName: "Page 5",
    sortable: false,
     flex: 1,
    renderCell: (params) => checkBox(params),
    renderHeader: (params) => header(params)
  },
  {
    field: "field4",
    headerName: "Page 5",
    sortable: false,
     flex: 1,
    renderCell: (params) => checkBox(params),
    renderHeader: (params) => header(params)
  },
  {
    field: "field5",
    headerName: "Page 5",
    sortable: false,
  
     flex: 1,
    renderCell: (params) => checkBox(params),
    renderHeader: (params) => header(params)
  },
  {
    field: "field6",
    headerName: "Page 5",
    sortable: false,
     flex: 1,
    renderCell: (params) => checkBox(params),
    renderHeader: (params) => header(params)
  },
  {
    field: "field7",
    headerName: "",
    sortable: false,
     flex: 0.35,
    align:  'center' ,
   
    renderCell: (params) => deleteRow(params),
   
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

const ROW_HEIGHT = 84;
const ROW_MARGIN = 14;
const containerHeight = (rows.length + 1) * (ROW_HEIGHT + ROW_MARGIN);

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
      border: 0,
  
      color:
        theme.palette.mode === 'light' ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.85)',
      fontFamily: [
          'Roboto',
        ].join(','),
      WebkitFontSmoothing: 'auto',
      letterSpacing: 'normal',

      height: containerHeight,
      "& .MuiDataGrid-renderingZone": {
        maxHeight: `${containerHeight}px !important`,
      },
      '& .MuiDataGrid-iconSeparator': {
        display: 'none',
      },
    
      
      '& .MuiDataGrid-row': {
          // padding: "0px 40px",
          backgroundColor: '#FFFFFF',
          boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.25)',
          borderRadius: '2px',
          margin: "0 auto",
          marginBottom: '14px',
        width: "calc(100% - 3px) !important",

        },
        '& .MuiDataGrid-row:hover .gridIcon': {
          opacity:'0.5'

        

        },
      //   '& .MuiDataGrid-columnHeader': {
      //     padding: "0px 0px",
      //   },
        '& .MuiDataGrid-columnHeader:focus, .MuiDataGrid-cell:focus, .MuiDataGrid-cell.MuiDataGrid-cell--editing:focus-within, .MuiDataGrid-cell:focus-within': {
          outline: 'none',
        },
        //   '& .MuiInputBase-input':{
        //       padding: '0 5px'
        // },
        '& .MuiDataGrid-columnHeaders': {
          padding: "30px 0px",
          maxHeight: "76px",
          margin: "0 auto",
          width: "calc(100% - 3px) !important",
        },
        '& .MuiDataGrid-virtualScroller': {
          marginTop: "76px !IMPORTANT",
          
        },
        '& .MuiDataGrid-columnHeaderTitle': {
          fontWeight:'700',
          fontSize: '14px',
          lineHeight: '16px',
  
        },
       
      // '& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell, .MuiDataGrid-columnHeaderTitleContainer': {
      //   padding: "0px 5px"
      // },
      '& .MuiDataGrid-cell': {
          fontFamily: 'Roboto',
          fontSize: '14px',
          fontWeight:'400',
          border: 0,

          
          // padding:'20px 0',
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
          right:'-48px',
          borderTop: '1px dashed rgba(0, 0, 0, 0.5)'
        },
      }));

export function DataGridNew() {
  return (
    // <div style={{ width: "100%" }}>
      <StyledDataGrid
        rows={rows}
        columns={columns}
        rowHeight={84}
       headerHeight={76}

        // autoHeight
        disableColumnFilter
        disableColumnMenu
        hideFooter
        disableSelectionOnClick
      />
    // </div>
  );
}
