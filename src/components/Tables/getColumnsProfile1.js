import React, { useState, useEffect} from 'react';
import icon from '../../assets/del.png'


export function nameColumn(params, handleDelete){
  return(
    <>
      <p>{params.row.name}</p>
      <div onClick={handleDelete(params.row.id)} className="profile__gridIcon"> 
        <img src={icon} />

      </div>
    </>
    
  )}


function CheckBox({ params }) {
  const { id, api, field, row } = params;
  const [value, setValue] = useState('Denied');

  useEffect(() => {
    row.permissions.map((el) => {
      if (el.id === field) {
        return setValue((value) => 'Accessible');
      }
    })
  }, [])

  const handleChange = (event) => {
    if (event.target.checked) {
      setValue((value) => 'Accessible');
    } else {
      setValue((value) => 'Denied');
    }

    api.setCellMode(id, field, 'edit');
    api.setEditCellValue({ id, field, value: event.target.checked });
    api.commitCellChange({ row, id, field })
    api.setCellMode(id, field, 'view');
  }
  return (
    <div className='profile__checkboxGroup'>
      <input id={`P_${params.colDef.field}_${params.id}`} onChange={handleChange} type="checkbox" className='profile__checkbox' checked={value === 'Accessible'} />
      <label htmlFor={`P_${params.colDef.field}_${params.id}`} className='checkboxGroup__label' >{value}</label>
    </div>
  )
}

function header(params) {
  return (
    <div className="gridHeader">{params.colDef.headerName}</div>
  )
}


export default function getColumns(page, handleDelete) {
  const columns = [{ field: "name", minWidth: 180, headerName: "", editable: true, sortable: false, align: 'center', hideable: false,  renderCell: (params) => nameColumn(params, handleDelete), }]
  page?.map((el) => {
    columns.push(
      {
        field: el.id,
        headerName: el.name,
        sortable: false,
        filterable: false,
        minWidth: 180,
        renderCell: (params) => <CheckBox params={params} />,
        renderHeader: (params) => header(params)
      }
    )
  })
  return columns
}