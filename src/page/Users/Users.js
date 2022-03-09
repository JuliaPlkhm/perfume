import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from "react-redux";

import { Header } from '../../components/PageHeaders';
import { TableNew } from '../../components/Tables/Table';
import { getUsers } from '../../redux/actions/users';
import { getRoles } from '../../redux/actions/roles';
import { setRolesForUser } from '../../redux/actions/rolesForUser';
import getColumns from '../../components/Tables/getColumnsUser'


export  const Users = () => {
  const dispatch = useDispatch();
  const { users} = useSelector((state) => state.users);
  const { roles} = useSelector((state) => state.roles);
  const { rolesForUsers} = useSelector((state) => state.rolesForUsers);
  const [option, setOption] = useState([])

 
  const [row, setRow] = useState([])
  const [columns, setColumns] = useState([])

  useEffect(() => {
    setRow([])
    users?.map((el) => {

      const rowItem = {
        id: el.id,
        lastName: el.lastName,
        firstName: el.firstName,
        profile: el.role.name,
        field1: 'lorem',
        field2: 'lorem',
        field3: 'lorem'
      }
      setRow((row) => [...row, rowItem])
      setColumns(() => getColumns(option))
    })
  }, [users, option])


  const getOptions = () => {
    setOption(() => [])
    roles?.map((el) => setOption((options) => [...options, { label: el.name, id: el.id }]))
  }

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getRoles());
  }, [])

  useEffect(() => {
    if (roles) {
      getOptions()
    }
  }, [roles])

  useEffect(() => {
    if (option.length) {
      dispatch(setRolesForUser(option))
    }
  }, [option])

  return (
     <div className='wrapper users'>
         <div className='container'>
         <Header name={'Users'} button={'Add New'}/>
         {users && option && <TableNew  row={row} columns = {columns} option={rolesForUsers} type='users'></TableNew >}
         </div>

     </div>
  );
}