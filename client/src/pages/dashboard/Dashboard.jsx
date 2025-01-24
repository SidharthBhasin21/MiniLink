import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Header from '../../components/header/Header'
import styles from './Dashboard.module.css'
const Dashboard = () => {
  return (
    
    <main className={styles.dashboard}>
      <Sidebar />
      <div className={styles.main}>
        <Header />
        <div className={styles.pages}>
          asdsa
        </div>
      </div>
    </main>
  )
}

export default Dashboard