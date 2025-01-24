import React from 'react'
import styles from './Sidebar.module.css'
import logo from '../../assets/logo.png'
const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
        <img src={logo} alt="logo" />

        <div className={styles.menu}>

          <ul>
            <li>DASHBOARD</li>
            <li>LINKS</li>
            <li>ANALYTICS</li>
            <li>SETTINGS</li>
          </ul>

        </div>
    </aside>
  )
}

export default Sidebar