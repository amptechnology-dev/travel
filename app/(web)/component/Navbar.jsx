"use client";

import { useState, useEffect, useRef } from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Navbar({ officeData, socialData }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#package", label: "Packages" },
    { href: "#destination", label: "Gallery" },
    { href: "#acctivities", label: "Activities" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
  ];

  const socials = [
    { icon: <FaFacebookF />, href: socialData?.facebook },
    { icon: <FaInstagram />, href: socialData?.instagram },
    { icon: <FaYoutube />, href: socialData?.youtube },
    { icon: <FaTwitter />, href: socialData?.twitter },
  ].filter((s) => s.href);

  const NavContent = () => (
    <>
      {/* Brand */}
      <a href="#home" className="navbar-brand d-flex align-items-center gap-2">
        <img
          src="/img/sumiicon.jpeg"
          alt="Sumi Travel Logo"
          style={{
            width: "80px",
            height: "42px",
            borderRadius: "8px",
            objectFit: "contain",
            border: "2px solid #198754",
            backgroundColor: "#fff",
          }}
        />
        <div className="d-flex flex-column" style={{ lineHeight: "1.2" }}>
          <span style={{ fontSize: "17px", fontWeight: "700", color: "#198754" }}>
            Sumi Travel
          </span>
          <span style={{ fontSize: "10px", color: "#6c757d", letterSpacing: "1px", textTransform: "uppercase" }}>
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

      {/* Nav Links + Right Side */}
      <div className="collapse navbar-collapse" id="navbarCollapse">
        {/* Center Nav Links */}
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
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#16a34a")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#334155")}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Right Side — Social + Contact */}
        <div className="d-flex align-items-center gap-3 mt-2 mt-lg-0">

          {/* Social Icons */}
          {socials.length > 0 && (
            <div className="d-flex align-items-center gap-2">
              {socials.map(({ icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    background: "#f1f5f9",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#475569",
                    fontSize: "12px",
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                    border: "1px solid #e2e8f0",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#16a34a";
                    e.currentTarget.style.color = "#fff";
                    e.currentTarget.style.borderColor = "#16a34a";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#f1f5f9";
                    e.currentTarget.style.color = "#475569";
                    e.currentTarget.style.borderColor = "#e2e8f0";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          )}

          {/* Divider */}
          <div style={{ width: "1px", height: "28px", background: "#e2e8f0" }} />

          {/* WhatsApp + Email contact box */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "6px 14px",
              borderRadius: "10px",
              border: "1.5px solid #bbf7d0",
              background: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)",
              boxShadow: "0 2px 8px rgba(22,163,74,0.08)",
            }}
          >
            {/* WhatsApp */}
            {officeData?.whatsapp && (
              <a
                href={`https://wa.me/91${officeData.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                title={`WhatsApp: +91 ${officeData.whatsapp}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "13px",
                  fontWeight: "600",
                  color: "#15803d",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#16a34a")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#15803d")}
              >
                <span
                  style={{
                    width: "26px",
                    height: "26px",
                    borderRadius: "50%",
                    background: "#22c55e",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <FaWhatsapp style={{ color: "#fff", fontSize: "13px" }} />
                </span>
                <span className="d-none d-xl-inline">+91 {officeData.whatsapp}</span>
              </a>
            )}

            {/* Vertical divider between wa & email */}
            {officeData?.whatsapp && officeData?.email && (
              <div style={{ width: "1px", height: "20px", background: "#86efac" }} />
            )}

            {/* Email */}
            {officeData?.email && (
              <a
                href={`mailto:${officeData.email}`}
                title={officeData.email}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "13px",
                  fontWeight: "600",
                  color: "#15803d",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#16a34a")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#15803d")}
              >
                <span
                  style={{
                    width: "26px",
                    height: "26px",
                    borderRadius: "50%",
                    background: "#16a34a",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <FaEnvelope style={{ color: "#fff", fontSize: "12px" }} />
                </span>
                <span className="d-none d-xl-inline">{officeData.email}</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );

  return (
    <>
      {/* Static navbar */}
      <nav
        className="navbar navbar-expand-lg navbar-light px-4 px-lg-5"
        style={{
          background: "rgba(255,255,255,1)",
          boxShadow: "0 1px 10px rgba(0,0,0,0.06)",
          padding: "12px 0",
          position: "relative",
          zIndex: 100,
        }}
      >
        <NavContent />
      </nav>

      {/* Fixed navbar — 400px scroll এর পর slide down */}
      <nav
        className="navbar navbar-expand-lg navbar-light px-4 px-lg-5"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          background: "rgba(255,255,255,0.98)",
          backdropFilter: "blur(12px)",
          boxShadow: "0 4px 30px rgba(0,0,0,0.12)",
          padding: "8px 0",
          transform: scrolled ? "translateY(0)" : "translateY(-110%)",
          transition: "transform 0.4s ease",
        }}
      >
        <NavContent />
      </nav>
    </>
  );
}