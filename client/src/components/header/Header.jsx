import React, { useEffect, useState } from 'react'
import styles from './Header.module.css'

const Header = () => {
  const [greeting, setGreeting] = useState('')
  const [day, setDay] = useState('')


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
  return (
    <div className={styles.header}>
      <div className={styles.greeting}>
        <div>{greeting}, NAME</div>
        <p>{day}</p>

      </div>
      <div ></div>
    </div>
  )
}

export default Header