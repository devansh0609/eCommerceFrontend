import axios from "axios";
import React, {useState,useEffect} from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { base_url } from "../Actions/config";
import styles from "./css/Home.module.css";

function Earbuds(){
    
    const [data,setData] = useState([]);
    const navigate = useNavigate();
    const log = useSelector(state => state.Auth.l_data.id);
    function fetchEarbuds(){
        fetch(base_url + "/products")
        .then(respone => respone.json())
        .then(data => setData(data));
    }
    useEffect(()=>{
        fetchEarbuds();
    },[]); 
    const addCart = (row)=>{
        if(log === null || log === undefined)
            navigate('/login');
        else
        {
            axios.post(base_url + "/addToCart",{log,row}).then((res)=>{
                alert(res.data.msg);
                fetchEarbuds();
            }).catch((res)=>{
                alert(res.response.data.msg);
            })
        }
    }
    return (
        <>
        {  Array.isArray(data)  && data.length > 0  ?
        <>
        <div className={styles.cards}>
            {data.filter(name => name.p_cat === "Earbud").map(row => (
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
    )
}
export default Earbuds;