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
  const res = await fetch(process.env.BACKLINK + "/public/package", {
    headers: {
      "x-api-key": process.env.API_KEY,
      "office-id": process.env.OFFICE,
    },
    cache: "no-store",
  });
  return res.json();
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
      {/* Topbar Start */}
      <div className="container-fluid bg-light pt-3 d-none d-lg-block">
        <div className="container-fluid">
          <div className="row bg-dark">
            <div className="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
              <div className=" mt-3 d-inline-flex align-items-center text-light">
                <p>
                  <i className="fa fa-envelope  mr-2" />
                  {Officedata.data.email}{" "}
                </p>
                <p className="text-body px-3">|</p>
                <p>
                  <i className="fa fa-phone-alt mr-2" />{" "}
                  {Officedata.data.mobile}{" "}
                </p>
              </div>
            </div>
            <div className=" text-light mt-3 col-lg-6 text-center text-lg-right">
              <div className="d-inline-flex align-items-center">
                <a
                  className="text-primary px-3"
                  href={`${Socialdata.data.facebook}`}
                >
                  <FaFacebookF />
                </a>
                <p>{Socialdata.data.facebook}</p>

                <a
                  className="text-primary px-3"
                  href={`${Socialdata.data.instagram}`}
                >
                  <FaInstagram />
                </a>
                <a
                  className="text-primary px-3"
                  href={`${Socialdata.data.youtube}`}
                >
                  <FaYoutube />
                </a>
                <a
                  className="text-primary pl-3"
                  href={`${Socialdata.data.twitter}`}
                >
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}
      {/* Navbar Start */}
      <div className=" mt-3 container-fluid position-relative nav-bar p-0">
        <div
          className="container-fluid position-relative p-0 px-lg-3"
          style={{ zIndex: 9 }}
        >
          <nav className="navbar navbar-expand-lg bg-light navbar-light shadow-lg py-3 py-lg-0 pl-3 pl-lg-5">
            <a href="" className="navbar-brand">
              {Officedata.data.name}
            </a>
            <button
              type="button"
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse justify-content-between px-3"
              id="navbarCollapse"
            >
              <div className="navbar-nav ml-auto py-0">
                <a href="#" className="nav-item nav-link ">
                  Home
                </a>
                <a href="#about" className="nav-item nav-link">
                  About
                </a>
                <a href="#package" className="nav-item nav-link">
                  Tour Packages
                </a>
                <a href="#destination." className="nav-item nav-link">
                  Gallery
                </a>
                <a href="#acctivities." className="nav-item nav-link">
                  Activities
                </a>
                <a href="#services" className="nav-item nav-link">
                  Services
                </a>
                <a href="#contact" className="nav-item nav-link">
                  Contact
                </a>
                <a
                  href={`https://api.whatsapp.com/send?phone=${Officedata.data.whatsapp}&text=hi%20`}
                  className="nav-item nav-link"
                >
                  <button
                    type="button"
                    className=" rounded-pill btn btn-success"
                  >
                    <i className="fa-brands fa-whatsapp" />
                    &nbsp;WhatsApp Enquiry
                  </button>
                </a>

                <a href="/dashboard" className="nav-item nav-link">
                  <button
                    type="button"
                    className=" rounded-pill btn btn-success"
                  >
                    &nbsp;Login
                  </button>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* Navbar End */}
      {/* Carousel Start */}
      <div class="container-fluid p-0">
        <div class="row">
          <div class="col-sm-12">
            {" "}
            <div
              id="header-carousel"
              class="carousel slide"
              data-ride="carousel"
            >
              <img
                src={`${
                  process.env.NEXT_PUBLIC_BACKPUBLIC
                }/${Officedata.data?.banner[0].slice(7)}`}
                className="img-fluid w-100 "
                alt="Responsive image"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Carousel End */}
      {/* Booking Start */}
      <div className="container-fluid booking mt-5 pb-5">
        <Enquiry onSubmit={onSubmit} packages={Packagedata} />
      </div>
      {/* Booking End */}
      {/* About Start */}
      <div className="container-fluid py-5 " id="about">
        <div className="container pt-5">
          <div className="row">
            <div class="h1 text-center pb-5">ABOUT SECTION</div>
            <div className="col-lg-6" style={{ minHeight: 500 }}>
              <div className="position-relative h-100">
                <img
                  className="position-absolute w-100 h-100"
                  src={`${
                    process.env.NEXT_PUBLIC_BACKPUBLIC
                  }/${Aboutdata.data?.image?.slice(7)}`}
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
                <p>abc</p>
                <div className="row mb-4">
                  <div className="col-6">
                    <img
                      className="img-fluid"
                      src={`${
                        process.env.NEXT_PUBLIC_BACKPUBLIC
                      }/${Officedata.data?.banner[1]?.slice(7)}`}
                      alt=""
                    />
                  </div>
                  <div className="col-6">
                    <img
                      className="img-fluid"
                      src={`${
                        process.env.NEXT_PUBLIC_BACKPUBLIC
                      }/${Officedata.data?.banner[2]?.slice(7)}`}
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
                  <BiWorld style={{ height: 50, width: 50, color: "white" }} />{" "}
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
      <div className="container-fluid py-5" id="package">
        <div className="container pt-5 pb-3">
          <div className="text-center mb-3 pb-3">
            <h6
              className="text-primary text-uppercase"
              style={{ letterSpacing: 5 }}
            >
              Packages
            </h6>
            <h1>Pefect Tour Packages</h1>
          </div>
          <div className="row">
            {Packagedata.data?.map((item, index) => {
              return (
                <div className="col-lg-4 col-md-6 mb-4" key={index}>
                  <div className="package-item bg-white mb-2">
                    <img
                      className="img-fluid"
                      src={`${
                        process.env.NEXT_PUBLIC_BACKPUBLIC
                      }/${item.image?.slice(7)}`}
                      alt=""
                    />
                    <p className="mt-2 btn btn-primary">
                      {item.discount}% OFF{" "}
                      <span className="badge badge-light">{item.name}</span>
                    </p>
                    <div className="p-4">
                      <div className="d-flex justify-content-between mb-3">
                        <small className="m-0">
                          <i className="fa fa-map-marker-alt text-primary mr-2" />
                          {item.place}
                        </small>
                        <small className="m-0">
                          <i className="fa fa-calendar-alt text-primary mr-2" />
                          {item.duration}
                        </small>
                        <small className="m-0">
                          <i className="fa fa-user text-primary mr-2" />
                          {item.persons} Persons
                        </small>
                      </div>
                      <p className="fs-5" href="">
                        {item.description}
                      </p>
                      <div className="border-top mt-4 pt-4">
                        <div className="d-flex justify-content-between align-items-center">
                          <p className="mb-0 text-success fs-5 font-weight-bold">
                            ₹ {item.price}{" "}
                          </p>
                          <a
                            className="rounded-pill btn btn-sm btn-success text-white"
                            href="#booking"
                          >
                            <i className="fa-brands fa-whatsapp" /> Enquiry Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Packages End */}
      {/* Destination Start */}
      <div className="container-fluid py-5" id="destination.">
        <div className="container pt-5 pb-3">
          <div className="text-center mb-3 pb-3">
            <h6
              className="text-primary text-uppercase"
              style={{ letterSpacing: 5 }}
            >
              Destination
            </h6>
            <h1>Explore Top Destination</h1>
          </div>
          <div className="row">
            {Gallerydata.data?.map((item, index) => (
              <div key={index} className="col-lg-4 col-md-6 mb-4">
                <div className="destination-item position-relative overflow-hidden mb-2">
                  <img
                    className="img-fluid"
                    src={`${
                      process.env.NEXT_PUBLIC_BACKPUBLIC
                    }/${item.image.slice(7)}`}
                    alt=""
                  />
                  <a
                    className="destination-overlay text-white text-decoration-none"
                    href=""
                  >
                    <h5 className="text-white">{item.description}</h5>
                    <span>100 Cities</span>
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
            <h6
              className="text-primary text-uppercase"
              style={{ letterSpacing: 5 }}
            >
              Our Services
            </h6>
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
            <h6
              className="text-primary text-uppercase"
              style={{ letterSpacing: 5 }}
            >
              Guides
            </h6>
            <h1>Our Travel Guides</h1>
          </div>
          <div className="row">
            {Staffdata.data?.map((item, index) => (
              <div className="col-lg-3 col-md-4 col-sm-6 pb-2" key={index}>
                <div className="team-item bg-white mb-4">
                  <div className="team-img position-relative overflow-hidden">
                    <img
                      className="img-fluid w-100"
                      src={`${
                        process.env.NEXT_PUBLIC_BACKPUBLIC
                      }/${item.avatar.slice(7)}`}
                      alt="avtar"
                    />
                    <div className="team-social">
                      <a className="btn btn-outline-primary btn-square" href="">
                        <FaTwitter />{" "}
                      </a>
                      <a className="btn btn-outline-primary btn-square" href="">
                        <FaInstagram />{" "}
                      </a>
                      <a className="btn btn-outline-primary btn-square" href="">
                        <FaFacebookF />{" "}
                      </a>
                    </div>
                  </div>
                  <div className="text-center py-4">
                    <h5 className="text-truncate">{item.name}</h5>
                    <p className="m-0">Age: {item.age}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Team End */}

      {/* Activities Start */}
      <div className="container-fluid py-5" id="acctivities.">
        <div className="container pt-5 pb-3">
          <div className="text-center mb-3 pb-3">
            <h6
              className="text-primary text-uppercase"
              style={{ letterSpacing: 5 }}
            >
              Activities
            </h6>
            <h1> Our Activities</h1>
          </div>
          <div className="row pb-3">
            {Activitydata.data?.map((item, index) => (
              <div className="col-lg-4 col-md-6 mb-4 pb-2" key={index}>
                <div className="blog-item">
                  <div className="position-relative">
                    <img
                      className="img-fluid w-100"
                      src={`${
                        process.env.NEXT_PUBLIC_BACKPUBLIC
                      }/${item.image.slice(7)}`}
                      alt="event-image"
                    />
                    {/* <div className="blog-date">
                    <h6 className="font-weight-bold mb-n1">New</h6>
                    <small className="text-white text-uppercase">Arive</small>
                  </div> */}
                  </div>
                  <div className="bg-white p-4">
                    <div className="d-flex mb-2">
                      <p className="text-primary text-uppercase text-decoration-none">
                        {item.title}
                      </p>
                    </div>
                    <p className="h5 m-0">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
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
      <div className="row justify-content-center" id="bank">
        <div className="col-lg-10">
          <br /> <br /> <br />
          <h1 className="text-center">Bank Details</h1>
        </div>
      </div>
      <div className="row justify-content-center align-items-center">
        <div className="col-lg-5 text-center">
          <br /> <br /> <br />
          <img
            src="https://img.freepik.com/free-vector/scan-me-qr-code_78370-2915.jpg?w=740&t=st=1715120592~exp=1715121192~hmac=697ed594e8b11ecaa44da8e76888868778a223f38cdfc5244d0080aaae586ac7"
            style={{ hight: 200, width: 200 }}
            className="img-fluid"
            alt="..."
          />
        </div>
        <div className="col-lg-5" style={{ marginLeft: 15 }}>
          {Bankdata.data?.map((bank, index) => (
            <div key={index} style={{ fontSize: 18, color: "black" }}>
              <br /> <br /> <br />
              <p>
                Bank Account No :{" "}
                <span style={{ fontSize: 15 }}>{bank.account}</span>
              </p>
              <p>
                Bank IFSC Code :{" "}
                <span style={{ fontSize: 15 }}>{bank.ifsc}</span>
              </p>
              <p>
                Bank Account Holder Name :{" "}
                <span style={{ fontSize: 15 }}>{bank.holderName}</span>
              </p>
              <p>
                Bank Name : <span style={{ fontSize: 15 }}>{bank.name}</span>
              </p>
              <p>
                Branch Name :{" "}
                <span style={{ fontSize: 15 }}>{bank.branch}</span>
              </p>
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
                {Officedata.data.name}
              </h5>{" "}
            </a>
            <p>{`${Aboutdata.data.description.slice(0, 200)}............`}</p>

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
              {Officedata.data.address}{" "}
            </p>
            <p>
              <i className="fa fa-phone-alt mr-2" />
              {Officedata.data.mobile}{" "}
            </p>
            <p>
              <i className="fa fa-envelope mr-2" />
              {Officedata.data.email}{" "}
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
