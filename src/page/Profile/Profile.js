import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Header } from '../../components/PageHeaders';
import { DataGridNew } from '../../components/Tables/TableProfile copy';
import { getPages } from '../../redux/actions/roles';
import { getUsers } from '../../redux/actions/users';
import { getAdminUsers } from '../../redux/actions/adminUsers';
import getColumns from '../../components/Tables/getColumnsUser'
import getColumnsAdmin from '../../components/Tables/getColumnsAdmin'

import { deleteRole } from "../../redux/actions/roles";
import { getRoles } from "../../redux/actions/roles";
import Grid from '@mui/material/Grid';
import { TableNew } from '../../components/Tables/Table';
import './TableProfile.css';
import { setRolesForUser } from '../../redux/actions/rolesForUser';
import Paper from '@mui/material/Paper';
import { ProfileList } from '../../components/TableProfile'
import { TransferList } from '../../components/TransferList';

export  const Profile = () => {
   
  const dispatch = useDispatch();
  const { users} = useSelector((state) => state.users);
  const { roles} = useSelector((state) => state.roles);
  const { pages} = useSelector((state) => state.roles);
  const { rolesForUsers} = useSelector((state) => state.rolesForUsers);
  const { adminUsers} = useSelector((state) => state.admin);

  const [columns, setColumns] = useState([])
  const [row, setRow] = useState([])
  const [option, setOption] = useState([])

  const [selectedProfile, setSelectedProfile] = useState();
 

  useEffect(() => {
    setRow([])

    if (selectedProfile?.name === "Admin") {
      adminUsers?.map((el)=>{
        const rowAdmin = {
          id: el.id,
          lastName: el.lastName,
          firstName: el.firstName,
          userName: el.userName,
          profile: 'admin',
          password: '****',
          field1: 'lorem',
        }
        setRow((row) => [...row, rowAdmin])
      })
    setColumns(() => getColumnsAdmin())
     
    } else {

      users?.map((el) => {
        if (selectedProfile?.id === el?.role.id) {
          const rowItem = {
            id: el.id,
            lastName: el.lastName,
            firstName: el.firstName,
            userName: el.userName,
            profile: el.role.name,
            password: '****',
            field1: 'lorem',
          }
          setRow((row) => [...row, rowItem])
        }
      })
    setColumns(() => getColumns(rolesForUsers))

    }
  }, [selectedProfile, rolesForUsers])

  const handleDelete =(id)=>(params)=>{
    
    console.log(id)
      dispatch(deleteRole(id))
  }
  
  useEffect(()=>{
    dispatch(getPages());
    dispatch(getRoles());
    dispatch(getUsers());
    dispatch(getAdminUsers());

},[])

const getOptions = () => {
  setOption(() => [])
  roles?.map((el) => setOption((options) => [...options, { label: el.name, id: el.id }]))
}

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

useEffect(()=>{
  setColumns(()=>getColumns(pages, handleDelete))

},[pages])

  return (
    <div className='wrapper users'>
      <Grid container rowSpacing={5} className='container profile__container' >
        <Grid className='profile' item xs={3}>
          <h1 className='profile__header'>Profile</h1>
          <ProfileList roles={roles} selectedProfile={selectedProfile} setSelectedProfile={setSelectedProfile} />
        </Grid>
        <Grid className='permissions' item xs={9}>
          <h1 className='profile__header'>Permissions</h1>
          < TransferList permissions={selectedProfile?.permissions} allPermissions={pages} id={selectedProfile?.id}/>
        </Grid>
        <Grid className='profile__users' item xs={12}>
          <h1 className='profile__header'>Users</h1>
          <TableNew  row={row} columns = {columns} option={rolesForUsers} type='users'></TableNew >
        </Grid>

      </Grid>
    </div>
  );
}