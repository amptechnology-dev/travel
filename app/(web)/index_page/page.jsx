import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";
import { FaServicestack } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import { MdEmojiTransportation } from "react-icons/md";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { IoFastFood } from "react-icons/io5";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactFrom from "../component/booking/ContactFrom";
// import Enquiry from "../component/Enquiry";
import Enquiry from "../component/booking/Enquiry";
import Navbar from "../component/Navbar";
import PackageImageModal from "../component/PackageImageModal";
import ActivitiesSection from "../component/ActivitiesSection";

async function getOfficeData() {
  const res = await fetch(process.env.BACKLINK + "/public/officeData", {
    headers: {
      "x-api-key": process.env.API_KEY,
      "office-id": process.env.OFFICE,
    },
    next: {
      revalidate: 600,
    },
  });
  if (!res.ok) {
    return res.statusText;
  }
  return res.json();
}

async function getGallery() {
  const res = await fetch(process.env.BACKLINK + "/public/Gallery", {
    headers: {
      "x-api-key": process.env.API_KEY,
      "office-id": process.env.OFFICE,
    },
    cache: "no-store",
  });
  if (!res.ok) {
    return res.statusText;
  }
  return res.json();
}

async function getStaff() {
  const res = await fetch(process.env.BACKLINK + "/public/Staff", {
    headers: {
      "x-api-key": process.env.API_KEY,
      "office-id": process.env.OFFICE,
    },
    cache: "no-store",
  });
  if (!res.ok) {
    return res.statusText;
  }
  return res.json();
}

async function getServices() {
  const res = await fetch(process.env.BACKLINK + "/public/service", {
    headers: {
      "x-api-key": process.env.API_KEY,
      "office-id": process.env.OFFICE,
    },
    cache: "no-store",
  });
  if (!res.ok) {
    return res.statusText;
  }
  return res.json();
}

async function getAbout() {
  const res = await fetch(process.env.BACKLINK + "/public/About", {
    headers: {
      "x-api-key": process.env.API_KEY,
      "office-id": process.env.OFFICE,
    },
    cache: "no-store",
  });
  if (!res.ok) {
    return res.statusText;
  }
  return res.json();
}

async function getPackages() {
  try {
    const res = await fetch(process.env.BACKLINK + "/public/package", {
      headers: {
        "x-api-key": process.env.API_KEY,
        "office-id": process.env.OFFICE,
      },
      cache: "no-store",
    });
    if (!res.ok) return { data: [] };
    return res.json();
  } catch (e) {
    console.error("getPackages error:", e);
    return { data: [] };
  }
}

async function getSocial() {
  const res = await fetch(process.env.BACKLINK + "/public/Social", {
    headers: {
      "x-api-key": process.env.API_KEY,
      "office-id": process.env.OFFICE,
    },
    cache: "no-store",
  });
  if (!res.ok) {
    return res.statusText;
  }
  return res.json();
}

async function getActivities() {
  const res = await fetch(process.env.BACKLINK + "/public/activity", {
    headers: {
      "x-api-key": process.env.API_KEY,
      "office-id": process.env.OFFICE,
    },
    cache: "no-store",
  });
  if (!res.ok) {
    return res.statusText;
  }
  return res.json();
}

const handleSubmit = async (formData, e) => {
  "use server";

  try {
    const response = await fetch(`${process.env.BACKLINK}/public/contact-us`, {
      method: "POST",
      headers: {
        "x-api-key": process.env.API_KEY,
        "office-id": process.env.OFFICE,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      return { success: false };
    }
    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false };
  }
};

async function getBank() {
  const res = await fetch(process.env.BACKLINK + "/public/bank", {
    headers: {
      "x-api-key": process.env.API_KEY,
      "office-id": process.env.OFFICE,
    },
    cache: "no-store",
  });
  if (!res.ok) {
    return res.statusText;
  }
  return res.json();
}

const onSubmit = async (formData, e) => {
  "use server";

  try {
    const response = await fetch(`${process.env.BACKLINK}/public/enquiry`, {
      method: "POST",
      headers: {
        "x-api-key": process.env.API_KEY,
        "office-id": process.env.OFFICE,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      console.error(await response.json());
      return { success: false };
    }
    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false };
  }
};

export default async function AboutSection() {
  const Officedata = await getOfficeData();

  const Gallerydata = await getGallery();

  const Staffdata = await getStaff();

  const Aboutdata = await getAbout();
  const Packagedata = await getPackages();
  const Activitydata = await getActivities();

  const Socialdata = await getSocial();

  const Servicedata = await getServices();
  const Bankdata = await getBank();

  // console.log(Enquirydata);

  return (
    <>
      <a
        href="https://api.whatsapp.com/send?phone=902127063810&text=Merhaba"
        className="float"
        target="_blank"
      >
        <i className="fa-brands fa-whatsapp wp-button" />
      </a>

      <Navbar officeData={Officedata.data} socialData={Socialdata.data} />

      {/* Carousel Start */}
      <div className="container-fluid p-0" id="home">
        <div
          id="header-carousel"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            {Officedata.data?.banner.map((banner, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <img
                  src={`https://${banner.slice(7)}`}
                  alt={`Banner ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
                />
              </div>
            ))}
          </div>

          <a
            className="carousel-control-prev"
            href="#header-carousel"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
          </a>

          <a
            className="carousel-control-next"
            href="#header-carousel"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
          </a>
        </div>

        <div
          style={{
            marginTop: "-60px",
            position: "relative",
            zIndex: 10,
            padding: "0 20px",
          }}
        >
          <Enquiry onSubmit={onSubmit} packages={Packagedata} />
        </div>
      </div>
      {/* Carousel End */}

      {/* About Start */}
      <div className="container-fluid py-5 " id="about">
        <div className="container pt-5">
          <div className="row">
            <div class="h1 text-center pb-5">ABOUT US</div>
            <div className="col-lg-6" style={{ minHeight: 500 }}>
              <div className="position-relative h-100">
                <img
                  className="position-absolute w-100 h-100"
                  src={`http://${Aboutdata.data?.image?.slice(7)}`}
                  style={{ objectFit: "fill" }}
                />
              </div>
            </div>
            <div className="col-lg-6 pt-5 pb-lg-5">
              <div className="about-text bg-white p-4 p-lg-5 my-lg-5">
                <h6
                  className="text-primary text-uppercase"
                  style={{ letterSpacing: 5 }}
                >
                  Why Choose Us
                </h6>
                <h1 className="mb-3">
                  We Provide Best Tour Packages In Your Budget
                </h1>
                <p>{Aboutdata.data?.description}</p>
                <div className="row mb-4">
                  <div className="col-6">
                    <img
                      className="img-fluid"
                      src={`https://${Officedata.data?.banner[0]?.slice(7)}`}
                      alt=""
                    />
                  </div>
                  <div className="col-6">
                    <img
                      className="img-fluid"
                      src={`https://${Officedata.data?.banner[1]?.slice(7)}`}
                    />
                  </div>
                </div>
                <a href="/#booking" className="btn btn-primary mt-1">
                  Book Now
                </a>
              </div>
            </div>
          </div>

          <div className="  row align-items-center" style={{ minHeight: 60 }}>
            <div className="col-md-6 d-flex align-items-center justify-content-center"></div>
          </div>
        </div>
      </div>
      {/* About End */}
      {/* Feature Start */}
      <div className="container-fluid pb-5">
        <div className="container pb-5">
          <div className="row">
            <div className="col-md-4">
              <div className="d-flex mb-4 mb-lg-0">
                <div
                  className="d-flex flex-shrink-0 align-items-center justify-content-center bg-primary mr-3"
                  style={{ height: 100, width: 100 }}
                >
                  <FaRupeeSign
                    style={{ height: 50, width: 50, color: "white" }}
                  />
                </div>
                <div className="d-flex flex-column">
                  <h5 className="">Competitive Pricing</h5>
                  <p className="m-0">
                    Magna sit magna dolor duo dolor labore rebum amet elitr est
                    diam sea
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="d-flex mb-4 mb-lg-0">
                <div
                  className="d-flex flex-shrink-0 align-items-center justify-content-center bg-primary mr-3"
                  style={{ height: 100, width: 100 }}
                >
                  <FaServicestack
                    style={{ height: 50, width: 50, color: "white" }}
                  />{" "}
                </div>
                <div className="d-flex flex-column">
                  <h5 className="">Best Services</h5>
                  <p className="m-0">
                    Magna sit magna dolor duo dolor labore rebum amet elitr est
                    diam sea
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="d-flex mb-4 mb-lg-0">
                <div
                  className="d-flex flex-shrink-0 align-items-center justify-content-center bg-primary mr-3"
                  style={{ height: 100, width: 100 }}
                >
                  <BiWorld
                    style={{ height: 50, width: 50, color: "white" }}
                  />{" "}
                </div>
                <div className="d-flex flex-column">
                  <h5 className="">Worldwide Coverage</h5>
                  <p className="m-0">
                    Magna sit magna dolor duo dolor labore rebum amet elitr est
                    diam sea
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Feature End */}
      {/* Registration Start */}
      {/* <div
        className="container-fluid bg-registration py-5 d-none"
        style={{ margin: "90px 0" }}
      >
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-7 mb-5 mb-lg-0">
              <div className="mb-4">
                <h6
                  className="text-primary text-uppercase"
                  style={{ letterSpacing: 5 }}
                >
                  Mega Offer
                </h6>
                <h1 className="text-white">
                  <span className="text-primary">30% OFF</span> For Honeymoon
                </h1>
              </div>
              <p className="text-white">
                Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo
                dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo.
                Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est
                dolor
              </p>
              <ul className="list-inline text-white m-0">
                <li className="py-2">
                  <i className="fa fa-check text-primary mr-3" />
                  Labore eos amet dolor amet diam
                </li>
                <li className="py-2">
                  <i className="fa fa-check text-primary mr-3" />
                  Etsea et sit dolor amet ipsum
                </li>
                <li className="py-2">
                  <i className="fa fa-check text-primary mr-3" />
                  Diam dolor diam elitripsum vero.
                </li>
              </ul>
            </div>

            <Enquiry onSubmit={onSubmit} />
          </div>
        </div>
      </div> */}
      {/* Registration End */}

      {/* Packages Start */}
      <div
        className="container-fluid py-5"
        id="package"
        style={{
          background: "linear-gradient(135deg, #f8fffe 0%, #f0faf4 100%)",
        }}
      >
        <div className="container pt-5 pb-3">
          {/* Section Header */}
          <div className="text-center mb-5">
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
              Our Packages
            </span>
            <h1
              style={{
                fontSize: "2.2rem",
                fontWeight: "800",
                color: "#1a202c",
                marginBottom: "12px",
              }}
            >
              Perfect Tour Packages
            </h1>
            <p
              style={{
                color: "#64748b",
                fontSize: "15px",
                maxWidth: "500px",
                margin: "0 auto",
              }}
            >
              Discover handpicked destinations at unbeatable prices — tailored
              for every kind of traveler.
            </p>
          </div>

          <div className="row">
            {Packagedata.data?.map((item, index) => (
              <div className="col-lg-4 col-md-6 mb-4" key={index}>
                <div className="package-card">
                  {/* Image Section */}
                  <div className="package-image-wrap">
                    <PackageImageModal
                      src={`https://${item.image?.slice(7)}`}
                      alt={item.name}
                    />
                    {/* Discount Badge */}
                    <div className="package-badge package-badge-discount">
                      🏷️ {item.discount}% OFF
                    </div>
                    {/* Package Name Tag */}
                    <div className="package-badge package-badge-name">
                      {item.name}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="package-content">
                    {/* Meta Info */}
                    <div className="package-meta">
                      <div className="package-meta-item">
                        <span className="package-meta-icon">📍</span>
                        <span>{item.place}</span>
                      </div>
                      <div className="package-meta-item">
                        <span className="package-meta-icon">🗓️</span>
                        <span>{item.duration}</span>
                      </div>
                      <div className="package-meta-item">
                        <span className="package-meta-icon">👥</span>
                        <span>{item.persons}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="package-description">{item.description}</p>

                    {/* Price + CTA */}
                    <div className="package-footer">
                      <div>
                        <p className="package-price-label">Starting from</p>
                        <p className="package-price">₹{item.price}</p>
                      </div>

                      <a href="#booking" className="package-cta">
                        <i className="fa-brands fa-whatsapp package-cta-icon" />
                        Enquire Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Packages End */}

      {/* Destination Start */}
      <div className="container-fluid py-5" id="destination.">
        <div className="container pt-5 pb-3">
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
              Destination
            </span>

            <h1>Explore Top Destination</h1>
          </div>
          <div className="row g-4">
            {Gallerydata.data?.map((item, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="destination-item position-relative overflow-hidden">
                  <img
                    className="img-fluid"
                    src={`https://${item.image.slice(7)}`}
                    alt={item.description}
                  />

                  <a
                    className="destination-overlay text-white text-decoration-none"
                    href=""
                  >
                    <h5 className="text-white">{item.description}</h5>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Destination Start */}
      {/* Service Start */}
      <div className="container-fluid py-5" id="services">
        <div className="container pt-5 pb-3">
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
              Our Services
            </span>
            <h1>Tours &amp; Travel Services</h1>
          </div>
          <div className="row">
            {Servicedata.data?.map((item, index) => (
              <div key={index} className="col-lg-4 col-md-6 mb-4">
                <div className="service-item bg-white text-center mb-2 py-5 px-4">
                  <img
                    src="/service.jpg"
                    alt="service_logo"
                    className="w-25 mb-4 img-fluid"
                  />
                  <h5 className="mb-2">{item.name}</h5>
                  <p className="m-0">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Service End */}
      {/* Team Start */}
      <div className="container-fluid py-5">
        <div className="container pt-5 pb-3">
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
              Guides
            </span>
            <h1>Our Travel Guides</h1>
          </div>
          <div className="row justify-content-center">
            {Staffdata.data?.map((item, index) => (
              <div className="col-lg-3 col-md-4 col-sm-6 pb-2" key={index}>
                <div className="team-item bg-white mb-4">
                  <div className="team-img position-relative overflow-hidden">
                    <img
                      className="img-fluid w-100"
                      src={`https://${item.avatar.slice(7)}`}
                      alt="avatar"
                    />
                    <div className="team-social">
                      <a className="btn btn-outline-primary btn-square" href="">
                        <FaTwitter />
                      </a>
                      <a className="btn btn-outline-primary btn-square" href="">
                        <FaInstagram />
                      </a>
                      <a className="btn btn-outline-primary btn-square" href="">
                        <FaFacebookF />
                      </a>
                    </div>
                  </div>
                  <div className="text-center py-4">
                    <h5 className="text-truncate">{item.name}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Team End */}

      {/* Activities Start */}
      <ActivitiesSection Activitydata={Activitydata} />
      {/* Activities End */}

      {/* Contact Start */}

      <ContactFrom handleSubmit={handleSubmit} />
      {/* Contact End */}

      {/* Contact Start */}
      <div className="container-fluid py-5 d-none">
        <div className="container py-5">
          <div className="text-center mb-3 pb-3">
            <h6
              className="text-primary text-uppercase"
              style={{ letterSpacing: 5 }}
            >
              Booking{" "}
            </h6>
            <h1>For Booking Fill all the details</h1>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10 bg-dark p-5">
              <div className="contact-form bg-white" style={{ padding: 30 }}>
                <div id="success" />
                <form
                  name="sentMessage"
                  id="contactForm"
                  noValidate="novalidate"
                >
                  <div className="form-row">
                    <div className="control-group col-sm-6">
                      <input
                        type="text"
                        className="form-control p-4"
                        id="name"
                        placeholder="Your Name"
                        required="required"
                        data-validation-required-message="Please enter your name"
                      />
                      <p className="help-block text-danger" />
                    </div>
                    <div className="control-group col-sm-6">
                      <input
                        type="email"
                        className="form-control p-4"
                        id="email"
                        placeholder="Your Email"
                        required="required"
                        data-validation-required-message="Please enter your email"
                      />
                      <p className="help-block text-danger" />
                    </div>
                  </div>
                  <div className="control-group">
                    <input
                      type="text"
                      className="form-control p-4"
                      id="subject"
                      placeholder="Subject"
                      required="required"
                      data-validation-required-message="Please enter a subject"
                    />
                    <p className="help-block text-danger" />
                  </div>
                  <div className="control-group">
                    <input
                      type="text"
                      className="form-control p-4"
                      id="subject"
                      placeholder="Subject"
                      required="required"
                      data-validation-required-message="Please enter a subject"
                    />
                    <p className="help-block text-danger" />
                  </div>
                  <div className="control-group">
                    <input
                      type="text"
                      className="form-control p-4"
                      id="subject"
                      placeholder="Subject"
                      required="required"
                      data-validation-required-message="Please enter a subject"
                    />
                    <p className="help-block text-danger" />
                  </div>
                  <div className="control-group">
                    <input
                      type="text"
                      className="form-control p-4"
                      id="subject"
                      placeholder="Subject"
                      required="required"
                      data-validation-required-message="Please enter a subject"
                    />
                    <p className="help-block text-danger" />
                  </div>

                  <div className="text-center">
                    <button
                      className="btn btn-primary py-3 px-4"
                      type="submit"
                      id="sendMessageButton"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact End */}

      {/* Bank Details Start */}
      <div
        className="container-fluid py-5"
        id="bank"
        style={{
          background: "linear-gradient(135deg, #f8fffe 0%, #f0faf4 100%)",
        }}
      >
        <div className="container">
          <div className="text-center mb-5">
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
              Payment Info
            </span>
            <h1
              style={{
                fontSize: "2.2rem",
                fontWeight: "800",
                color: "#1a202c",
              }}
            >
              Bank Details
            </h1>
            <p style={{ color: "#64748b", fontSize: "15px" }}>
              Scan QR or use bank details to make your payment securely.
            </p>
          </div>

          {Bankdata.data?.map((bank, index) => (
            <div
              key={index}
              style={{
                background: "#fff",
                borderRadius: "20px",
                boxShadow: "0 8px 40px rgba(0,0,0,0.08)",
                overflow: "hidden",
                maxWidth: "860px",
                margin: "0 auto 40px auto",
              }}
            >
              <div className="row no-gutters">
                {/* QR Side */}
                <div
                  className="col-md-4 d-flex flex-column align-items-center justify-content-center"
                  style={{
                    background:
                      "linear-gradient(160deg, #16a34a 0%, #22c55e 100%)",
                    padding: "40px 24px",
                  }}
                >
                  <div
                    style={{
                      background: "#fff",
                      borderRadius: "16px",
                      padding: "14px",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
                      marginBottom: "16px",
                    }}
                  >
                    <img
                      src={bank.qr}
                      style={{
                        height: 160,
                        width: 160,
                        display: "block",
                        borderRadius: "8px",
                      }}
                      alt="QR Code"
                    />
                  </div>
                  <p
                    style={{
                      color: "#fff",
                      fontSize: "13px",
                      fontWeight: "600",
                      margin: "0 0 4px 0",
                    }}
                  >
                    Scan to Pay
                  </p>
                  {bank.upi && (
                    <span
                      style={{
                        background: "rgba(255,255,255,0.2)",
                        color: "#fff",
                        fontSize: "12px",
                        padding: "4px 14px",
                        borderRadius: "20px",
                        fontWeight: "600",
                        marginTop: "6px",
                      }}
                    >
                      📱 {bank.upi}
                    </span>
                  )}
                </div>

                {/* Details Side */}
                <div className="col-md-8" style={{ padding: "36px 36px" }}>
                  <div style={{ marginBottom: "20px" }}>
                    <span
                      style={{
                        background: "#f0fdf4",
                        color: "#16a34a",
                        fontSize: "11px",
                        fontWeight: "700",
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                        padding: "4px 14px",
                        borderRadius: "12px",
                      }}
                    >
                      🏦 {bank.name}
                    </span>
                  </div>

                  <h4
                    style={{
                      fontWeight: "700",
                      color: "#1a202c",
                      marginBottom: "24px",
                    }}
                  >
                    {bank.holderName}
                  </h4>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "14px",
                    }}
                  >
                    {[
                      {
                        label: "Account Number",
                        value: bank.account,
                        icon: "💳",
                      },
                      { label: "IFSC Code", value: bank.ifsc, icon: "🔑" },
                      { label: "Branch", value: bank.branch, icon: "📍" },
                      { label: "Bank Name", value: bank.name, icon: "🏦" },
                    ].map((row, i) => (
                      <div
                        key={i}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "14px",
                          background: "#f8fafc",
                          borderRadius: "10px",
                          padding: "12px 16px",
                        }}
                      >
                        <span style={{ fontSize: "18px", flexShrink: 0 }}>
                          {row.icon}
                        </span>
                        <div style={{ minWidth: 0 }}>
                          <p
                            style={{
                              margin: 0,
                              fontSize: "11px",
                              color: "#94a3b8",
                              fontWeight: "600",
                              textTransform: "uppercase",
                              letterSpacing: "0.5px",
                            }}
                          >
                            {row.label}
                          </p>
                          <p
                            style={{
                              margin: 0,
                              fontSize: "15px",
                              fontWeight: "700",
                              color: "#1e293b",
                            }}
                          >
                            {row.value}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div
                    style={{
                      marginTop: "24px",
                      padding: "12px 16px",
                      background: "#fffbeb",
                      borderRadius: "10px",
                      borderLeft: "4px solid #f59e0b",
                      fontSize: "13px",
                      color: "#92400e",
                    }}
                  >
                    ⚠️ Please share your payment screenshot after transfer for
                    faster confirmation.
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Bank Details End */}

      {/* Footer Start */}
      <div
        className="container-fluid bg-dark text-white-50 py-5 px-sm-3 px-lg-5"
        style={{ marginTop: 90 }}
      >
        <div className="row pt-5">
          <div className="col-lg-5 col-md-6 mb-5">
            <a href="" className="navbar-brand text-light">
              <h5
                className="text-white text-uppercase mb-4"
                style={{ letterSpacing: 5 }}
              >
                {Officedata?.data?.name}
              </h5>{" "}
            </a>
            <p>{`${Aboutdata?.data?.description.slice(0, 200)}............`}</p>

            <h6
              className="text-white text-uppercase mt-4 mb-3"
              style={{ letterSpacing: 5 }}
            >
              Follow Us
            </h6>
            <div className="d-flex justify-content-start">
              <a className="btn btn-outline-primary btn-square mr-2" href="#">
                <FaFacebookF />{" "}
              </a>
              <a className="btn btn-outline-primary btn-square mr-2" href="#">
                {" "}
                <FaInstagram />{" "}
              </a>
              <a className="btn btn-outline-primary btn-square mr-2" href="#">
                <FaTwitter />{" "}
              </a>
              <a className="btn btn-outline-primary btn-square" href="#">
                {" "}
                <FaYoutube />{" "}
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-5">
            <h5
              className="text-white text-uppercase mb-4"
              style={{ letterSpacing: 5 }}
            >
              Our Servicess..
            </h5>
            {Servicedata.data?.map((item, index) => (
              <p key={index}>
                <i className="fa fa-map-marker-alt mr-2" />
                {item.name}{" "}
              </p>
            ))}
          </div>

          <div className="col-lg-3 col-md-6 mb-5">
            <h5
              className="text-white text-uppercase mb-4"
              style={{ letterSpacing: 5 }}
            >
              Contact Us
            </h5>
            <p>
              <i className="fa fa-map-marker-alt mr-2" />
              {Officedata?.data?.address}{" "}
            </p>
            <p>
              <i className="fa fa-phone-alt mr-2" />
              {Officedata?.data?.mobile}{" "}
            </p>
            <p>
              <i className="fa fa-envelope mr-2" />
              {Officedata?.data?.email}{" "}
            </p>
          </div>
        </div>
      </div>
      <div
        className="container-fluid bg-dark text-white border-top py-4 px-sm-3 px-md-5"
        style={{ borderColor: "rgba(256, 256, 256, .1) !important" }}
      >
        <div className="row">
          <div className="col-lg-6 text-center text-md-left mb-3 mb-md-0">
            <p className="m-0 text-white-50">
              Copyright © <a href="#">Amp Technoogy</a>. All Rights Reserved.
            </p>
          </div>
          {/*   <div class="col-lg-6 text-center text-md-right">
            <p class="m-0 text-white-50">Designed by <a>
            </p>
        </div>*/}
        </div>
      </div>
      {/* Footer End */}
      {/* Back to Top */}
      <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
        <i className="fa fa-angle-double-up" />
      </a>
      {/* JavaScript Libraries */}
      {/* Contact Javascript File */}
      {/* Template Javascript */}
    </>
  );
}
