import React, { useState, useEffect} from 'react';

import { deleteRow } from "./getColumnsUser";


 function CheckBox({params}) {

  const { id, api, field, row } = params;
  console.log(params)

const [value, setValue] = useState('Denied');
  
useEffect(()=>{
  
  row.permissions.map((el)=>{
    if(el.id === field) {
      return  setValue((value)=>'Accessible');
    }
  })

},[])


  const handleChange =(event)=>{
    console.log( event.target.checked)
    if (event.target.checked){
      setValue((value)=>'Accessible');

    }else{
      setValue((value)=>'Denied');

    }
    api.setCellMode(id, field, 'edit');
    api.setEditCellValue({ id, field, value: event.target.checked});
    api.commitCellChange({ row, id, field })
    api.setCellMode(id, field, 'view');
  }
  return (
  <div className='profile__checkboxGroup'>
  <input id={`P_${params.colDef.field}_${params.id}`} onChange={handleChange} type="checkbox" className='profile__checkbox'  checked={value === 'Accessible'}/>
  <label for={`P_${params.colDef.field}_${params.id}`} className='checkboxGroup__label' >{value}</label>
  </div>
  )}

function header (params){
return(
  <div className="gridHeader">{params.colDef.headerName}</div>
)}


 export default function getColumns(page) {
    const columns= [{ field: "name", minWidth: 180, headerName: "", editable: true,  sortable: false,  align:  'center' }]
    page?.map((el)=>{
      columns.push(
        {
          field: el.id,
          headerName: el.name,
          sortable: false,
          minWidth: 180,
          renderCell: (params) => <CheckBox params={params}/>,
          renderHeader: (params) => header(params)
        }
      )
    })
     columns.push(
      {
        field: "delete",
        headerName: "",
        sortable: false,
        align:  'center' ,
        minWidth: 180,
        renderCell: (params) => deleteRow(params),
       
      }
     )
  
    return columns
  }