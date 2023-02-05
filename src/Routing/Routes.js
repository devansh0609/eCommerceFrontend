import React, { useEffect } from "react";
import {Routes, Route} from "react-router-dom";
import Home from "../views/Home";
import Cart from "../views/Cart";
import Navbar from "../Navbar/Navbar";
import Contact from "../views/Contact";
import Login from "../views/Login";
import Register from "../views/Register";
import About from "../views/About";
import Laptops from "../views/Laptops";
import Mobiles from "../views/Mobiles";
import Tablets from "../views/Tablets";
import Earbuds from "../views/Earbuds";
import { useSelector } from "react-redux";

function Routing(){
    const p_id = useSelector(state =>state.Auth.l_data.id);
    return(
        <>
            <Navbar/>
                <>
                { p_id && p_id !== null && p_id !== 'undefined' && typeof(p_id) === 'string'?
                    <Routes>
                        <Route path="/cart" element={<Cart/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/home" element={<Home/>}/>
                        <Route path="/Laptops" element={<Laptops/>}/>
                        <Route path="/Mobiles" element={<Mobiles/>}/>
                        <Route path="/Tablets" element={<Tablets/>}/>
                        <Route path="/Earbuds" element={<Earbuds/>}/>        
                        <Route path="*" element={<Home/>}/>
                    </Routes>
                    :
                <Routes>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/Laptops" element={<Laptops/>}/>
                    <Route path="/Mobiles" element={<Mobiles/>}/>
                    <Route path="/Tablets" element={<Tablets/>}/>
                    <Route path="/Earbuds" element={<Earbuds/>}/>        
                    <Route path="*" element={<Home/>}/>
                </Routes>
            }
            </>
            <Contact/>
        </>
    )
}
export default Routing;