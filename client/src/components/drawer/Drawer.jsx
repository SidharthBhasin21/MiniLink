import React, { useState } from 'react'
import styles from './Drawer.module.css'

const Drawer = ({ toggleDrawer, isOpen }) => {

    const [input, setInput] = useState({
        destinationUrl: '',
        remarks: '',
        linkExp: false,
        date: ''
    })

  return (
    <div className={`${styles.drawer} ${isOpen ? styles.open : ''}`}>
        <div className={styles.drawerHeader}>
            <h4>New Link</h4>
            <button onClick={toggleDrawer}>X</button>
        </div>
        
        <div className={styles.drawerBody}>
            <form action="">
                <div>
                    <label htmlFor="title">Destination Url <span>*</span></label>
                    <input type="text" id='title' placeholder="Title" required/>
                </div>
                <div>
                    <label htmlFor="url">Remarks <span>*</span></label>
                    <textarea type="url" id='url' placeholder="Url" required/>
                </div>

                <div>
                    <label htmlFor="linkexp">Link expiration</label>
                    <input type="checkbox" name="linkexp" id="linkexp" />
                </div>

                <div>
                    <input type="date" name="" id="date" />
                </div>
            </form>
        </div>

        <div className={styles.drawerFooter}>
            <button>clear</button>
            <button>Create New</button>
        </div>

    </div>
  )
}

export default Drawer