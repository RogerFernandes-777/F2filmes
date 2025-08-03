
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
        userData: {
            email: "aleatorio@gmail.com",
            senha: "12345",
        }, 
        isAutenticated: false,
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
    },
});

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;