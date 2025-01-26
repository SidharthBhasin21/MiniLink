import React from 'react'
import styles from './Settings.module.css'


const Settings = () => {
  return (
    <main className={styles.settings}>
        
          <form action="" className={styles.form}>
            <div className={styles.inputContainer}>

              <label htmlFor="name">Name</label>
              <input type="text" id='name' placeholder=""/>
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="email">Email Id</label>
              <input type="email" id='email' placeholder=""/>
            </div>
            <div className={styles.inputContainer}>

              <label htmlFor="mobile">Password</label>
              <input type="number" id='mobile' placeholder=""/>
            </div>
            <div className={styles.buttonContainer}>

              <button type='submit' className={styles.save}>Save changes</button>
              <button className={styles.delete}>Delete account</button>
            </div>
          </form>
    </main>
  )
}

export default Settings