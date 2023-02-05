import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import "../Navbar/NavStyle.css";
import { logoutAction, searchProduct } from '../Actions/AuthAction';

function Navbar(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const Auth = useSelector((state)=> state.Auth.l_data.id);
    const logout = ()=>{
        let text = "Do you want to logout?";
        if(window.confirm(text))
            dispatch(logoutAction());
    }    
    const search = (e)=>{
        dispatch(searchProduct(e.target.value));
    }
    return(
        <nav class="navbar navbar-expand-lg bg-light nav">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse box1" id="navbarNav">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" onClick={()=>navigate("/home")}>Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link active">
                        <label>Shop : </label>
                            <select class="dropdown" style={{fontSize:"smaller"}} onChange={e=>navigate(`/${e.target.value}`)}>
                                <option>Categories</option>
                                <hr/>
                                <option>Tablets</option>
                                <option>Earbuds</option>
                                <option>Mobiles</option>
                                <option>Laptops</option>
                            </select>
                    </a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" onClick={()=>navigate("/about")}>About us</a>
                    </li>
                </ul>
                </div>
                <div class="search">
                    <ul class="navbar-nav">    
                        <li class="nav-item">
                            <input class="nav-link" type="text" onChange={(e)=>search(e)}></input>
                        </li>
                    </ul>
                </div>
                <>                
           {Auth && Auth !== null  && Auth !== 'undefined' && typeof(Auth) === 'string' ?

                 <div class="collapse navbar-collapse box2" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" onClick={()=>navigate("/cart")}>Cart</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" onClick={logout}>Log out</a>
                        </li>
                    </ul>
                </div>
                :
                <div class="collapse navbar-collapse box2" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" onClick={()=>navigate("/login")}>Login</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" onClick={()=>navigate("/register")}>Register</a>
                        </li>
                    </ul>
                </div>
                }            
                </>
            </div>
        </nav>   
    )
}
export default Navbar;