import React, {useState} from 'react';
import { useDispatch } from "react-redux";
import './Login.css';
import { Logo } from '../../components/Logo';
import { setLogin } from '../../redux/actions';

export  const Login = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const handelClick=()=>{
        dispatch(setLogin())
    }
  return (
     <div className='loginWrapper wrapper '>
         <div className='login__header'><Logo/></div>
         <form className='login__form form'>
             <h1 className='form__header'>Login</h1>
             <div className='form__group'>
             <label className='form__label' for="username">User Name</label>
             <input className='form__input' type="text" id="username"  value={username} onChange={e => setUsername(e.target.value)}/>
             </div>
             <div className='form__group'>

             <label className='form__label' for="password">Password</label>
             <input className='form__input' type="password" id="password"  value={password} onChange={e => setPassword(e.target.value)}/>
             </div>

             <input  className='form__button button' type="submit" value="Login" onClick={handelClick}/>
         </form>
     </div>
  );
}