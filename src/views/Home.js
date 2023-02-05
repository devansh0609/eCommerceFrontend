import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { base_url } from '../Actions/config';
import styles from './css/Home.module.css';
function Home(){

    const [data,setData] = useState([]);    
    const fetchProduct = () =>{
        fetch(base_url + "/products")
        .then(response => response.json())
        .then(data => setData(data))
    }
    useEffect(()=>{
        fetchProduct();
    },[]);
    const search = (name)=>{
        return(name.p_cat.toLowerCase().match(prod.toLowerCase()) || name.p_desc.toLowerCase().match(prod.toLowerCase()) || 
        name.p_name.toLowerCase().match(prod.toLowerCase()));
    }
    const prod = useSelector((state)=>state.Srch.p_data);
    const log = useSelector((state)=>state.Auth.l_data.id);
    const navigate = useNavigate();
    const addCart = (row)=>{
        if(log === null || log === undefined)
            navigate('/login');
        else
        {
            axios.post(base_url + "/addToCart",{log,row}).then((res)=>{
                alert(res.data.msg);
                fetchProduct();
            }).catch((res)=>{
                alert(res.response.data.msg);
            })
        }
    }
    return(
        <div>
            <div className = {styles.carou}>
                    <h2>YocoLife</h2>
                <div>
                    <p>All in one site for cool Gadgets</p>
                </div>
            </div>
        <>
        {prod && prod !== null && prod !== undefined && prod !== "" && data.filter((name)=>search(name)).length>0?
        <>
        <div className={styles.cards}>
        {
            data.filter((name)=>search(name)).map(row=>(
                <> 
                <div className={styles.card}>
                    <div className={styles.divImg}>
                        <img  className = {styles.cimg} src={require(`../images/Products/${row.p_image}`)} alt="image"/>
                    </div>
                    <div class = "card-body">
                        <p class = "card-text"><strong>{row.p_name}</strong></p>
                        <p><strong>Price : ₹{row.p_price}</strong></p>
                        <p>Currently Available : {row.avl_quantity}</p>
                        <button class="btn btn-primary" onClick={()=>addCart(row._id)}>Add to Cart</button>
                        <p class = "card-text">{row.p_desc}</p>
                    </div>
                </div>
                    </>    
            ))}
        </div>
        </>
        :
        <>
        <>
        {  Array.isArray(data)  && data.length > 0  ?
        <>
        <button className = {styles.link} onClick={()=>navigate("/Laptops")}>Laptops</button>
        <div className={styles.cards}>
            {data.filter(name => name.p_cat === "Laptop").slice(0,3).map(row => (
                <> 
                <div className={styles.card}>
                    <div className={styles.divImg}>
                        <img  className = {styles.cimg} src={require(`../images/Products/${row.p_image}`)} alt="image"/>
                    </div>
                    <div class = "card-body">
                        <p class = "card-text"><strong>{row.p_name}</strong></p>
                        <p><strong>Price : ₹{row.p_price}</strong></p>
                        <p>Currently Available : {row.avl_quantity}</p>
                        <button class="btn btn-primary" onClick={()=>addCart(row._id)}>Add to Cart</button>
                        <p class = "card-text">{row.p_desc}</p>
                    </div>
                </div>
                    </>
                    ))}
        
          </div>
        </>
            
            
            : <h1>Data is Loading..... </h1> } 
        </> 
        <>
        {  Array.isArray(data)  && data.length > 0  ?
        <>
        <button className = {styles.link} onClick={()=>navigate("/Mobiles")}>Mobiles</button>
        <div className={styles.cards}>
            {data.filter(name => name.p_cat === "Mobile").slice(0,3).map(row => (
                <> 
                <div className={styles.card}>
                    <div className={styles.divImg}>
                        <img  className = {styles.cimg} src={require(`../images/Products/${row.p_image}`)} alt="image"/>
                    </div>
                    <div class = "card-body">
                        <p class = "card-text"><strong>{row.p_name}</strong></p>
                        <p><strong>Price : ₹{row.p_price}</strong></p>
                        <p>Currently Available : {row.avl_quantity}</p>
                        <button class="btn btn-primary" onClick={()=>addCart(row._id)}>Add to Cart</button>
                        <p class = "card-text">{row.p_desc}</p>
                    </div>
                </div>
                    </>
                    ))}
        
          </div>
        </>
            
        
        : <h1>Data is Loading..... </h1> } 
        </> 
        <>
        {  Array.isArray(data)  && data.length > 0  ?
        <>
        <button className = {styles.link} onClick={()=>navigate("/Tablets")}>Tablets</button>
        <div className={styles.cards}>
            {data.filter(name => name.p_cat === "Tablet").slice(0,3).map(row => (
                <> 
                <div className={styles.card}>
                    <div className={styles.divImg}>
                        <img  className = {styles.cimg} src={require(`../images/Products/${row.p_image}`)} alt="image"/>
                    </div>
                    <div class = "card-body">
                        <p class = "card-text"><strong>{row.p_name}</strong></p>
                        <p><strong>Price : ₹{row.p_price}</strong></p>
                        <p>Currently Available : {row.avl_quantity}</p>
                        <button class="btn btn-primary" onClick={()=>addCart(row._id)}>Add to Cart</button>
                        <p class = "card-text">{row.p_desc}</p>
                    </div>
                </div>
                    </>
                    ))}
        
          </div>
        </>
            
        
        : <h1>Data is Loading..... </h1> } 
        </> 
        <>
        {  Array.isArray(data)  && data.length > 0  ?
        <>
        <button className = {styles.link} onClick={()=>navigate("/Earbuds")}>Earbuds</button>
        <div className={styles.cards}>
            {data.filter(name => name.p_cat === "Earbud").slice(0,3).map(row => (
                <> 
                <div className={styles.card}>
                    <div className={styles.divImg}>
                        <img  className = {styles.cimg} src={require(`../images/Products/${row.p_image}`)} alt="image"/>
                    </div>
                    <div class = "card-body">
                        <p class = "card-text"><strong>{row.p_name}</strong></p>
                        <p><strong>Price : ₹{row.p_price}</strong></p>
                        <p>Currently Available : {row.avl_quantity}</p>
                        <button class="btn btn-primary" onClick={()=>addCart(row._id)}>Add to Cart</button>
                        <p class = "card-text">{row.p_desc}</p>
                    </div>
                </div>
                    </>
                    ))}
        
          </div>
        </>
            
            
            : <h1>Data is Loading..... </h1> } 
        </>
        </>
        }
        </>
        </div>
    )
}
export default Home;