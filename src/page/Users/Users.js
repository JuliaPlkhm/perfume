import React, {useEffect, useState, useCallback} from 'react';
import { useSelector, useDispatch } from "react-redux";

import { Header } from '../../components/PageHeaders';
import { Table } from '../../components/Table copy';
import { TableNew } from '../../components/Table';
import { getUsers } from '../../redux/actions/users';
import { getRoles } from '../../redux/actions/roles';
import { RouterSharp } from '@mui/icons-material';
import { setRolesForUser } from '../../redux/actions/rolesForUser';

export  const Users = () => {
  // debugger
  const dispatch = useDispatch();
  const { users} = useSelector((state) => state.users);
  const { roles} = useSelector((state) => state.roles);
  const { rolesForUsers} = useSelector((state) => state.rolesForUsers);
  const [option, setOption] = useState([])

 
  
  const getOptions=()=>{
  //  setOption(()=>[])
    roles?.map((el)=> setOption((options) => [...options, {label: el.name, id: el.id}]))
  }
  const getDeviceDataTotal = useCallback(() => { 
    dispatch(getUsers());
    dispatch(getRoles());
    getOptions()
},[])
  useEffect(()=>{
    dispatch(getUsers());
    dispatch(getRoles());
    getOptions()
},[])
 


  useEffect(()=>{
    if(roles){
      getOptions()
    }
  },[roles]) 

  useEffect(()=>{
    if(option.length){
      // debugger
      dispatch(setRolesForUser(option))

      console.log(option)

    }
  },[option])
  
  return (
     <div className='wrapper users'>
         <div className='container'>
         <Header name={'Users'} button={'Add New'}/>
         {users && option && <TableNew users={users} option={rolesForUsers}></TableNew >}
         </div>

     </div>
  );
}