"use client";
import React, { useState } from "react";

export default function BookingForm({ onSubmit, packages }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    whatsapp: "",
    package: "",
    departDate: "",
    returnDate: "",
    person: "",
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
      alert("Enquiry submitted successfully!");
    } else {
      alert("Failed to submit enquiry.");
    }
  };

  return (
    <div className="container pb-5" id="booking">
      <div className="bg-light shadow" style={{ padding: 30 }}>
        <div
          className="bg-dark pt-3 row align-items-center"
          style={{ minHeight: 60 }}
        >
          <div className="col-md-12">
            <form onSubmit={handleSubmit} className="row">
              <div className="col-md-3">
                <div className="mb-3 mb-md-3">
                  <input
                    type="text"
                    name="name"
                    className="form-control p-4"
                    placeholder="Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className="mb-3 mb-md-3">
                  <input
                    type="email"
                    name="email"
                    className="form-control p-4"
                    placeholder="Email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className="mb-3 mb-md-3">
                  <input
                    type="tel"
                    name="mobile"
                    className="form-control p-4"
                    placeholder="Phone Number"
                    required
                    pattern="[6-9]{1}[0-9]{9}"
                    title="Please enter a valid phone number"
                    value={formData.mobile}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className="mb-3 mb-md-3">
                  <input
                    type="tel"
                    name="whatsapp"
                    className="form-control p-4"
                    placeholder="Whatsapp Number"
                    pattern="[6-9]{1}[0-9]{9}"
                    title="Please enter a valid phone number"
                    value={formData.whatsapp}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className="mb-3 mb-md-0">
                  <select
                    name="package"
                    className="custom-select px-4"
                    style={{ height: 47 }}
                    value={formData.package}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled selected>
                      Select Package
                    </option>
                    {packages?.data?.map((pkg) => (
                      <option key={pkg.id} value={pkg._id}>
                        {pkg.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col-md-3">
                <div className="mb-3 mb-md-0">
                  <div className="date" id="date1" data-target-input="nearest">
                    <input
                      type="text"
                      name="departDate"
                      className="form-control p-4 datetimepicker-input"
                      placeholder="Depart Date"
                      onFocus={(e) => (e.target.type = "date")}
                      value={formData.departDate}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="mb-3 mb-md-0">
                  <div className="date" id="date2" data-target-input="nearest">
                    <input
                      type="text"
                      name="returnDate"
                      className="form-control p-4 datetimepicker-input"
                      placeholder="Return Date"
                      onFocus={(e) => (e.target.type = "date")}
                      value={formData.returnDate}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="mb-3 mb-md-3">
                  <input
                    type="number"
                    name="person"
                    className="form-control p-4"
                    placeholder="Number Of Persons"
                    inputMode="numeric"
                    min={1}
                    value={formData.person}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="mx-auto mb-3">
                <button className="btn btn-primary btn-block" type="submit">
                  Enquiry
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="row align-items-center" style={{ minHeight: 60 }}>
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <a href="#booking">
              <button
                type="button"
                style={{ width: 250 }}
                className="rounded-pill btn btn-lg mt-5 btn-success"
              >
                <i className="fa-brands fa-submit" />
                Booking
              </button>
            </a>
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <a href="#bank">
              <button
                type="button"
                style={{ width: 250 }}
                className="rounded-pill btn btn-lg mt-5 btn-warning"
              >
                <i className="fa-brands fa-submit" />
                Pay Now
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
