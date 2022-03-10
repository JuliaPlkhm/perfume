import React from 'react';
import { Logo } from '../components/Logo';

export  const Main = () => {

  return (
     <div className='loginWrapper wrapper '>
         <div className='login__header'><Logo/></div>
         <div className='login__form form'>
             Hello
         </div>
     </div>
  );
}