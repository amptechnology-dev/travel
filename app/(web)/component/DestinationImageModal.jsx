"use client";
import { createContext, useContext, useState, useEffect, useCallback } from "react";

const DestModalContext = createContext(null);

export function DestinationModalProvider({ children }) {
  const [data, setData] = useState(null); // { src, caption }
  const [visible, setVisible] = useState(false);

  const openModal = useCallback((src, caption) => {
    setData({ src, caption });
    requestAnimationFrame(() => setVisible(true));
  }, []);

  const closeModal = useCallback(() => {
    setVisible(false);
    setTimeout(() => setData(null), 200);
  }, []);

  useEffect(() => {
    if (!data) return;
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
  }, [data, closeModal]);

  return (
    <DestModalContext.Provider value={{ openModal }}>
      {children}

      {data && (
        <div
          onClick={closeModal}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.85)",
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
              position: "relative",
              maxWidth: "90vw",
              maxHeight: "90vh",
              transform: visible ? "scale(1)" : "scale(0.95)",
              opacity: visible ? 1 : 0,
              transition: "transform 0.2s ease, opacity 0.2s ease",
            }}
          >
            <button
              onClick={closeModal}
              style={{
                position: "absolute",
                top: -16,
                right: -16,
                background: "#fff",
                border: "none",
                borderRadius: "50%",
                width: 36,
                height: 36,
                fontSize: 18,
                cursor: "pointer",
                boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
                zIndex: 2,
              }}
            >
              ✕
            </button>

            <img
              src={data.src}
              alt={data.caption || ""}
              style={{
                maxWidth: "90vw",
                maxHeight: "80vh",
                display: "block",
                borderRadius: "12px",
                objectFit: "contain",
              }}
            />

            {data.caption && (
              <p
                style={{
                  color: "#fff",
                  textAlign: "center",
                  marginTop: "12px",
                  fontSize: "16px",
                  fontWeight: 600,
                }}
              >
                {data.caption}
              </p>
            )}
          </div>
        </div>
      )}
    </DestModalContext.Provider>
  );
}

export function DestinationImageTrigger({ src, caption }) {
  const { openModal } = useContext(DestModalContext);
  return (
    <img
      className="img-fluid"
      src={src}
      alt={caption || ""}
      onClick={() => openModal(src, caption)}
      style={{ cursor: "pointer" }}
    />
  );
}