


import {  useDispatch } from "react-redux";
import { register } from "../../features/auth/slice";
import { useState } from "react";

const CadForm = ()=>{

    
    const [emailCad, setEmailCad] = useState('');
    const [senhaCad, setSenhaCad] = useState('');

    const dispatch = useDispatch();

    
    const handleSubmitRegister = (e)=>{
        e.preventDefault();
        dispatch(register({email: emailCad, senha: senhaCad}));
    }

    return(
        <form onSubmit={handleSubmitRegister}>
            <legend>Cadastre-se</legend>
            <h2>email</h2>
            <input type="email" placeholder="email" value={emailCad} onChange={(e)=>{setEmailCad(e.target.value)}}/>
            <h2>senha</h2>
            <input type="password" placeholder="senha" value={senhaCad} onChange={(e)=>{setSenhaCad(e.target.value)}}/>

            <button type="submit">cadastrar</button>

        </form>
    );
}



export default CadForm;