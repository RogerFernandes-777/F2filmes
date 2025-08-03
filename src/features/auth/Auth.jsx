
import { useState } from "react";
import {  useDispatch } from "react-redux";
import { login } from "./slice";

import './auth.css';

const Auth = ()=>{

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    
    const dispatch = useDispatch();
 

    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(login({email, senha}))
    }

    return(
        <div className="auth">
            <form onSubmit={handleSubmit}>
                <legend>Login</legend>
                <h2>email</h2>
                <input type="email" placeholder="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                <h2>senha</h2>
                <input type="password" placeholder="senha" value={senha} onChange={(e)=>{setSenha(e.target.value)}}/>

                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Auth;