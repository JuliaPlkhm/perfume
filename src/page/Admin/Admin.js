import React, {useState} from 'react';
import { Header } from '../../components/PageHeaders';
import { TableAdmin } from '../../components/TableAdmin';

export  const Admin = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
  return (
     <div className='wrapper users'>
         <div className='container'>
         <Header name={'Admin Users'} button={'Add New'}/>
         <TableAdmin></TableAdmin>
         </div>
         

     </div>
  );
}