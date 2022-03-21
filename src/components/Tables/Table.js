import React, {useState, useEffect, useRef} from "react";
import { DataGrid } from "@mui/x-data-grid";
import { styled } from '@mui/material/styles';
import {  useDispatch } from "react-redux";
import { deleteUser} from '../../redux/actions/users';
import { changeUser } from '../../redux/actions/users';
import { deleteAdminUser } from '../../redux/actions/adminUsers'
import { changeAdminUser } from '../../redux/actions/adminUsers'




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
        borderBottom:'1px solid #F5F5F5'
      },
      '& .MuiDataGrid-columnHeaderTitleContainer': {
        padding: "0px 0px",
      },
      '& .MuiDataGrid-columnHeader:focus, .MuiDataGrid-cell:focus, .MuiDataGrid-cell:focus-within, .MuiDataGrid-columnHeader:focus-within, .MuiDataGrid-cell.MuiDataGrid-cell--editing:focus-within': {
        outline: 'none',
      },
    
      '& .MuiDataGrid-columnHeaders': {
        padding: "30px 0px",
        maxHeight:"76px"
      },
      '& .MuiDataGrid-virtualScroller': {
        marginTop: "76px",
        
      },
      '& .MuiDataGrid-row:hover .gridIcon': {
        opacity:'0.5'
      },
      '& .MuiDataGrid-columnHeaderTitle': {
        fontWeight:'700',
        fontSize: '14px',
        lineHeight: '16px',
        borderBottom: '0px #F5F5F5',
        marginRight: '5px'
      },
     
    '&  .MuiDataGrid-cell,  .MuiDataGrid-columnHeader': {
      padding: "0px 20px "
    },
    '&  .MuiDataGrid-cell:first-of-type, .MuiDataGrid-columnHeader:first-of-type': {
      paddingLeft: " 40px "
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


export function TableNew(props) {
  // debugger
  const dispatch = useDispatch();

 const handleOnCellClick =(params)=>{
   if(params.field ==='delete'){
    props.type === 'users' ? dispatch(deleteUser(params.id))
    : dispatch(deleteAdminUser(params.id))
   }
 }

 const handleCellEditCommit =(e)=>{
  //  debugger
   const editData={
    id: e.id,
    // firstName: e.row.firstName,
    // lastName: e.row.lastName,
    // userName: e.row.userName,
    // roleName:  e.row.profile
  }

  props.type === 'users' ? dispatch(changeUser({...editData, [e.field]: e.value})) 
  : dispatch(changeAdminUser({...editData, [e.field]: e.value})) 
 }
 

  return (
    <div style={{ display: 'flex',  }}>
       <StyledDataGrid
       autoHeight
       headerHeight={76}
       onCellEditCommit={handleCellEditCommit}
        columns={props.columns}
        rows={props.row}
        onCellClick={handleOnCellClick}
        disableColumnFilter
        disableColumnMenu
        hideFooter
        disableSelectionOnClick
      />
    </div>

  );
}


