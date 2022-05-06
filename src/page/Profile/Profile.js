import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getPages } from '../../redux/actions/roles';
import { getRoles } from "../../redux/actions/roles";
import Grid from '@mui/material/Grid';
import './Profile.css';
import { ProfileList } from '../../components/TableProfile'
import { TransferList } from '../../components/TransferList';
import { Users } from "../Users/Users";
import { Admin } from "../Admin/Admin";

export  const Profile = () => {
  const [selectedProfile, setSelectedProfile] = useState();
  const dispatch = useDispatch();
  const { roles} = useSelector((state) => state.roles);
  const { pages} = useSelector((state) => state.roles);

  useEffect(() => {
    dispatch(getPages());
    dispatch(getRoles());
  }, [])

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
      </Grid>
      { selectedProfile?.name === "Admin" ? <Admin type='Profile' /> : <Users type='Profile' id ={selectedProfile?.name} />}
    </div>
  );
}