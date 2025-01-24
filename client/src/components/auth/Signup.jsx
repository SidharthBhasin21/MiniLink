import React from 'react'
import styles from './auth.module.css'
const Signup = ({handlelogin}) => {
    return (
        <main className={styles.mainContainer}>
                <p>Join us Today!</p>
        
                <div className={styles.form}>
                    <input type="text" placeholder="Name"/>
                    <input type="email" placeholder="Email id"/>
                    <input type="number" placeholder="Mobile no."/>
                    <input type="password" placeholder="Password"/>
                    <input type="password" placeholder="Confirm Password"/>
                    <button>Register</button>
        
                    <p>Already have an account? <span onClick={handlelogin}>Login</span></p>
                </div>
        
            </main>
    )
}

export default Signup