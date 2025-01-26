import React, { useEffect } from 'react'
import styles from './Dashboard.module.css'
import useAuth from '../../hooks/useAuth'

const Dashboard = () => {
  const token = useAuth()

  useEffect(() => {
  },[])
  
  return (
    
    <main className={styles.dashboard}>
      DASHBOARD
    </main>
  )
}

export default Dashboard