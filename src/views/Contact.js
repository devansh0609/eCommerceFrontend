import React from "react";
import styles from "./css/Contact.module.css";

function Contact(){

    return(
        <>
            <hr/>
            <footer>
                <h6 className={styles.head}>Contact us</h6>
                <div className={styles.cont}>
                    <div>
                        <img alt="Logo"/>
                        <p>9990999</p>
                    </div>
                    <div>
                        <img alt="Logo"/>
                        <p>abc@gmail.com</p>
                    </div>
                    <div>
                        <img alt="Logo"/>
                        <p>abcdef</p>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Contact;