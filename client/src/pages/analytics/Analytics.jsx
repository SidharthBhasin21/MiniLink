import React, { useEffect, useState } from "react";
import styles from "./Analytics.module.css";
import { getAnalytics } from "../../apis/url";

export const Analytics = () => {
  const baseUrl = import.meta.env.VITE_BASEURL;

  const [analytics, setAnalytics] = useState([]);

  const handleSortByStatus = () => {}
  const handleSortByDate = () => {}

  const loadAnalytics = async () => {
    const data = await getAnalytics()
    setAnalytics(data?.analytics)
    console.log(data?.analytics)
  }

  useEffect(() => {
    loadAnalytics()
  },[])  

  return (
    <div className={styles.analytics}>
      <table className={styles.table}>
              <thead>
                <tr>
                  <th>
                    Timestamp
                    <img
                      src="/sorting.png"
                      alt="sorting"
                      className={styles.dateSortIcon}
                      onClick={handleSortByDate}
                      style={{ cursor: "pointer" }}
                    />
                  </th>
                  <th>Original Link</th>
                  <th>Short Link</th>
                  <th>IP Address</th>
                  <th>User Device</th>
                  
                </tr>
              </thead>
              <tbody>
                {
                  analytics.map((row)=>(
                    <tr key={row.shortUrl}>
                      <td>{row.timestamp}</td>
                      <td>{row.destinationUrl.slice(0,25)+'...'}</td>
                      <td>
                        {`${baseUrl}/url/${row.shortUrl}`}
                      </td>
                      <td>{row.ipAddress}</td>
                      <td>{row.userOS}</td>
                    
                  </tr>
                  ))
                }
                  
              </tbody>
            </table>
    </div>
  );
};
