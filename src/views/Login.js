import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import styles from "./css/Login.module.css";
import {useDispatch, useSelector} from "react-redux";
import { LoginAction, logoutAction } from "../Actions/AuthAction";

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [data,setData] = useState({
        email : "",
        password : ""
    });

    const Auth = useSelector((state)=> state.Auth.l_data.id);
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(LoginAction(data));
        setData({...data, ['email']:"", ['password']:""});
    }

    useEffect(()=>{    
        if(Auth && Auth !== null  && Auth !== 'undefined' && typeof(Auth) === 'string')
        {
            navigate("/home");
        }
  
      }, Auth)
      

    const change1 = (e)=>{
        if(e.target.value !=="")
            document.getElementById("lab1").style.transform = "translateY(-30px)";
        else
            document.getElementById("lab1").style.transform = "translateY(0)";
        setData({...data, [e.target.name] : e.target.value});
    }
    const change2 = (e)=>{
        if(e.target.value !=="")
            document.getElementById("lab2").style.transform = "translateY(-30px)";
        else    
            document.getElementById("lab2").style.transform = "translateY(0)";
            setData({...data, [e.target.name] : e.target.value});
    }
    return (
        <>
            <div className={styles.form}> 
                <div className={styles.container}>
            
                    <h1>Sign In</h1>
                    <form action = "" method = "POST">
                        <div className={styles.formControl}>
                            <input type = "email" name="email" onChange={change1} value = {data.email} required/>
                            <label id="lab1">Your Email</label>
                        </div>
                        <div className={styles.formControl}>
                            <input type = "password" name="password" onChange={change2} value = {data.password} required/>
                            <label id="lab2">Your Password</label>
                        </div>
                        <button className={styles.btn} onClick = {(e)=>handleSubmit(e)}>Submit</button>
                        <p className={styles.text}>Don't have an account?
                        <a onClick={()=>navigate("/register")}> Create Accout</a></p>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Login;