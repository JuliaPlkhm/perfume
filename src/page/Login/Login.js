import React, {useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import './Login.css';
import { Logo } from '../../components/Logo';
import { setLogin } from '../../redux/actions';

export  const Login = () => {
    const dispatch = useDispatch();
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const handelClick=()=>{
      dispatch( setLogin ({userName:username, password:password}))
  }
  return (
     <div className='loginWrapper wrapper '>
         <div className='login__header'><Logo/></div>
         <div className='login__form form'>
             <h1 className='form__header'>Login</h1>
             <div className='form__group'>
             <label className='form__label' for="username">User Name</label>
             <input className='form__input' type="text" id="username"  value={username} onChange={e => setUsername(e.target.value)}/>
             </div>
             <div className='form__group'>

             <label className='form__label' for="password">Password</label>
             <input className='form__input' type="password" id="password"  value={password} onChange={e => setPassword(e.target.value)}/>
             </div>

             <button  className='form__button button'  onClick={handelClick}>Login</button>
         </div>
     </div>
  );
}