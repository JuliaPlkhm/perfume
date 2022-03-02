import React, {useState} from 'react';
import { Header } from '../../components/PageHeaders';
import { TableProfile } from '../../components/TableProfile';
import { DataGridNew } from '../../components/TableProfile copy';

export  const Profile = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
  return (
     <div className='wrapper users'>
         <div className='container'>
         <Header name={'Profiles'} button={'Add New Profile'}/>
         {/* <TableProfile></TableProfile>*/}
         <DataGridNew />
         </div>
         

     </div>
  );
}