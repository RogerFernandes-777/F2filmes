
import Auth from "../../features/auth/Auth";
import { useSelector } from "react-redux";
import './login.css';
import { useNavigate } from "react-router-dom";



const Login = ()=>{

    const isAutenticated = useSelector((state)=>state.auth.isAutenticated);
    const Navigate = useNavigate();

    return(
        <div className="login">
           
            {
               isAutenticated? Navigate("/home") :  <Auth />
            }
        </div>
    );
}

export default Login;