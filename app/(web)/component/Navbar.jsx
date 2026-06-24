"use client";

import { useState, useEffect, useRef } from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

export default function Navbar({ officeData, socialData }) {
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

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
  ];

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
          <span style={{ fontSize: "17px", fontWeight: "600", color: "#198754" }}>
            Sumi Travel
          </span>
          <span style={{ fontSize: "11px", color: "#6c757d", letterSpacing: "0.8px", textTransform: "uppercase" }}>
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
            
              <a key={label}
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

        {/* Social Icons */}
        <div className="d-flex align-items-center gap-2 mt-2 mt-lg-0">
          {socials.map(({ icon, href }, i) => (
            
              <a key={i}
              href={href || "#"}
              target="_blank"
              rel="noreferrer"
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                background: "#f1f5f9",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#475569",
                fontSize: "13px",
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
      </div>
    </>
  );

  return (
    <>
      {/* ── 1. Static navbar — সবসময় page top এ দেখায় ── */}
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

      {/* ── 2. Fixed navbar — 400px scroll এর পর slide down ── */}
      <nav
        ref={navRef}
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
          // ← smooth slide animation
          transform: scrolled ? "translateY(0)" : "translateY(-110%)",
          transition: "transform 0.4s ease",
        }}
      >
        <NavContent />
      </nav>
    </>
  );
}