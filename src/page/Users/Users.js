import React, {useState} from 'react';
import { Header } from '../../components/PageHeaders';
import { Table } from '../../components/Table copy';
import { TableNew } from '../../components/Table';

export  const Users = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
  return (
     <div className='wrapper users'>
         <div className='container'>
         <Header name={'Users'} button={'Add New'}/>
         <TableNew ></TableNew >
         </div>

     </div>
  );
}