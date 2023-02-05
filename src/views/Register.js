import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux";
import styles from "./css/Register.module.css";
import {RegisterAction} from "../Actions/AuthAction";

function Register(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [data, setData] = useState({
        name : "",
        email : "",
        password : ""
    });
    const [cnfm,setCnfm] = useState("");
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(cnfm === data.password){
            dispatch(RegisterAction(data));
            setData({...data, ['name'] : "", ['email'] : "", ['password'] : ""});
            setCnfm("");
        }
        else
            alert(`Password didn't match`);    
        // console.log(data);
    }

 
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
    const change3 = (e)=>{
        if(e.target.value !=="")
            document.getElementById("lab3").style.transform = "translateY(-30px)";
        else
            document.getElementById("lab3").style.transform = "translateY(0)";
        setData({...data, [e.target.name] : e.target.value});
    }
    const change4 = (e)=>{
        if(e.target.value !=="")
            document.getElementById("lab4").style.transform = "translateY(-30px)";
        else    
            document.getElementById("lab4").style.transform = "translateY(0)";
        setCnfm(e.target.value);
    }
    return(
        <div className={styles.form}>
            <div className={styles.container}>
                <h1>Register Here</h1>
                <form action = "" method="POST">
                    <div className={styles.formControl}>
                        <input type="text" onChange={change1} name ="name" value = {data.name} required/>
                        <label id="lab1">Your Name</label>
                    </div>
                    <div className={styles.formControl}>
                        <input type="email" onChange={change2} name = "email" value = {data.email} required/>
                        <label id="lab2">Your Email</label>
                    </div>
                    <div className={styles.formControl}>
                        <input type="password" onChange={change3} name = "password" value = {data.password} required/>
                        <label id="lab3">Your Password</label>
                    </div>
                    <div className={styles.formControl}>
                        <input type="password" onChange={change4} name = "cnfm" value = {cnfm} required/>
                        <label id="lab4">Confirm Password</label>
                    </div>
                    <button className={styles.btn} onClick={(e)=>handleSubmit(e)}>Register</button>
                    <p className={styles.text}>Already have an Account? 
                    <a onClick={()=>navigate("/login")}> Login Here</a></p>
                </form>
            </div>
        </div>
    )
}
export default Register;