import React, { useState } from 'react'
import styles from './auth.module.css'
const Login = ({handlesignup}) => {
  const [input, setinput] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState({ email: "", password: "" });



  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const userLogin = async () => {
    
  }
  

  return (
    <main className={styles.mainContainer}>
        <p>Login</p>

        <div className={styles.form}>
            
            <input 
              type="email" 
              id='email'
              placeholder="Email id" 
              value={input.email}
              onChange={(e) => setinput({...input, email: e.target.value})}  
            />
            <label htmlFor="email" className="error">{error.email}</label>
            
            <input 
              type="password" 
              placeholder="Password"
              value={input.password}
              onChange={(e) => setinput({...input, password: e.target.value})}  
            />
            <label htmlFor="password" className="error">{error.password}</label>

            <button type='submit' onClick={()=> validate}>Register</button>

            <p>Don’t have an account? <span onClick={handlesignup}>SignUp</span></p>
        </div>

    </main>
  )
}

export default Login