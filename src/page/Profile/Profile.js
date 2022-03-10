import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Header } from '../../components/PageHeaders';
import { DataGridNew } from '../../components/Tables/TableProfile copy';
import { getPages } from '../../redux/actions/roles';
import getColumns from '../../components/Tables/getColumnsProfile'
import { deleteRole } from "../../redux/actions/roles";
import { getRoles } from "../../redux/actions/roles";
import { Nav } from '../../components/Navigation';



export  const Profile = () => {
   
  const dispatch = useDispatch();
  const { roles} = useSelector((state) => state.roles);
  const { pages} = useSelector((state) => state.roles);
  const [columns, setColumns] = useState([])

  const handleDelete =(id)=>(params)=>{
    console.log(id)
      dispatch(deleteRole(id))
  }
  
  useEffect(()=>{
    dispatch(getPages());
    dispatch(getRoles());

},[])

useEffect(()=>{
  setColumns(()=>getColumns(pages, handleDelete))

},[pages])

  return (
     <div className='wrapper users'>
       <Nav/>

         <div className='container'>
         <Header name={'Profiles'} button={'Add New Profile'}/>
         <DataGridNew columns ={columns} row={roles}/>
         </div>
     </div>
  );
}