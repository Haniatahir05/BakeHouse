import React from 'react';

function ContactUs() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6">
          <div className="card shadow-sm border-0 rounded-4">
            <div className="card-body p-4 p-md-5">
              <h2 className="text-center fw-bold mb-4">Contact Us </h2>

              <form onSubmit={(e) => e.preventDefault()}>
                {/* Full Name */}
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fw-semibold">Your Name</label>
                  <input 
                    type="text" 
                    className="form-control form-control-lg" 
                    id="name" 
                    placeholder="Enter your name" 
                    required 
                  />
                </div>

                {/* Email Address */}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-semibold">Email Address</label>
                  <input 
                    type="email" 
                    className="form-control form-control-lg" 
                    id="email" 
                    placeholder="name@example.com" 
                    required 
                  />
                </div>

                {/* Message */}
                <div className="mb-4">
                  <label htmlFor="message" className="form-label fw-semibold">Message / Query</label>
                  <textarea 
                    className="form-control" 
                    id="message" 
                    rows="4" 
                    placeholder="Type your message here..." 
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-dark btn-lg w-100 fw-bold">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;