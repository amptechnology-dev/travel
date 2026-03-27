"use client";
import React, { useState } from "react";

export default function Enquiry({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    departDate: "",
    package: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await onSubmit(formData);
    if (result.success) {
      alert("Message sent successfully!");
    } else {
      alert("Failed to send message.");
    }
  };

  return (
    <div className="col-lg-5">
      <div className="card border-0">
        <div className="card-header bg-primary text-center p-4">
          <h1 className="text-white m-0">Enquiry Now</h1>
        </div>
        <div className="card-body rounded-bottom bg-white p-5">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                className="form-control p-4"
                placeholder="Your name"
                required="required"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="phone"
                className="form-control p-4"
                placeholder="Your Phone"
                required="required"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                className="form-control p-4"
                placeholder="Your Email"
                required="required"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="departDate"
                className="form-control p-4"
                placeholder="Depart Date"
                required="required"
                value={formData.departDate}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <select
                name="package"
                className="custom-select px-4"
                style={{ height: 47 }}
                value={formData.package}
                onChange={handleChange}
              >
                <option value="">Select a Package</option>
                <option value="1">Destination 1</option>
                <option value="2">Destination 2</option>

                <option value="3">Destination 3</option>
              </select>
            </div>
            <div>
              <button className="btn btn-primary btn-block py-3" type="submit">
                Sign Up Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
