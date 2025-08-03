
import Auth from "../../features/auth/Auth";
import { useSelector } from "react-redux";
import './login.css';

import Home from "../home/Home";

const Login = ()=>{

    const isAutenticated = useSelector((state)=>state.auth.isAutenticated);


    return(
        <div className="login">
            {isAutenticated? <Home/> : <Auth />}
        </div>
    );
}

export default Login;