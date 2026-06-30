"use client";
import { useState, useEffect } from "react";

const ActivitiesSection = ({ Activitydata }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [visible, setVisible] = useState(false);

  const openModal = (item) => {
    setSelectedItem(item);
    requestAnimationFrame(() => setVisible(true));
  };

  const closeModal = () => {
    setVisible(false);
    setTimeout(() => setSelectedItem(null), 200);
  };

  useEffect(() => {
    if (!selectedItem) return;
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
  }, [selectedItem]);

  return (
    <>
      {/* Activities Start */}
      <div className="container-fluid py-5" id="activities">
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
              Activities
            </span>
            <h1>Our Activities</h1>
          </div>

          <div className="row pb-3 justify-content-center">
            {Activitydata.data?.map((item, index) => (
              <div className="col-lg-4 col-md-6 mb-4" key={index}>
                <div className="activity-card h-100">
                  {/* Image */}
                  <div className="activity-img-wrap">
                    <img
                      className="img-fluid w-100"
                      src={`https://${item.image.slice(7)}`}
                      alt={item.title}
                    />
                    <span className="activity-badge">{item.category || "Activity"}</span>
                  </div>

                  {/* Body */}
                  <div className="activity-body">
                    <h5 className="activity-title">{item.title}</h5>
                    <p className="activity-desc">
                      {item.description?.length > 80
                        ? item.description.slice(0, 80) + "..."
                        : item.description}
                    </p>
                    <button
                      className="btn-readmore"
                      onClick={() => openModal(item)}
                    >
                      Read more →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Activities End */}

      {/* Modal */}
      {selectedItem && (
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
              maxWidth: "600px",
              width: "100%",
              maxHeight: "90vh",
              overflowY: "auto",
              position: "relative",
              transform: visible ? "scale(1) translateY(0)" : "scale(0.96) translateY(10px)",
              opacity: visible ? 1 : 0,
              transition: "transform 0.2s ease, opacity 0.2s ease",
            }}
          >
            {/* Close button - fixed at top-right of whole modal box */}
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
                lineHeight: 1,
                cursor: "pointer",
                boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                zIndex: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              &times;
            </button>

            {/* Fixed-height image container avoids layout shift */}
            <div
              style={{
                width: "100%",
                height: "260px",
                background: "#f1f5f9",
                borderTopLeftRadius: "16px",
                borderTopRightRadius: "16px",
                overflow: "hidden",
              }}
            >
              <img
                src={`https://${selectedItem.image.slice(7)}`}
                alt={selectedItem.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>

            <div style={{ padding: "24px" }}>
              <h5 style={{ fontWeight: 700, marginBottom: 12 }}>
                {selectedItem.title}
              </h5>
              <p style={{ color: "#475569", lineHeight: 1.6, marginBottom: 20 }}>
                {selectedItem.description}
              </p>
              <button
                className="btn-readmore"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ActivitiesSection;