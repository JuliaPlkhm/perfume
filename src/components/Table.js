import React, {useState, useEffect, useRef} from "react";
import { DataGrid } from "@mui/x-data-grid";
import { styled } from '@mui/material/styles';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { Paper } from "@mui/material";
import icon from '../assets/del.png'
import { useSelector, useDispatch } from "react-redux";
import { deleteUser} from '../redux/actions/users';
import { changeUser } from '../redux/actions/users';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function deleteRow (params){
  return(
    <div  className="gridIcon"> 
      <img src={icon} />

    </div>
  )}

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

  const CustomPaper = (props) => {
    return <Paper style={{fontSize: '14px',  fontFamily: 'Roboto',
    
    fontWeight: '400',}} {...props} />;
  };



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
        // padding: "0px 20px",
        borderBottom:'1px solid #F5F5F5'
      },
      '& .MuiDataGrid-columnHeaderTitleContainer': {
        padding: "0px 0px",
      },
      '& .MuiDataGrid-columnHeader:focus, .MuiDataGrid-cell:focus, .MuiDataGrid-cell:focus-within, .MuiDataGrid-cell.MuiDataGrid-cell--editing:focus-within': {
        outline: 'none',
      },
      //   '& .MuiInputBase-input':{
      //       padding: '0 5px'
      // },
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

  // function setProfile(props) {
  //   const { id, value, api, field } = props;

  // const handleChange = async (event) => {
  //   api.setEditCellValue({ id, field, value: Number(event.target.value) }, event);
  //   // Check if the event is not from the keyboard
  //   // https://github.com/facebook/react/issues/7407
  //   if (event.nativeEvent.clientX !== 0 && event.nativeEvent.clientY !== 0) {
  //     // Wait for the validation to run
  //     const isValid = await api.commitCellChange({ id, field });
  //     if (isValid) {
  //       api.setCellMode(id, field, 'view');
  //     }
  //   }
  //   console.log(params)
  //   const profile = params.value
  //   return { ...params.row, profile };
  // }

  const AutocompleteCell =(props)=>{
    const { id, api, field } = props.params;
    // console.log(props)
    const [value, setValue] = useState(props.params.getValue(id, "profile"));

    const handleChange =(event, newValue)=>{
      setValue(newValue);
      debugger
      // api.setEditCellValue({ id, field, value: newValue.label });
      // api.commitCellChange({ id, field })
      // api.setCellMode(id, field, 'view');
      // api.commitCellChange({ id, field })


    }
    return (
      <CssTextField
      clearIcon
        options={props.option}
        value={value}
        onChange={handleChange}
        // getOptionSelected={(option, value) => option.value === value.value}
        // defaultValue={props.params.getValue(props.params.id, "profile")}
        // getOptionLabel={(option) => option}
        PaperComponent={CustomPaper}
        sx={{width:'100%', padding:'0px' }}
        renderInput={(params) => <TextField {...params} variant="outlined" />}
      />
    );
  }
  

  function getColumns(option ) {
  //  debugger
    const columns = [
      { field: "lastName", headerName: "Last Name",  editable: true, flex: 1, sortable: false,},
      { field: "firstName", headerName: "First Name",  editable: true, flex: 1, sortable: false,},
      {
        field: "roleName",
        headerName: "Profile",
        sortable: false,
        flex: 1,
        // renderEditCell: setProfile,
        // valueSetter: setFullName,
        renderCell: (params) => <AutocompleteCell params={params} option={option}/>
      },
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
      {
        field: "field7",
        headerName: "",
        sortable: false,
        align:  'center' ,
        flex: 0.3,
        renderCell: (params) => deleteRow(params),
       
      },
    ];
    return columns
  }



export function TableNew(props) {
  // debugger
  const dispatch = useDispatch();

  // const [op, setUser] = useState(props.users)
  const [option, setOption] = useState(props.option)

 const [row, setRow] = useState([])
 const [columns, setColumns] = useState([])
 const [stateRename, setStateRename] = useState([]);

 useEffect(()=>{
   setRow([])
  props.users?.map((el)=>{
    const rowItem={
      id: el.id,
      lastName: el.lastName,
      firstName: el.firstName,
      profile: el.role.name,
      field1:'lorem',
      field2:'lorem',
      field3:'lorem'
    }
    setRow((row) => [...row, rowItem])

    setColumns(()=>getColumns(option))
 })

 },[props.users, option])

 const handleOnCellClick =(params)=>{
   if(params.field ==='field7'){
     dispatch(deleteUser(params.id))
   }
 }

 const handleCellEditCommit = (e)=>{
   debugger
   const editData={
    id: e.row.id,
    firstName: e.row.firstName,
    lastName: e.row.lastName,
    roleName: e.row.profile
  }
  dispatch(changeUser({...editData, [e.field]: e.value}))
  //  console.log( {...editData, [e.field]: e.value})
 }
 

  return (
    <div style={{ display: 'flex',  }}>
      {columns && row && option && <StyledDataGrid
       autoHeight
       headerHeight='76'
       onCellEditCommit={handleCellEditCommit}
        columns={columns}
        rows={row}
        onCellClick={handleOnCellClick}
        disableColumnFilter
        disableColumnMenu
        hideFooter
        disableSelectionOnClick
      />}
    </div>

  );
}


