"use client";

import { useState, useEffect, useCallback } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaWhatsapp,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Navbar({ officeData, socialData }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { href: "#home", label: "Home", id: "home" },
    { href: "#about", label: "About", id: "about" },
    { href: "#package", label: "Packages", id: "package" },
    { href: "#destination", label: "Gallery", id: "destination" },
    { href: "#activities", label: "Activities", id: "activities" },
    { href: "#services", label: "Services", id: "services" },
    { href: "#contact", label: "Contact", id: "contact" },
  ];

  const socials = [
    { icon: <FaFacebookF />, href: socialData?.facebook },
    { icon: <FaInstagram />, href: socialData?.instagram },
    { icon: <FaYoutube />, href: socialData?.youtube },
    { icon: <FaTwitter />, href: socialData?.twitter },
  ].filter((s) => s.href);

  const detectActiveSection = useCallback(() => {
    const sectionIds = navLinks.map((l) => l.id);
    const scrollY = window.scrollY + 100;
    let current = "home";
    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el && el.offsetTop <= scrollY) {
        current = id;
      }
    }
    setActiveSection(current);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.id);

    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          rootMargin: "-40% 0px -55% 0px", // viewport এর মাঝামাঝি section active হবে
          threshold: 0,
        },
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  // ✅ Nav click — smooth scroll করে সেই section এ যাবে
  const handleNavClick = (e, href, id) => {
    e.preventDefault();
    setMobileOpen(false);
    setActiveSection(id);

    setTimeout(
      () => {
        if (id === "home") {
          window.scrollTo({ top: 0, behavior: "smooth" });
          return;
        }
        const el = document.getElementById(id);
        if (el) {
          const offset = 70; // navbar height
          const top = el.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: "smooth" });
        }
      },
      mobileOpen ? 250 : 0,
    );
  };

  // Active link style helper
  const getLinkStyle = (id) => ({
    padding: "7px 12px",
    fontSize: "13.5px",
    fontWeight: "600",
    color: activeSection === id ? "#16a34a" : "#334155",
    textDecoration: "none",
    borderRadius: "8px",
    background: activeSection === id ? "#f0fdf4" : "transparent",
    transition: "all 0.2s ease",
    whiteSpace: "nowrap",
    position: "relative",
  });

  const getMobileLinkStyle = (id) => ({
    padding: "11px 16px",
    fontSize: "14px",
    fontWeight: "600",
    color: activeSection === id ? "#16a34a" : "#334155",
    textDecoration: "none",
    borderRadius: "10px",
    background: activeSection === id ? "#f0fdf4" : "transparent",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    transition: "all 0.2s ease",
  });

  const NavContent = ({ isFixed }) => (
    <nav
      style={{
        background: "rgba(255,255,255,0.98)",
        backdropFilter: isFixed ? "blur(12px)" : "none",
        boxShadow: isFixed
          ? "0 4px 30px rgba(0,0,0,0.12)"
          : "0 1px 10px rgba(0,0,0,0.06)",
        position: isFixed ? "fixed" : "relative",
        top: 0,
        left: 0,
        right: 0,
        zIndex: isFixed ? 9999 : 100,
        transform: isFixed
          ? scrolled
            ? "translateY(0)"
            : "translateY(-110%)"
          : "none",
        transition: isFixed ? "transform 0.4s ease" : "none",
      }}
    >
      {/* Top row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: isFixed ? "8px 20px" : "12px 20px",
        }}
      >
        {/* Brand */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home", "home")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
            flexShrink: 0,
          }}
        >
          <img
            src="/img/sumiicon.jpeg"
            alt="Sumi Travel Logo"
            style={{
              width: "52px",
              height: "52px",
              borderRadius: "50%",
              objectFit: "cover",
              boxShadow: "0 2px 10px rgba(22,163,74,0.25)",
              flexShrink: 0,
            }}
          />
          <div style={{ lineHeight: "1.2" }}>
            <div
              style={{ fontSize: "17px", fontWeight: "700", color: "#198754" }}
            >
              Sumi Travels
            </div>
            <div
              style={{
                fontSize: "10px",
                color: "#6c757d",
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}
            >
              Explore the world
            </div>
          </div>
        </a>

        {/* Desktop nav — center */}
        <div
          className="desktop-nav"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2px",
            flex: 1,
            justifyContent: "center",
          }}
        >
          {navLinks.map(({ href, label, id }) => (
            <a
              key={id}
              href={href}
              onClick={(e) => handleNavClick(e, href, id)}
              style={getLinkStyle(id)}
              onMouseEnter={(e) => {
                if (activeSection !== id) {
                  e.currentTarget.style.color = "#16a34a";
                  e.currentTarget.style.background = "#f0fdf4";
                }
              }}
              onMouseLeave={(e) => {
                if (activeSection !== id) {
                  e.currentTarget.style.color = "#334155";
                  e.currentTarget.style.background = "transparent";
                }
              }}
            >
              {label}
              {/* ✅ Active underline indicator */}
              {activeSection === id && (
                <span
                  style={{
                    position: "absolute",
                    bottom: "2px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "20px",
                    height: "2px",
                    borderRadius: "2px",
                    background: "#16a34a",
                    display: "block",
                  }}
                />
              )}
            </a>
          ))}
        </div>

        {/* Desktop right */}
        <div
          className="desktop-right"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            flexShrink: 0,
          }}
        >
          {socials.length > 0 && (
            <div style={{ display: "flex", gap: "6px" }}>
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
                    border: "1px solid #e2e8f0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#475569",
                    fontSize: "12px",
                    textDecoration: "none",
                    transition: "all 0.2s ease",
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

          <div
            style={{ width: "1px", height: "28px", background: "#e2e8f0" }}
          />

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
            {officeData?.whatsapp && (
              <a
                href={`https://wa.me/91${officeData.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "13px",
                  fontWeight: "600",
                  color: "#15803d",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
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
                +91 {officeData.whatsapp}
              </a>
            )}
            {officeData?.whatsapp && officeData?.email && (
              <div
                style={{ width: "1px", height: "20px", background: "#86efac" }}
              />
            )}
            {officeData?.email && (
              <a
                href={`mailto:${officeData.email}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "13px",
                  fontWeight: "600",
                  color: "#15803d",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
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
                {officeData.email}
              </a>
            )}
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          className="mobile-toggle"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "8px",
            borderRadius: "8px",
            color: "#198754",
            fontSize: "22px",
            display: "none",
            alignItems: "center",
            justifyContent: "center",
          }}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="mobile-menu"
        style={{
          display: mobileOpen ? "flex" : "none",
          flexDirection: "column",
          background: "#fff",
          borderTop: "2px solid #dcfce7",
          padding: "12px 16px 16px",
          gap: "4px",
          boxShadow: "0 8px 24px rgba(22,163,74,0.1)",
        }}
      >
        {navLinks.map(({ href, label, id }) => (
          <a
            key={id}
            href={href}
            onClick={(e) => handleNavClick(e, href, id)}
            style={getMobileLinkStyle(id)}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: activeSection === id ? "#16a34a" : "#cbd5e1",
                flexShrink: 0,
                transition: "background 0.2s",
              }}
            />
            {label}
            {activeSection === id && (
              <span
                style={{
                  marginLeft: "auto",
                  fontSize: "11px",
                  fontWeight: "700",
                  color: "#16a34a",
                  background: "#f0fdf4",
                  padding: "2px 8px",
                  borderRadius: "10px",
                }}
              >
                ●
              </span>
            )}
          </a>
        ))}

        {/* Mobile contact */}
        <div
          style={{
            marginTop: "8px",
            padding: "12px 16px",
            borderRadius: "12px",
            background: "linear-gradient(135deg, #f0fdf4, #dcfce7)",
            border: "1.5px solid #bbf7d0",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          {officeData?.whatsapp && (
            <a
              href={`https://wa.me/91${officeData.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "13px",
                fontWeight: "600",
                color: "#15803d",
                textDecoration: "none",
              }}
            >
              <span
                style={{
                  width: "28px",
                  height: "28px",
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
              +91 {officeData.whatsapp}
            </a>
          )}
          {officeData?.email && (
            <a
              href={`mailto:${officeData.email}`}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "13px",
                fontWeight: "600",
                color: "#15803d",
                textDecoration: "none",
              }}
            >
              <span
                style={{
                  width: "28px",
                  height: "28px",
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
              {officeData.email}
            </a>
          )}
          {socials.length > 0 && (
            <div
              style={{
                display: "flex",
                gap: "8px",
                paddingTop: "6px",
                borderTop: "1px solid #bbf7d0",
                flexWrap: "wrap",
              }}
            >
              {socials.map(({ icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    background: "#fff",
                    border: "1.5px solid #bbf7d0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#16a34a",
                    fontSize: "13px",
                    textDecoration: "none",
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 991px) {
          .desktop-nav   { display: none !important; }
          .desktop-right { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
        @media (min-width: 992px) {
          .mobile-menu   { display: none !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </nav>
  );

  return (
    <>
      <NavContent isFixed={false} />
      <NavContent isFixed={true} />
    </>
  );
}
