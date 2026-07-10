import React from "react";
import Button from "../Button";

export default function Newsletter() {
  return (
    <section className="newsletter py-5">
      <div className="container my-5">
        <div className="newsletter-box text-center p-5 rounded-4 shadow-lg position-relative overflow-hidden">
          <div className="content position-relative z-2">
            <h2 className="text-white fw-bold mb-3">Never Miss an Event!</h2>
            <p className="text-white-50 mb-4 mx-auto" style={{ maxWidth: "500px" }}>
              Subscribe to our newsletter and be the first to know about upcoming exclusive seminars, workshops, and early bird tickets.
            </p>
            <form className="d-flex flex-column flex-md-row gap-3 justify-content-center mx-auto" style={{ maxWidth: "500px" }}>
              <input 
                type="email" 
                className="form-control form-control-lg border-0 rounded-pill px-4" 
                placeholder="Enter your email address" 
                required
              />
              <button 
                type="submit" 
                className="btn btn-lg btn-green rounded-pill px-5 text-nowrap fw-bold"
              >
                Subscribe
              </button>
            </form>
          </div>
          {/* Decorative Elements */}
          <div className="circle-shape shape-1"></div>
          <div className="circle-shape shape-2"></div>
        </div>
      </div>
    </section>
  );
}
