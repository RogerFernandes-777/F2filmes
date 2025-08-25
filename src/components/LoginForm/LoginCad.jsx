

import { useState } from "react";
import {  useDispatch } from "react-redux";
import { login, setIsRegistrated } from "../../features/auth/slice";


const LoginCad = ()=>{

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    
    const dispatch = useDispatch();
    
  

    const handleSubmitLogin = (e)=>{
        e.preventDefault();
        dispatch(login({email, senha}))
    } 

    const handleRegister = ()=>{
        dispatch(setIsRegistrated());
        
    }


     return(
             <form onSubmit={handleSubmitLogin}>
                <legend>Login</legend>
                <h2>email</h2>
                <input type="email" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <h2>senha</h2>
                <input type="password" placeholder="senha" value={senha} onChange={(e)=>setSenha(e.target.value)}/>

                <button type="submit">Login</button>

                <p>não possui conta? <button type="button" onClick={handleRegister}>cadastre-se</button></p>
            </form>
        );

}


export default LoginCad;