import React, { useEffect, useState } from 'react'
import styles from './Header.module.css'
import Drawer from '../drawer/Drawer'

const Header = () => {
  const [greeting, setGreeting] = useState('')
  const [day, setDay] = useState('')
  const [isDrawerOpen, setIsDrawerOpen] = useState(false) // Added this line

  const getGreeting = () => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      return '⛅️  Good morning';
    } else if (currentHour < 18) {
      return '☀️  Good afternoon';
    } else {
      return '🌘  Good evening';
    }
  }
  const getCurrentDate = () => {
    const options = { weekday: 'short', month: 'short', day: 'numeric' };
    return new Date().toLocaleDateString('en-US', options);
  }

  useEffect(() => {
    setGreeting(getGreeting())
    setDay(getCurrentDate())
  },[])

  const toggleDrawer = () => { // Added this function
    setIsDrawerOpen(!isDrawerOpen)
  }

  return (
    <div className={styles.header}>
      <div className={styles.greeting}>
        <div>{greeting}, NAME</div>
        <p>{day}</p>
      </div>
      <div className={styles.headerFunc}>
        <button onClick={toggleDrawer}>+ Create New</button> {/* Modified this line */}
        <input type='text' placeholder='search by remarks'  />
        <div className={styles.avatar}>NM</div>
      </div>
      <Drawer 
        toggleDrawer={toggleDrawer} 
        isOpen={isDrawerOpen}  
      /> {/* Modified this line */}
    </div>
  )
}

export default Header