"use client";

import React, { useState } from "react";

export default function ContactForm({ handleSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const result = await handleSubmit(formData);
    if (result.success) {
      alert("Message sent successfully!");
    } else {
      alert("Failed to send message.");
    }
  };

  return (
    <div className="container-fluid py-5" id="contact">
      <div className="container py-5">
        <div className="text-center mb-3 pb-3">
           <span
              style={{
                display: "inline-block",
                background: "linear-gradient(135deg, #16a34a, #22c55e)",
                color: "#fff",
                fontSize: "11px",
                fontWeight: "700",
                letterSpacing: "3px",
                textTransform: "uppercase",
                padding: "6px 20px",
                borderRadius: "20px",
                marginBottom: "16px",
              }}
            >
            Contact
          </span>
          <h1>Contact For Any Query</h1>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="contact-form bg-white" style={{ padding: 30 }}>
              <div id="success" />
              <form onSubmit={handleFormSubmit} className="php-email-form" id="contactForm">
                <div className="form-row">
                  <div className="control-group col-sm-6">
                    <input
                      type="text"
                      className="form-control p-4"
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      required="required"
                      data-validation-required-message="Please enter your name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    <p className="help-block text-danger" />
                  </div>
                  <div className="control-group col-sm-6">
                    <input
                      type="email"
                      className="form-control p-4"
                      id="email"
                      name="email"
                      placeholder="Your Email"
                      required="required"
                      data-validation-required-message="Please enter your email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <p className="help-block text-danger" />
                  </div>
                </div>
                <div className="control-group">
                  <input
                    type="tel"
                    className="form-control p-4"
                    id="phone"
                    name="phone"
                    placeholder="Phone"
                    required="required"
                    data-validation-required-message="Please enter a phone"
                    pattern="[0-9]{10}"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <p className="help-block text-danger" />
                </div>
                <div className="control-group">
                  <textarea
                    className="form-control py-3 px-4"
                    rows={5}
                    id="message"
                    name="message"
                    placeholder="Message"
                    required="required"
                    data-validation-required-message="Please enter your message"
                    value={formData.message}
                    onChange={handleChange}
                  />
                  <p className="help-block text-danger" />
                </div>
                <div className="text-center">
                  <button className="btn btn-primary py-3 px-4" type="submit" id="sendMessageButton">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
