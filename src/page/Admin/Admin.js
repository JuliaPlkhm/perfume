import React, {useEffect, useState, useCallback} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Header } from '../../components/PageHeaders';
import { TableNew } from '../../components/Tables/Table';
import { getAdminUsers } from '../../redux/actions/adminUsers';
import getColumns from '../../components/Tables/getColumnsAdmin'


export  const Admin = () => {
  const dispatch = useDispatch();
  const { adminUsers} = useSelector((state) => state.admin);
 
 
  const [row, setRow] = useState([])
  const [columns, setColumns] = useState([])

 useEffect(()=>{
   setRow([])
   adminUsers?.map((el)=>{

    const rowItem={
      id: el.id,
      lastName: el.lastName,
      firstName: el.firstName,
      userName: el.userName,
      password:'****',
      field1:'lorem'
    }
    setRow((row) => [...row, rowItem])

    setColumns(()=>getColumns())
 })
},[adminUsers])

  useEffect(()=>{
    dispatch(getAdminUsers());
},[])
 
  return (
     <div className='wrapper users'>

         <div className='container'>
         <Header name={'Admin Users'} button={'Add New'}/>
         <TableNew  row={row} columns = {columns} type='admin' ></TableNew >
         </div>
         

     </div>
  );
}