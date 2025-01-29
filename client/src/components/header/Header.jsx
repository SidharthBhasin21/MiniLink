import React, { useEffect, useState } from 'react'
import styles from './Header.module.css'
import Drawer from '../drawer/Drawer'
import { createLink } from '../../apis/url'

const Header = () => {

  const [greeting, setGreeting] = useState('')
  const [day, setDay] = useState('')
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [name, setName] = useState('')


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

  const createNewLink = async ( data ) => {
    
    const res =  await createLink(data)
    console.log(res)
    return res
  }


  useEffect(() => {
    setGreeting(getGreeting())
    setDay(getCurrentDate())
    setName(localStorage.getItem('name'))
    
  },[])

  const toggleDrawer = () => { // Added this function
    setIsDrawerOpen(!isDrawerOpen)
  }

  return (
    <div className={styles.header}>
      <div className={styles.greeting}>
        <div>{greeting}, {name}</div>
        <p>{day}</p>
      </div>
      <div className={styles.headerFunc}>
        <button onClick={toggleDrawer}>+ Create New</button> 
        <input type='text' placeholder='search by remarks'  />
        <div className={styles.avatar}>{name ?  name.slice(0,2).toUpperCase(): ""}</div>
      </div>
      <Drawer 
        heading='New Link'
        toggleDrawer={toggleDrawer} 
        isOpen={isDrawerOpen}
        createNewLink={createNewLink}
      /> 
    </div>
  )
}

export default Header