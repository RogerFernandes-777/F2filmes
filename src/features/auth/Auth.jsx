
import { useState } from "react";
import {  useDispatch, useSelector } from "react-redux";
import { login, register, setIsRegistrated } from "./slice";

import './auth.css';

const Auth = ()=>{

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    
    const dispatch = useDispatch();
    const isRegistrated = useSelector((state)=>state.auth.isRegistrated);
  

    const handleSubmitLogin = (e)=>{
        e.preventDefault();
        dispatch(login({email, senha}))
    } 

    const handleRegister = ()=>{
        dispatch(setIsRegistrated());
        
    }

    const handleSubmitRegister = (e)=>{
        e.preventDefault();
        dispatch(register({email, senha}));
    }


    const FormLogin = ()=>{
        return(
             <form onSubmit={handleSubmitLogin}>
                <legend>Login</legend>
                <h2>email</h2>
                <input type="email" placeholder="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                <h2>senha</h2>
                <input type="password" placeholder="senha" value={senha} onChange={(e)=>{setSenha(e.target.value)}}/>

                <button type="submit">Login</button>

                <p>não possui conta? <button type="button" onClick={handleRegister}>cadastre-se</button></p>
            </form>
        );
    }

    const FormCadastro = ()=>{
        return(
            <form onSubmit={handleSubmitRegister}>
                <legend>Cadastre-se</legend>
                <h2>email</h2>
                <input type="email" placeholder="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                <h2>senha</h2>
                <input type="password" placeholder="senha" value={senha} onChange={(e)=>{setSenha(e.target.value)}}/>

                <button type="submit">cadastrar</button>

            </form>
        );
    }

    return(
        <div className="auth">
            {
                isRegistrated? <FormLogin /> : <FormCadastro />
                  
            }
            
        </div>
    );
}

export default Auth;