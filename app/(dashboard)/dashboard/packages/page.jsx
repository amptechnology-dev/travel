"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";

function Page() {
  const [galleryDetails, setGalleryDetails] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    place: "",
    image: "",
    duration: "",
    persons: "",
    discount: 0,
    image: null,
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
        `${process.env.NEXT_PUBLIC_BACKLINK}/dashboard/package/list`,
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
    const newValue = name === "image" ? files[0] : value.trimStart();
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: newValue,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formData.name === "" || (editIndex === null && !formData.image)) {
      alert("Name and Image are required!");
      return;
    }

    if (formData.image && formData.image.size > 512 * 1024) {
      alert("Image size should be less than 512KB");
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("price", formData.price);
    formDataToSend.append("place", formData.place);
    formDataToSend.append("duration", formData.duration);
    formDataToSend.append("persons", formData.persons);
    formDataToSend.append("discount", formData.discount);
    if (formData.image) {
      formDataToSend.append("image", formData.image);
    }

    try {
      if (editIndex !== null) {
        await axios.put(
          `${process.env.NEXT_PUBLIC_BACKLINK}/dashboard/package/update/${galleryDetails[editIndex]._id}`,
          formDataToSend,
          {
            withCredentials: true,
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        setEditIndex(null);
        swal("Success", "Activity updated successfully!", "success");
      } else {
        await axios.post(
          `${process.env.NEXT_PUBLIC_BACKLINK}/dashboard/package/insert`,
          formDataToSend,
          {
            withCredentials: true,
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        swal("Success", "New Package added successfully!", "success");
      }
      fetchPackageDetails();
      setFormData({
        name: "",
        description: "",
        price: "",
        place: "",
        duration: "",
        persons: "",
        discount: 0,
        image: null,
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
            `${process.env.NEXT_PUBLIC_BACKLINK}/dashboard/package/delete/${id}`,
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
      description: galleryDetails[index].description,
      price: galleryDetails[index].price,
      place: galleryDetails[index].place,
      duration: galleryDetails[index].duration,
      persons: galleryDetails[index].persons,
      discount: galleryDetails[index].discount,
      image: null,
    });
    setEditIndex(index);
    setShowForm(true);
  };

  const toggleForm = () => {
    setShowForm(!showForm);
    setFormData({ title: "", description: "", image: null });
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
                Name{" "}
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
                Description{" "}
                <span className="font-italic text-sm font-weight-light">
                  (max length: 500 characters)
                </span>
              </label>
              <textarea
                className="form-control"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="form-group">
              <label>
                Price
                <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                className="form-control"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>
                Place
                <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                name="place"
                value={formData.place}
                className="form-control"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>
                Image
                <span className="font-italic text-sm font-weight-light">
                  (max size: 512KB, 300px X 200px)
                </span>{" "}
                <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="file"
                className="form-control"
                name="image"
                onChange={handleChange}
                accept="image/jpg, image/jpeg, image/png"
                required={editIndex === null}
              />
              {editIndex !== null && galleryDetails[editIndex].image && (
                <div className="mt-2">
                  <img
                    src={`${
                      process.env.NEXT_PUBLIC_BACKPUBLIC
                    }/${galleryDetails[editIndex].image.slice(7)}`}
                    alt={`Current ${galleryDetails[editIndex].description}`}
                    style={{ width: "150px", height: "100px" }}
                  />
                  <small className="text-muted">Current Image</small>
                </div>
              )}
            </div>
            <div className="form-group">
              <label>
                Duration
                <span className="font-italic text-sm font-weight-light">
                  (eg: 2 days, 2 Days 1 Night)
                </span>{" "}
                <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                name="duration"
                value={formData.duration}
                className="form-control"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>
                Persons
                <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="number"
                name="persons"
                value={formData.persons}
                className="form-control"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>
                Discount
                <span className="font-italic text-sm font-weight-light">
                  (eg: 10, 20. Will be showed as Percent)
                </span>{" "}
              </label>
              <input
                type="text"
                name="discount"
                value={formData.discount}
                className="form-control"
                onChange={handleChange}
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
              <th>Name</th>
              <th>Description</th>
              <th>Place</th>
              <th>Price</th>
              <th>Duration</th>
              <th>Person</th>
              <th>Discount</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {galleryDetails.map((item, index) => (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.place}</td>
                <td>{item.price}</td>
                <td>{item.duration}</td>
                <td>{item.persons}</td>
                <td>{item.discount}%</td>
                <td>
                  <img
                    src={`${
                      process.env.NEXT_PUBLIC_BACKPUBLIC
                    }/${item.image.slice(7)}`}
                    alt={`Image of ${item.description}`}
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
