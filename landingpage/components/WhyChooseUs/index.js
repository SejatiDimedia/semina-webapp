import React from "react";

export default function WhyChooseUs() {
  return (
    <section className="why-choose-us bg-white py-5">
      <div className="container py-5">
        <div className="text-center mb-5">
          <span className="text-uppercase fw-bold text-primary tracking-wider" style={{ fontSize: "14px", letterSpacing: "2px" }}>Why Semina</span>
          <h2 className="fw-bold mt-2 mb-3" style={{ color: "#1e1b4b", fontSize: "36px" }}>The Event Platform Built For Growth</h2>
          <p className="mx-auto" style={{ maxWidth: "600px", color: "#64748b", fontSize: "16px", lineHeight: "1.8" }}>
            Experience the best event management platform designed to help you discover, join, and create meaningful experiences seamlessly.
          </p>
        </div>
        
        <div className="row g-4 mt-2">
          <div className="col-12 col-md-4">
            <div className="feature-card text-center p-5 rounded-4 h-100 border">
              <div className="icon-wrapper mb-4 mx-auto d-flex align-items-center justify-content-center rounded-circle">
                <img src="/icons/ic-check.svg" alt="Quality" width="28" />
              </div>
              <h5 className="fw-bold mb-3" style={{ color: "#1e1b4b" }}>Top Quality Events</h5>
              <p className="mb-0" style={{ color: "#64748b", fontSize: "15px", lineHeight: "1.6" }}>
                We strictly curate our events to ensure you only get the best learning and networking experiences.
              </p>
            </div>
          </div>
          
          <div className="col-12 col-md-4">
            <div className="feature-card text-center p-5 rounded-4 h-100 border">
              <div className="icon-wrapper mb-4 mx-auto d-flex align-items-center justify-content-center rounded-circle">
                <img src="/icons/ic-calendar.svg" alt="Easy" width="28" />
              </div>
              <h5 className="fw-bold mb-3" style={{ color: "#1e1b4b" }}>Easy Booking</h5>
              <p className="mb-0" style={{ color: "#64748b", fontSize: "15px", lineHeight: "1.6" }}>
                A seamless and quick booking process. Get your tickets in just a few clicks without any hassle.
              </p>
            </div>
          </div>
          
          <div className="col-12 col-md-4">
            <div className="feature-card text-center p-5 rounded-4 h-100 border">
              <div className="icon-wrapper mb-4 mx-auto d-flex align-items-center justify-content-center rounded-circle">
                <img src="/icons/ic-marker.svg" alt="Network" width="28" />
              </div>
              <h5 className="fw-bold mb-3" style={{ color: "#1e1b4b" }}>Great Networking</h5>
              <p className="mb-0" style={{ color: "#64748b", fontSize: "15px", lineHeight: "1.6" }}>
                Meet professionals, industry leaders, and like-minded individuals to grow your career and business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
