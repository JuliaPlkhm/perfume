import React, {useState, useEffect, useRef} from "react";
import { styled } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputBase from '@mui/material/InputBase';
import icon from '../../assets/del.png'



const BootstrapInput = styled(InputBase)({
    '& .MuiInputBase-input': {
      borderColor: "transparent",
      fontFamily: 'Roboto',
  
      fontWeight: '400',
      fontSize: '14px',
      lineHeight: '16px',
  
    },
    '& .MuiSelect-outlined, .MuiInputBase-input.MuiSelect-select': {
      minHeight: '0px',
      padding: '0px',
      paddingRight: '32px'
    },
  });

const AutocompleteCell =(props)=>{
    const { id, api, field, row } = props.params;
    const [value, setValue] = useState(row.profile);
    const handleChange =(event, newValue)=>{
      setValue((value)=>newValue.props.children);
      api.setCellMode(id, field, 'edit');
      api.setEditCellValue({ id, field, value: newValue.props.value });
      api.commitCellChange({ row, id, field })
      api.setCellMode(id, field, 'view');
    }
    return (
      <Select
      value={value}
      onChange={ handleChange}
      displayEmpty
      sx={{fontSize: '14px'}}
      input={<BootstrapInput />}
    >
      {props.option.map((el)=> <MenuItem sx={{fontSize: '14px'}} key ={el.label} value={el.label}>{el.label}</MenuItem>)}
      
    </Select>
    );
  }
  
  
export function deleteRow (params){
    return(
      <div  className="gridIcon"> 
        <img src={icon} />
  
      </div>
    )}

 export default function getColumns(option ) {
    const columns = [
      { field: "lastName", headerName: "Last Name",  editable: true, flex: 1, sortable: false,},
      { field: "firstName", headerName: "First Name",  editable: true, flex: 1, sortable: false,},
      { field: "userName", headerName: "User Name", sortable: false, editable: true, flex: 1},

      {
        field: "roleName",
        headerName: "Profile",
        sortable: false,
        flex: 1,
        renderCell: (params) => <AutocompleteCell params={params} option={option}/>
      },
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