
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
        userData: {
            email: null,
            senha: null,
        }, 
        isAutenticated: false,
        isRegistrated: true,
    }
 
 
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action)=>{
            const {email, senha} = action.payload;

            if(email === state.userData.email && senha === state.userData.senha){
                state.isAutenticated = true;
                
            }
            else if(email === '' && senha === ''){
                alert("por favor, preencha os campos");
            }
            else{
                state.isAutenticated = false;
                alert('email ou senha incorretos');
            }
        },
        logout: (state)=>{
            state.isAutenticated = false;
        },
        register: (state, action)=>{

            const {email, senha} = action.payload;
            state.userData.email =  email;
            state.userData.senha = senha;

            state.isRegistrated = true;
        },
        setIsRegistrated: (state)=>{
            
             state.isRegistrated = !state.isRegistrated;
        }
    },
});

export const {login, logout, register, setIsRegistrated} = authSlice.actions;
export default authSlice.reducer;