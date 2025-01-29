import React, { useEffect, useState } from "react";
import styles from "./Links.module.css";
import { getAllLinks, deleteLink, editLink } from "../../apis/url"; // Added editLink import
import { toast } from "react-toastify";
import Drawer from "../../components/drawer/Drawer";
import Modal from "../../components/Modal/Modal";

const Links = () => {
  const baseUrl = import.meta.env.VITE_BASEURL;

  const [links, setLinks] = useState([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null); // Added this line
  const [selectedLink, setSelectedLink] = useState(null); // Added this line

  const getLinks = async () => {
    const data = await getAllLinks();
    setLinks(data?.data?.data.urls);
    console.log(data.data.data.urls);
  };

  const deleteUrl = async (id) => {
    const data = await deleteLink(id);
    console.log(data);
    getLinks(); // Refresh the links after deletion
  }

  const handleSortByDate = () => {};

  const handleSortByStatus = () => {};

  const handleDeleteClick = (id) => { // Modified this line
    setSelectedId(id); // Set the selected id
    setIsModalOpen(true);
  };

  const handleEditClick = (row) => {
    setSelectedLink(row); // Set the selected link
    toggleDrawer();
  };

  const handleCopyClick = (shortLink) => {
    navigator.clipboard.writeText(`${baseUrl}/url/${shortLink}`);
    toast.success("Link copied to clipboard!");
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  useEffect(() => {
    getLinks();
  }, [isDrawerOpen]);

  return (
    <div className={styles.linksContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>
              Date
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
            <th>Remarks</th>
            <th>Clicks</th>
            <th>
              Status{" "}
              <img
                src="/sorting.png"
                alt="sorting"
                className={styles.sortIcon}
                onClick={handleSortByStatus}
                style={{ cursor: "pointer" }}
              />
            </th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {links?.map((row, index) => (
            <tr key={row._id}>
              <td>{row.createdAt.toString().split("T")[0]}</td>
              <td>{row.destinationUrl.slice(0,25)}</td>
              <td>
                {`${baseUrl}/url/${row.shortUrl}`.slice(0, 12)}
                <img
                  src="/copy.png"
                  alt="copy"
                  className={styles.copyIcon}
                  onClick={() => handleCopyClick(row.shortUrl)}
                />
              </td>
              <td>{row.remarks}</td>
              <td>{row.clicks}</td>
              <td className={styles.inactive}>active</td>
              <td>
                <button
                  className={styles.editBtn}
                  onClick={() => handleEditClick(row)}
                >
                  <img src="/edit.png" alt="edit" className={styles.editIcon} />
                </button>
                <button
                  className={styles.deleteBtn}
                  onClick={() => handleDeleteClick(row._id)} // Modified this line
                >
                  <img
                    src="/bin.png"
                    alt="Delete"
                    className={styles.deleteIcon}
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Drawer
        heading={selectedLink ? "Edit Link" : "New Link"} // Modified this line
        toggleDrawer={toggleDrawer}
        isOpen={isDrawerOpen}
        data={selectedLink} // Added this line
        editLink={editLink} // Added this line
      />

      {isModalOpen && <Modal 
        setIsModalOpen={setIsModalOpen}
        deleteUrl={deleteUrl}
        id={selectedId} // Added this line
      />}
    </div>
  );
};

export default Links;
