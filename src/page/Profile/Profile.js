import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Header } from '../../components/PageHeaders';
import { DataGridNew } from '../../components/Tables/TableProfile copy';
import { getPages } from '../../redux/actions/roles';
import getColumns from '../../components/Tables/getColumnsProfile'


export  const Profile = () => {
   
  const dispatch = useDispatch();
  const { roles} = useSelector((state) => state.roles);
  const { pages} = useSelector((state) => state.roles);
  const [columns, setColumns] = useState([])

  
  useEffect(()=>{
    dispatch(getPages());
},[])

useEffect(()=>{
  setColumns(()=>getColumns(pages))

},[pages])

  return (
     <div className='wrapper users'>
         <div className='container'>
         <Header name={'Profiles'} button={'Add New Profile'}/>
         <DataGridNew columns ={columns} row={roles}/>
         </div>
     </div>
  );
}