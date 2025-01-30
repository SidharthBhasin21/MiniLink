import React, { useEffect, useState } from "react";
import styles from "./Links.module.css";
import { deleteLink, getAllLinks, editLink } from "../../apis/url"; // Added editLink import
import { toast } from "react-toastify";
import Drawer from "../../components/drawer/Drawer";
import Modal from "../../components/Modal/Modal";
import { useSelector } from "react-redux";

const Links = () => {
  const baseUrl = import.meta.env.VITE_BASEURL;
  const { query, results } = useSelector((state) => state.search);

  const [links, setLinks] = useState([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [selectedLink, setSelectedLink] = useState(null); // Added this line
  const [currentPage, setCurrentPage] = useState(1); // Added this line
  const [totalPages, setTotalPages] = useState(1); // Added this line

  const getLinks = async (page = 1) => { // Modified this function
    const data = await getAllLinks(page);
    setLinks(data?.data?.data.urls);
    setTotalPages(data?.data?.data.pagination.totalPages); // Set total pages
    console.log(data.data.data.urls);
  };

  const deleteUrl = async (id) => {
    const data = await deleteLink(id);
    console.log(data);
    getLinks(currentPage); // Refresh the links after deletion
  }

  const handleSortByDate = () => {};

  const handleSortByStatus = () => {};

  const handleDeleteClick = (id) => {
    setSelectedId(id);
    setIsModalOpen(true);
  };

  const handleEditClick = (row) => { // Modified this function
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

  const handlePageChange = (page) => { // Modified this function
    setCurrentPage(page);
    getLinks(page);
  };

  useEffect(() => {
    if(query.length > 0){
      setLinks(results)
    } else {
      getLinks(currentPage);
    }
  }, [query,results, isModalOpen, isDrawerOpen, currentPage]);

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
                  onClick={() => handleEditClick(row)} // Modified this line
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

      <div className={styles.pagination}> {/* Added this block */}
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`${styles.pageButton} ${currentPage === index + 1 ? styles.activePage : ''}`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <Drawer
        heading={selectedLink ? "Edit Link" : "New Link"}
        toggleDrawer={toggleDrawer}
        isOpen={isDrawerOpen}
        data={selectedLink}
        editLink={editLink}
      />

      {isModalOpen && <Modal 
        setIsModalOpen={setIsModalOpen}
        deleteUrl={deleteUrl}
        id={selectedId}
      />}
    </div>
  );
};

export default Links;
