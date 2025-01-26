import React from 'react'
import styles from './Sidebar.module.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
        <img src={logo} alt="logo" />

        <div className={styles.menu}>

          <ul>
            <li>
              <Link to='/'>Dashboard</Link>
            </li>
            <li>
              <Link to='/links'>
                Links
              </Link>
            </li>
            <li>
              <Link to='/analytics'>
                Analytics
              </Link>
            </li>
            <li>
              <Link to='/settings'>
                Settings
              </Link>
            </li>
          </ul>

        </div>
    </aside>
  )
}

export default Sidebar