import * as React from "react";
import './TableProfile.css';
import { DataGrid } from "@mui/x-data-grid";
import {styled } from '@mui/material/styles';
import { deleteRole } from "../../redux/actions/roles";
import {  useDispatch } from "react-redux";
import { changeRole } from "../../redux/actions/roles";
import { postPage } from "../../redux/actions/roles";
import { deletePage } from "../../redux/actions/roles";


const ROW_HEIGHT = 84;
const ROW_MARGIN = 14;
const containerHeight = 500;


const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
      border: 0,
      height: '400px',
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
    
      '& .MuiDataGrid-main': {
        overflow: "visible"
    },
      '& .MuiDataGrid-row': {
          backgroundColor: '#FFFFFF',
          boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.25)',
          borderRadius: '2px',
          margin: "0 auto",
          marginBottom: '14px',
        width: "calc(100% - 3px) !important",

        },
        '& .MuiDataGrid-row:hover .profile__gridIcon': {
          opacity:'0.5'
        },
    
        '& .MuiDataGrid-columnHeader:focus, .MuiDataGrid-cell:focus, .MuiDataGrid-cell.MuiDataGrid-cell--editing:focus-within, .MuiDataGrid-cell:focus-within': {
          outline: 'none',
        },
       
        '& .MuiDataGrid-columnHeaders': {
          padding: "30px 0px",
          maxHeight: "76px",
          margin: "0 auto",
          width: "calc(100% - 3px) !important",
          position: "sticky",
          zIndex: theme.zIndex.mobileStepper - 1,
          background: '#F5F5F5'
         
        },
        '& .stickyCell': {
         
          position: "sticky !important",
          zIndex: theme.zIndex.mobileStepper - 1,
        },
        '& .MuiDataGrid-virtualScroller': {
          marginTop: "10px !IMPORTANT",
          
        },
        '& .MuiDataGrid-columnHeaderTitle': {
          fontWeight:'700',
          fontSize: '14px',
          lineHeight: '16px',
  
        },
       
   
      '& .MuiDataGrid-cell': {
          fontFamily: 'Roboto',
          fontSize: '14px',
          fontWeight:'400',
          border: 0,
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

 

export function TableProfile(props) {

  const dispatch = useDispatch();

  const handleOnCellClick =(params)=>{
    if(params.field ==='delete'){
      dispatch(deleteRole(params.id))
    }
  }

  const handleCellEditCommit = (e)=>{
    if(e.field === 'name') {
      const editProfile={
        id: e.id,
        name: e.value
      }
      dispatch(changeRole(editProfile))
    } else if( e.value) {
      const page ={
        roleId: e.id,
        permissionId: e.field
      }
      dispatch(postPage(page))

    } else{
      const page ={
        roleId: e.id,
        permissionId: e.field
      }
      dispatch(deletePage(page))
    }
    console.log(e)
  
  
  }
  return (

      <StyledDataGrid
        rows={props.row}
        columns={ {
          field: el.id,
          headerName: el.name,
          sortable: false,
          filterable: false,
       
          
        }}
        rowHeight={84}
       headerHeight={76}
        // disableColumnFilter
        // disableColumnMenu
        hideFooter
        onCellClick={handleOnCellClick}
        onCellEditCommit={handleCellEditCommit}
        scrollbarSize={2}
        disableSelectionOnClick
        sx={{ height: `${(props.row?.length + 1) * (ROW_HEIGHT + ROW_MARGIN)}px !important`,
        //   "& .MuiDataGrid-renderingZone": {
        //   maxHeight: `${(props.row.length + 1) * (ROW_HEIGHT + ROW_MARGIN)}px !important`,
  
        // }
      }}
      />
  );
}

