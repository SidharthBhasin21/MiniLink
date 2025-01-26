import React, { useState } from 'react'
import styles from './Drawer.module.css'

const Drawer = ({ toggleDrawer, isOpen }) => {

    const [input, setInput] = useState({
        destinationUrl: '',
        remarks: '',
        linkExp: false,
        date: new Date().toISOString().split('T')[0] // yyyy-mm-dd format
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(input)
    }
  return (
    <div className={`${styles.drawer} ${isOpen ? styles.open : ''}`}>
        <div className={styles.drawerHeader}>
            <h4>New Link</h4>
            <button onClick={toggleDrawer}>X</button>
        </div>
        
        <div className={styles.drawerBody}>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Destination Url <span>*</span></label>
                    <input 
                        type="url" 
                        id='title' 
                        placeholder="Title" 
                        required
                        value={input.destinationUrl}
                        onChange={(e) => setInput({...input, destinationUrl: e.target.value})}
                    />
                </div>
                <div>
                    <label htmlFor="url">Remarks <span>*</span></label>
                    <textarea 
                        type="text" 
                        id='remarks' 
                        placeholder="Url" 
                        required
                        value={input.remarks}
                        onChange={(e) => setInput({...input, remarks: e.target.value})}
                    />
                </div>

                <div>
                    <label htmlFor="linkexp">Link expiration</label>
                    <input 
                        type="checkbox" 
                        name="linkexp" 
                        id="linkexp" 
                        value={input.linkExp}
                        onChange={(e) => setInput({...input, linkExp: e.target.checked})}
                    />
                </div>

                <div>
                    <input 
                        type="date" 
                        name="" 
                        id="date" 
                        value={input.date}
                        onChange={(e) => setInput({...input, date: e.target.value})}    
                    />
                </div>
            </form>
        </div>

        <div className={styles.drawerFooter}>
            <button onClick={()=>{
                setInput({
                    destinationUrl: '',
                    remarks: '',
                    linkExp: false,
                    date: new Date().toISOString().split('T')[0] // yyyy-mm-dd format
            })}}>clear</button>
            <button onClick={handleSubmit}>Create New</button>
        </div>

    </div>
  )
}

export default Drawer