"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";

function Page() {
  const [galleryDetails, setGalleryDetails] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    account: "",
    holderName: "",
    ifsc: "",
    branch: "",
    qr: null,
    upi: "",
  });
  const [showForm, setShowForm] = useState(true);
  const [editIndex, setEditIndex] = useState(null);
  const [error, setError] = useState(null);

  // Fetch gallery details on mount
  useEffect(() => {
    fetchPackageDetails();
  }, []);

  const fetchPackageDetails = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKLINK}/dashboard/bank/list`,
        { withCredentials: true }
      );
      setGalleryDetails(response.data.data);
      setError(null);
    } catch (error) {
      console.error("Error fetching gallery details:", error);
      setError("Error fetching gallery details");
    }
  };

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    const newValue = name === "qr" ? files[0] : value.trimStart();
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: newValue,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formData.name === "" || (editIndex === null && !formData.qr)) {
      alert("Name and QR Image are required!");
      return;
    }

    if (formData.image && formData.image.size > 512 * 1024) {
      alert("Image size should be less than 512KB");
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("account", formData.account);
    formDataToSend.append("holderName", formData.holderName);
    formDataToSend.append("ifsc", formData.ifsc);
    formDataToSend.append("branch", formData.branch);
    formDataToSend.append("upi", formData.upi);
    if (formData.qr) {
      formDataToSend.append("qr", formData.qr);
    }

    try {
      if (editIndex !== null) {
        await axios.put(
          `${process.env.NEXT_PUBLIC_BACKLINK}/dashboard/bank/update/${galleryDetails[editIndex]._id}`,
          formDataToSend,
          {
            withCredentials: true,
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        setEditIndex(null);
        swal("Success", "Bank updated successfully!", "success");
      } else {
        await axios.post(
          `${process.env.NEXT_PUBLIC_BACKLINK}/dashboard/bank/insert`,
          formDataToSend,
          {
            withCredentials: true,
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        swal("Success", "New bank added successfully!", "success");
      }
      fetchPackageDetails();
      setFormData({
        name: "",
        account: "",
        holderName: "",
        ifsc: "",
        branch: "",
        upi: "",
        qr: null,
      });
    } catch (error) {
      console.error("Error:", error);
      swal({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: "Please try again later.",
      });
    }
  };

  const handleDelete = async (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this item!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        try {
          await axios.delete(
            `${process.env.NEXT_PUBLIC_BACKLINK}/dashboard/bank/delete/${id}`,
            { withCredentials: true }
          );
          fetchPackageDetails();
          setError(null);
          swal("Deleted Successfully!", {
            icon: "success",
          });
        } catch (error) {
          console.error("Error deleting activity item:", error);
          setError("Error deleting gallery item");
        }
      }
    });
  };

  const handleEdit = (index) => {
    window.scrollTo(0, 0);
    setFormData({
      name: galleryDetails[index].name,
      account: galleryDetails[index].account,
      holderName: galleryDetails[index].holderName,
      ifsc: galleryDetails[index].ifsc,
      branch: galleryDetails[index].branch,
      upi: galleryDetails[index].upi,
      qr: null,
    });
    setEditIndex(index);
    setShowForm(true);
  };

  const toggleForm = () => {
    setShowForm(!showForm);
    setEditIndex(null);
  };

  return (
    <div className="container py-3">
      {error && <div className="alert alert-danger">{error}</div>}
      {showForm && (
        <div>
          <h2 style={{ color: "#007bff" }}>
            {editIndex !== null ? "Edit Packages" : "Add Packages"}
          </h2>
          <form method="post" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>
                Bank Name{" "}
                <span className="font-italic text-sm font-weight-light">
                  (max length: 250 characters)
                </span>{" "}
                <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                className="form-control"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>
                Account No
                <span style={{ color: "red" }}>*</span>
              </label>
              <input
                className="form-control"
                name="account"
                type="number"
                value={formData.account}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>
                Holder Name
                <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                name="holderName"
                value={formData.holderName}
                className="form-control"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>
                IFSC
                <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                name="ifsc"
                value={formData.ifsc}
                className="form-control"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>
                QR Code
                <span className="font-italic text-sm font-weight-light">
                  (max size: 512KB, 300px X 200px)
                </span>{" "}
                <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="file"
                className="form-control"
                name="qr"
                onChange={handleChange}
                accept="image/jpg, image/jpeg, image/png"
                required={editIndex === null}
              />
              {editIndex !== null && galleryDetails[editIndex].qr && (
                <div className="mt-2">
                  <img
                    src={`https://${galleryDetails[editIndex].qr.slice(7)}`}
                    alt={`Current ${galleryDetails[editIndex].description}`}
                    style={{ width: "150px", height: "100px" }}
                  />
                  <small className="text-muted">Current Image</small>
                </div>
              )}
            </div>
            <div className="form-group">
              <label>
                Branch
                <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                name="branch"
                value={formData.branch}
                className="form-control"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>
                UPI
                <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                name="upi"
                value={formData.upi}
                className="form-control"
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary mr-2">
              {editIndex !== null ? "Update" : "Submit"}
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={toggleForm}
            >
              Cancel
            </button>
          </form>
          <hr />
        </div>
      )}

      <div>
        <h2 style={{ color: "#007bff" }}>All Packages</h2>
        <table className="table table-responsive">
          <thead>
            <tr>
              <th>Bank</th>
              <th>Account No</th>
              <th>Holder Name</th>
              <th>IFSC</th>
              <th>Branch</th>
              <th>UPI</th>
              <th>QR</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {galleryDetails.map((item, index) => (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.account}</td>
                <td>{item.holderName}</td>
                <td>{item.ifsc}</td>
                <td>{item.branch}</td>
                <td>{item.upi}</td>
                <td>
                  <img
                    src={`https://${item.qr.slice(
                      7
                    )}`}
                    alt={`Image of ${item.name}`}
                    style={{ width: "250px", height: "150px" }}
                  />
                </td>
                <td>
                  <div className="d-flex align-self-center">
                    <button
                      className="btn btn-primary mr-2"
                      onClick={() => handleEdit(index)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(item._id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {!showForm && (
          <button
            type="button"
            className="btn btn-primary"
            onClick={toggleForm}
          >
            Add Activity
          </button>
        )}
      </div>
    </div>
  );
}

export default Page;
