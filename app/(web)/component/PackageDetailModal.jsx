"use client";
import { createContext, useContext, useState, useEffect, useCallback } from "react";

const ModalContext = createContext(null);

// Wrap your Packages section (or the whole page) with this ONCE
export function PackageModalProvider({ children }) {
  const [pkg, setPkg] = useState(null);
  const [visible, setVisible] = useState(false); // controls animation state

  const openModal = useCallback((p) => {
    setPkg(p);
    // mount first, then animate in on next frame (prevents jank)
    requestAnimationFrame(() => setVisible(true));
  }, []);

  const closeModal = useCallback(() => {
    setVisible(false);
    // wait for the closing transition to finish before unmounting
    setTimeout(() => setPkg(null), 200);
  }, []);

  useEffect(() => {
    if (!pkg) return;
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;

    document.body.style.overflow = "hidden";
    if (scrollBarWidth > 0) {
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    }

    const handleEsc = (e) => e.key === "Escape" && closeModal();
    document.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
      document.removeEventListener("keydown", handleEsc);
    };
  }, [pkg, closeModal]);

  return (
    <ModalContext.Provider value={{ openModal }}>
      {children}

      {pkg && (
        <div
          onClick={closeModal}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1050,
            padding: "20px",
            opacity: visible ? 1 : 0,
            transition: "opacity 0.2s ease",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#fff",
              borderRadius: "16px",
              maxWidth: "700px",
              width: "100%",
              maxHeight: "90vh",
              overflowY: "auto",
              position: "relative",
              transform: visible ? "scale(1) translateY(0)" : "scale(0.96) translateY(10px)",
              opacity: visible ? 1 : 0,
              transition: "transform 0.2s ease, opacity 0.2s ease",
            }}
          >
            <button
              onClick={closeModal}
              style={{
                position: "absolute",
                top: 12,
                right: 12,
                background: "#fff",
                border: "none",
                borderRadius: "50%",
                width: 36,
                height: 36,
                fontSize: 18,
                cursor: "pointer",
                boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                zIndex: 2,
              }}
            >
              ✕
            </button>

            {/* Fixed-height image container avoids layout shift while loading */}
            <div
              style={{
                width: "100%",
                height: "280px",
                background: "#f1f5f9",
                borderTopLeftRadius: "16px",
                borderTopRightRadius: "16px",
                overflow: "hidden",
              }}
            >
              {pkg.image && (
                <img
                  src={`https://${pkg.image.slice(7)}`}
                  alt={pkg.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              )}
            </div>

            <div style={{ padding: "24px" }}>
              <h3 style={{ fontWeight: 700, marginBottom: 8 }}>{pkg.name}</h3>

              <div
                style={{
                  display: "flex",
                  gap: "16px",
                  flexWrap: "wrap",
                  marginBottom: 16,
                  fontSize: 14,
                  color: "#475569",
                }}
              >
                <span>📍 {pkg.place}</span>
                <span>🗓️ {pkg.duration}</span>
                <span>👥 {pkg.persons}</span>
              </div>

              <p style={{ color: "#334155", lineHeight: 1.6, marginBottom: 20 }}>
                {pkg.description}
              </p>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderTop: "1px solid #e2e8f0",
                  paddingTop: 16,
                }}
              >
                <div>
                  <p style={{ margin: 0, fontSize: 12, color: "#94a3b8" }}>
                    Starting from
                  </p>
                  <p style={{ margin: 0, fontWeight: 700, fontSize: 20, color: "#16a34a" }}>
                    ₹{pkg.price}
                  </p>
                </div>
                <a
                  href="#booking"
                  className="btn btn-primary"
                  style={{ padding: "10px 24px", borderRadius: "8px" }}
                  onClick={closeModal}
                >
                  Enquire Now
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
}

// Image trigger — opens the shared modal
export function PackageImageTrigger({ pkg }) {
  const { openModal } = useContext(ModalContext);
  return (
    <img
      src={pkg.image ? `https://${pkg.image.slice(7)}` : ""}
      alt={pkg.name}
      onClick={() => openModal(pkg)}
      style={{ cursor: "pointer", width: "100%", height: "100%", objectFit: "cover" }}
    />
  );
}

// "Read More" button — opens the shared modal
export function ReadMoreButton({ pkg }) {
  const { openModal } = useContext(ModalContext);
  return (
    <button
      onClick={() => openModal(pkg)}
      style={{
        background: "none",
        border: "none",
        color: "#16a34a",
        fontWeight: 600,
        fontSize: 13,
        padding: 0,
        marginTop: 4,
        marginBottom: 12,
        cursor: "pointer",
        textDecoration: "underline",
      }}
    >
      Read More
    </button>
  );
}