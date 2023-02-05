import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { base_url } from "../Actions/config";
import styles from "./css/Cart.module.css";

function Cart(){
    
    const p_id = useSelector(state => state.Auth.l_data.id);
    const [data,setData] = useState([]);
    const fetchCart = ()=>{
        fetch(base_url + "/fetchCart")
        .then(response => response.json())
        .then(data => setData(data));
    }
    useEffect(()=>{
        fetchCart();
    },[]);
    const addCart = (row,log)=>{
        axios.post(base_url + "/addToCart",{log,row}).then((res)=>{
            alert(res.data.msg);
            fetchCart();
        }).catch((res)=>{
            alert(res.response.data.msg);
        })
    }
    const decCart = (prod)=>{
        axios.post(base_url + "/decProd",{prod}).then((res)=>{
            alert(res.data.msg);
            fetchCart();
        }).catch((res)=>{
            alert(res.response.data.msg);
        })
    }
    const remCart = (prod)=>{
        axios.post(base_url + "/removeProd",{prod}).then((res)=>{
            alert(res.data.msg);
            fetchCart();
        }).catch((res)=>{
            alert(res.response.data.msg);
        })
    }
    return(
        <>
        {p_id && p_id !== null && p_id !== 'undefined' && typeof(p_id) === 'string' ?
        <>
        <h2>Your Cart:-</h2>
        {
            Array.isArray(data) && data.length>0 ?
            <>
            {
                <>
                {
                    data.filter(name => name.user_id === p_id).map(row=>(
                        <>
                            <div>
                                <div className={styles.card}>
                                    <div className={styles.cardInfo}>
                                        <img  className={styles.cimg} src={require(`../images/Products/${row.p_image}`)}></img>
                                    </div>
                                    <div className={styles.cardInfo}>
                                        <p><strong>{row.p_name}</strong></p>
                                        <p>{row.p_desc}</p>
                                        <p>No. of items = {row.quantity}</p>
                                        <p><strong>Price : ₹{row.p_price}</strong></p>
                                    </div>
                                    <div className={styles.cartChanger}>
                                        <div>
                                            <button className={styles.crementBut} onClick={()=>addCart(row.product_id,row.user_id)}>+</button>
                                            <button className={styles.crementBut} onClick={()=>decCart(row.product_id)}>-</button>
                                        </div>
                                        <button className={styles.remButton} onClick={()=>remCart(row.product_id)}>Remove item from cart</button>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
                </>
            }
            </>
            :
            <p>Your Cart is empty.</p>
        }
        </>
        :
        <h2>You are not signed in.</h2>
        }
        </>
    )
}
export default Cart;