"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

export default function Navbar({ officeData, socialData }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#package", label: "Packages" },
    { href: "#destination", label: "Gallery" },
    { href: "#acctivities", label: "Activities" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      {/* Topbar */}
      {!scrolled && (
        <div
          className="container-fluid d-none d-lg-block"
          style={{
            background: "#0f172a",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div className="container-fluid px-5">
            <div className="row align-items-center py-2">
              <div className="col-lg-6 d-flex align-items-center gap-3">
                <small
                  style={{ color: "rgba(255,255,255,0.6)", fontSize: "12px" }}
                >
                  <i
                    className="fa fa-envelope mr-2"
                    style={{ color: "#22c55e" }}
                  />
                  {officeData.email}
                </small>
                <span style={{ color: "rgba(255,255,255,0.2)" }}>|</span>
                <small
                  style={{ color: "rgba(255,255,255,0.6)", fontSize: "12px" }}
                >
                  <i
                    className="fa fa-phone-alt mr-2"
                    style={{ color: "#22c55e" }}
                  />
                  {officeData.mobile}
                </small>
              </div>
              <div className="col-lg-6 d-flex justify-content-end align-items-center gap-1">
                {[
                  { icon: <FaFacebookF />, href: socialData?.facebook },
                  { icon: <FaInstagram />, href: socialData?.instagram },
                  { icon: <FaYoutube />, href: socialData?.youtube },
                  { icon: <FaTwitter />, href: socialData?.twitter },
                ].map(({ icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    style={{
                      width: "28px",
                      height: "28px",
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "rgba(255,255,255,0.5)",
                      fontSize: "11px",
                      transition: "all 0.2s ease",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#22c55e";
                      e.currentTarget.style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background =
                        "rgba(255,255,255,0.08)";
                      e.currentTarget.style.color = "rgba(255,255,255,0.5)";
                    }}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navbar */}
      <div
        style={{
          position: scrolled ? "fixed" : "relative",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          transition: "all 0.3s ease",
        }}
      >
        <nav
          className="navbar navbar-expand-lg navbar-light px-4 px-lg-5"
          style={{
            background: scrolled
              ? "rgba(255,255,255,0.98)"
              : "rgba(255,255,255,1)",
            backdropFilter: "blur(12px)",
            boxShadow: scrolled
              ? "0 4px 30px rgba(0,0,0,0.12)"
              : "0 1px 10px rgba(0,0,0,0.06)",
            padding: scrolled ? "8px 0" : "12px 0",
            transition: "all 0.3s ease",
          }}
        >
          {/* Brand */}
          <a href="" className="navbar-brand d-flex align-items-center gap-2">
            <img
              src="/img/sumiicon.jpeg"
              alt="Sumi Travel Logo"
              style={{
                width: "80px",
                height: "42px",
                borderRadius: "8px",
                objectFit: "contain",
                objectPosition: "center",
                border: "2px solid #198754",
                backgroundColor: "#fff",
              }}
            />
            <div className="d-flex flex-column" style={{ lineHeight: "1.2" }}>
              <span
                style={{
                  fontSize: "17px",
                  fontWeight: "600",
                  color: "#198754",
                  letterSpacing: "0.3px",
                }}
              >
                Sumi Travel
              </span>
              <span
                style={{
                  fontSize: "11px",
                  color: "#6c757d",
                  letterSpacing: "0.8px",
                  textTransform: "uppercase",
                }}
              >
                Explore the world
              </span>
            </div>
          </a>

          {/* Toggler */}
          <button
            type="button"
            className="navbar-toggler border-0"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            style={{ outline: "none", boxShadow: "none" }}
          >
            <span className="navbar-toggler-icon" />
          </button>

          {/* Nav Links */}
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav mx-auto">
              {navLinks.map(({ href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="nav-link px-3"
                  style={{
                    fontSize: "13.5px",
                    fontWeight: "600",
                    color: "#334155",
                    letterSpacing: "0.4px",
                    position: "relative",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#16a34a")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#334155")
                  }
                >
                  {label}
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="d-flex align-items-center gap-2 mt-2 mt-lg-0">
              <a
                href={`https://api.whatsapp.com/send?phone=${officeData.whatsapp}&text=hi%20`}
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <button
                  type="button"
                  className="btn btn-sm rounded-pill"
                  style={{
                    fontSize: "12.5px",
                    fontWeight: "700",
                    padding: "7px 18px",
                    background: "linear-gradient(135deg, #16a34a, #22c55e)",
                    color: "#fff",
                    border: "none",
                    boxShadow: "0 4px 14px rgba(22,163,74,0.35)",
                    transition: "all 0.2s ease",
                    letterSpacing: "0.3px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow =
                      "0 6px 20px rgba(22,163,74,0.45)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 14px rgba(22,163,74,0.35)";
                  }}
                >
                  <i className="fa-brands fa-whatsapp mr-1" />
                  WhatsApp
                </button>
              </a>

              <Link href="/login" style={{ textDecoration: "none" }}>
                <button
                  type="button"
                  className="btn btn-sm rounded-pill"
                  style={{
                    fontSize: "12.5px",
                    fontWeight: "700",
                    padding: "6px 18px",
                    background: "transparent",
                    color: "#16a34a",
                    border: "2px solid #16a34a",
                    transition: "all 0.2s ease",
                    letterSpacing: "0.3px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#16a34a";
                    e.currentTarget.style.color = "#fff";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "#16a34a";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  Login
                </button>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
