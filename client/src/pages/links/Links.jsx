import React, { useEffect } from 'react'
import styles from './Links.module.css'
import { getAllLinks } from '../../apis/url';
const Links = () => {


  const getLinks = async ()=>{
    const links = await getAllLinks();
    console.log(links);
  }
  useEffect(()=>{
    getLinks()
  },[])
  return (
    <div>
      
      <a href="http://localhost:3000/url/OpgKsHTMZ">asdsa</a>
    </div>
  )
}

export default Links