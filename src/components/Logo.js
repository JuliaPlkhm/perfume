import React from 'react';
import logo from '../assets/logo.png'

export  const Logo = () => {
   
  return (
         <div className='logoGroup'>
             <img className='logoGroup__img' src={logo}/>
             <h2 className='logoGroup__header'>Perfume Manufacturer Project</h2>
         </div>
         
  );
}