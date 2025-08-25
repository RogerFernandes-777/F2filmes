


import { useSelector } from 'react-redux';
import './auth.css';

import LoginCad from '../../components/LoginForm/LoginCad';
import CadForm from '../../components/CadForm/CadForm';

const Auth = ()=>{

   

    const isRegistrated = useSelector((state)=>state.auth.isRegistrated);

    

    




    return(
        <div className="auth">
            {
                isRegistrated? <LoginCad/> : <CadForm/>
                  
            }
            
        </div>
    );
}

export default Auth;