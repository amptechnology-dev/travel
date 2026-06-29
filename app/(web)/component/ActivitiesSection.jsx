"use client";
import { useState } from "react";

const ActivitiesSection = ({ Activitydata }) => {
  const [selectedItem, setSelectedItem] = useState(null);

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
                      onClick={() => setSelectedItem(item)}
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
          className="activity-modal-overlay"
          onClick={(e) => e.target.classList.contains("activity-modal-overlay") && setSelectedItem(null)}
        >
          <div className="activity-modal-box">
            <img
              className="activity-modal-img"
              src={`https://${selectedItem.image.slice(7)}`}
              alt={selectedItem.title}
            />
            <div className="activity-modal-content">
              <button
                className="activity-modal-close"
                onClick={() => setSelectedItem(null)}
              >
                &times;
              </button>
              <span className="activity-badge mb-2 d-inline-block">
                {selectedItem.category || "Activity"}
              </span>
              <h5 className="activity-title mt-2">{selectedItem.title}</h5>
              <p className="activity-modal-desc">{selectedItem.description}</p>
              <button
                className="btn-readmore"
                onClick={() => setSelectedItem(null)}
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