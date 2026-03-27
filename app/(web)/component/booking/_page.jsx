<>
  <meta charSet="utf-8" />
  <title>Travel Website</title>
  <meta content="width=device-width, initial-scale=1.0" name="viewport" />
  <meta content="Free HTML Templates" name="keywords" />
  <meta content="Free HTML Templates" name="description" />
  {/* Favicon */}
  <link href="img/favicon.ico" rel="icon" />
  {/* Google Web Fonts */}
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
  {/* Font Awesome */}
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
    integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
    crossOrigin="anonymous"
    referrerPolicy="no-referrer"
  />{" "}
  {/* Libraries Stylesheet */}
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.css"
    integrity="sha512-UTNP5BXLIptsaj5WdKFrkFov94lDx+eBvbKyoe1YAfjeRPC+gT5kyZ10kOHCfNZqEui1sxmqvodNUx3KbuYI/A=="
    crossOrigin="anonymous"
    referrerPolicy="no-referrer"
  />
  {/* Customized Bootstrap Stylesheet */}
  <link href="css/style.css" rel="stylesheet" />
  {/* Topbar Start */}
  <div className="container-fluid bg-light pt-3 d-none d-lg-block">
    <div className="container-fluid">
      <div className="row bg-dark">
        <div className="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
          <div className=" mt-3 d-inline-flex align-items-center text-light">
            <p>
              <i className="fa fa-envelope  mr-2" />
              info@example.com
            </p>
            <p className="text-body px-3">|</p>
            <p>
              <i className="fa fa-phone-alt mr-2" />
              +012 345 6789
            </p>
          </div>
        </div>
        <div className=" text-light mt-3 col-lg-6 text-center text-lg-right">
          <div className="d-inline-flex align-items-center">
            <a className="text-primary px-3" href="">
              <i className="fab fa-facebook-f" />
            </a>
            <a className="text-primary px-3" href="">
              <i className="fab fa-twitter" />
            </a>
            <a className="text-primary px-3" href="">
              <i className="fab fa-linkedin-in" />
            </a>
            <a className="text-primary px-3" href="">
              <i className="fab fa-instagram" />
            </a>
            <a className="text-primary pl-3" href="">
              <i className="fab fa-youtube" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Topbar End */}
  {/* Navbar Start */}
  <div className=" mt-3 container-fluid position-relative nav-bar p-0">
    <div className="container-fluid position-relative p-0 px-lg-3" style={{ zIndex: 9 }}>
      <nav className="navbar navbar-expand-lg bg-light navbar-light shadow-lg py-3 py-lg-0 pl-3 pl-lg-5">
        <a href="" className="navbar-brand">
          <h1 className="m-0 text-primary">
            <span className="text-dark">TRAVEL</span>ER
          </h1>
        </a>
        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse justify-content-between px-3" id="navbarCollapse">
          <div className="navbar-nav ml-auto py-0">
            <a href="index.html" className="nav-item nav-link active">
              Home
            </a>
            <a href="about.html" className="nav-item nav-link">
              About
            </a>
            <a href="package.html" className="nav-item nav-link">
              Tour Packages
            </a>
            <a href="destination.html" className="nav-item nav-link">
              Gallery
            </a>
            <a href="service.html" className="nav-item nav-link">
              Activities
            </a>
            <a href="contact.html" className="nav-item nav-link">
              Contact
            </a>
            <a href="contact.html" className="nav-item nav-link">
              <button type="button" className=" rounded-pill btn btn-success">
                <i className="fa-brands fa-whatsapp" />
                &nbsp;WhatsApp Enquiry
              </button>
            </a>
          </div>
        </div>
      </nav>
    </div>
  </div>
  {/* Navbar End */}
  {/* Header Start */}
  <div className="container-fluid page-header">
    <div className="container">
      <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: 400 }}>
        <h3 className="display-4 text-white text-uppercase">Booking</h3>
        <div className="d-inline-flex text-white">
          <p className="m-0 text-uppercase">
            <a className="text-white" href="">
              Home
            </a>
          </p>
          <i className="fa fa-angle-double-right pt-1 px-3" />
          <p className="m-0 text-uppercase">Booking</p>
        </div>
      </div>
    </div>
  </div>
  {/* Header End */}
  {/* Contact Start */}
  <div className="container-fluid py-5">
    <div className="container py-5">
      <div className="text-center mb-3 pb-3">
        <h6 className="text-primary text-uppercase" style={{ letterSpacing: 5 }}>
          Book Now{" "}
        </h6>
        <h1>Fill All The Details For Booking </h1>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-10 ">
          <div className="contact-form  bg-dark" style={{ padding: 30 }}>
            <div id="success" />
            <form name="sentMessage" id="contactForm" noValidate="novalidate">
              <div className="form-row">
                <div className="control-group col-sm-6">
                  <input type="text" className="form-control p-4" id="name" placeholder="Your Name" required="required" data-validation-required-message="Please enter your name" />
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
              <div className="form-row">
                <div className="control-group col-sm-6">
                  <input
                    type="text"
                    className="form-control p-4"
                    id="name"
                    placeholder="Your Name"
                    required="required"
                    data-validation-required-message="Please enter your Phone Number"
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
                    data-validation-required-message="Please enter Whatsapp Number"
                  />
                  <p className="help-block text-danger" />
                </div>
              </div>
              <div className="form-row">
                <div className="control-group col-sm-6">
                  <select className="custom-select px-4" style={{ height: 47 }}>
                    <option selected="">Select Package </option>
                    <option value={1}>Package 1</option>
                    <option value={2}>Package 2</option>
                    <option value={3}>Package 3</option>
                  </select>
                  <p className="help-block text-danger" />
                </div>
                <div className="control-group col-sm-6">
                  <select className="custom-select px-4" style={{ height: 47 }}>
                    <option selected="">Select Room </option>
                    <option value={1}>Package 1</option>
                    <option value={2}>Package 2</option>
                    <option value={3}>Package 3</option>
                  </select>
                  <p className="help-block text-danger" />
                </div>
                <div className="control-group col-sm-6">
                  <select className="custom-select px-4" style={{ height: 47 }}>
                    <option selected="">Number Of Adult </option>
                    <option value={1}>Package 1</option>
                    <option value={2}>Package 2</option>
                    <option value={3}>Package 3</option>
                  </select>
                  <p className="help-block text-danger" />
                </div>
                <div className="control-group col-sm-6">
                  <select className="custom-select px-4" style={{ height: 47 }}>
                    <option selected="">Number Of Child </option>
                    <option value={1}>Package 1</option>
                    <option value={2}>Package 2</option>
                    <option value={3}>Package 3</option>
                  </select>
                  <p className="help-block text-danger" />
                </div>
                <div className="control-group col-sm-6">
                  <select className="custom-select px-4" style={{ height: 47 }}>
                    <option selected="">Number Of Child </option>
                    <option value={1}>Package 1</option>
                    <option value={2}>Package 2</option>
                    <option value={3}>Package 3</option>
                  </select>
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
              <button className="btn btn-primary py-3 px-4" type="submit" id="sendMessageButton">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <br /> <br /> <br />
          <h1 className="text-center">Bank Details</h1>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-5">
          <br /> <br /> <br />
          <img
            src="https://img.freepik.com/free-vector/scan-me-qr-code_78370-2915.jpg?w=740&t=st=1715120592~exp=1715121192~hmac=697ed594e8b11ecaa44da8e76888868778a223f38cdfc5244d0080aaae586ac7"
            className="img-fluid"
            alt="..."
          />
        </div>
        <div className="col-lg-5">
          <br /> <br /> <br />
          <p>
            Sundarban tour gives maximum enjoyment in the winter but it can refresh the mind in a short period in all seasons. To keep Sundarban tour in our memory we have been
            serving our customers with utmost diligence since 2005 by our experienced guide. Our customers are very happy always with our dedicated behavior towards them and
            availing them such a comfortable and enjoyable sundarban tour at such a low price. Know us more. Our Sundarban tour package is the best to all because of pocket
            friendly within their budget. Our customers say that we are the best West Bengal Tourism forever. We make a Sundarban tour packages itinerary where you can avail best
            value. To make your sundarban tour memorable we have developed many kinds of Sundarban tou
          </p>
        </div>
      </div>
    </div>
  </div>
  {/* Contact End */}
  {/* Footer Start */}
  <div className="container-fluid bg-dark text-white-50 py-5 px-sm-3 px-lg-5" style={{ marginTop: 90 }}>
    <div className="row pt-5">
      <div className="col-lg-3 col-md-6 mb-5">
        <a href="" className="navbar-brand">
          <h1 className="text-primary">
            <span className="text-white">TRAVEL</span>ER
          </h1>
        </a>
        <p>Sed ipsum clita tempor ipsum ipsum amet sit ipsum lorem amet labore rebum lorem ipsum dolor. No sed vero lorem dolor dolor</p>
        <h6 className="text-white text-uppercase mt-4 mb-3" style={{ letterSpacing: 5 }}>
          Follow Us
        </h6>
        <div className="d-flex justify-content-start">
          <a className="btn btn-outline-primary btn-square mr-2" href="#">
            <i className="fab fa-twitter" />
          </a>
          <a className="btn btn-outline-primary btn-square mr-2" href="#">
            <i className="fab fa-facebook-f" />
          </a>
          <a className="btn btn-outline-primary btn-square mr-2" href="#">
            <i className="fab fa-linkedin-in" />
          </a>
          <a className="btn btn-outline-primary btn-square" href="#">
            <i className="fab fa-instagram" />
          </a>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 mb-5">
        <h5 className="text-white text-uppercase mb-4" style={{ letterSpacing: 5 }}>
          Our Services
        </h5>
        <div className="d-flex flex-column justify-content-start">
          <a className="text-white-50 mb-2" href="#">
            <i className="fa fa-angle-right mr-2" />
            About
          </a>
          <a className="text-white-50 mb-2" href="#">
            <i className="fa fa-angle-right mr-2" />
            Destination
          </a>
          <a className="text-white-50 mb-2" href="#">
            <i className="fa fa-angle-right mr-2" />
            Services
          </a>
          <a className="text-white-50 mb-2" href="#">
            <i className="fa fa-angle-right mr-2" />
            Packages
          </a>
          <a className="text-white-50 mb-2" href="#">
            <i className="fa fa-angle-right mr-2" />
            Guides
          </a>
          <a className="text-white-50 mb-2" href="#">
            <i className="fa fa-angle-right mr-2" />
            Testimonial
          </a>
          <a className="text-white-50" href="#">
            <i className="fa fa-angle-right mr-2" />
            Blog
          </a>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 mb-5">
        <h5 className="text-white text-uppercase mb-4" style={{ letterSpacing: 5 }}>
          Usefull Links
        </h5>
        <div className="d-flex flex-column justify-content-start">
          <a className="text-white-50 mb-2" href="#">
            <i className="fa fa-angle-right mr-2" />
            About
          </a>
          <a className="text-white-50 mb-2" href="#">
            <i className="fa fa-angle-right mr-2" />
            Destination
          </a>
          <a className="text-white-50 mb-2" href="#">
            <i className="fa fa-angle-right mr-2" />
            Services
          </a>
          <a className="text-white-50 mb-2" href="#">
            <i className="fa fa-angle-right mr-2" />
            Packages
          </a>
          <a className="text-white-50 mb-2" href="#">
            <i className="fa fa-angle-right mr-2" />
            Guides
          </a>
          <a className="text-white-50 mb-2" href="#">
            <i className="fa fa-angle-right mr-2" />
            Testimonial
          </a>
          <a className="text-white-50" href="#">
            <i className="fa fa-angle-right mr-2" />
            Blog
          </a>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 mb-5">
        <h5 className="text-white text-uppercase mb-4" style={{ letterSpacing: 5 }}>
          Contact Us
        </h5>
        <p>
          <i className="fa fa-map-marker-alt mr-2" />
          123 Street, New York, USA
        </p>
        <p>
          <i className="fa fa-phone-alt mr-2" />
          +012 345 67890
        </p>
        <p>
          <i className="fa fa-envelope mr-2" />
          info@example.com
        </p>
        <h6 className="text-white text-uppercase mt-4 mb-3" style={{ letterSpacing: 5 }}>
          Newsletter
        </h6>
        <div className="w-100">
          <div className="input-group">
            <input type="text" className="form-control border-light" style={{ padding: 25 }} placeholder="Your Email" />
            <div className="input-group-append">
              <button className="btn btn-primary px-3">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid bg-dark text-white border-top py-4 px-sm-3 px-md-5" style={{ borderColor: "rgba(256, 256, 256, .1) !important" }}>
    <div className="row">
      <div className="col-lg-6 text-center text-md-left mb-3 mb-md-0">
        <p className="m-0 text-white-50">
          Copyright © <a href="#">Domain</a>. All Rights Reserved.
        </p>
      </div>
      <div className="col-lg-6 text-center text-md-right">
        <p className="m-0 text-white-50">
          Designed by <a />
        </p>
      </div>
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
</>;
