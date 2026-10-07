import React from 'react';

function ContactUs() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-9">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              <h1 className="h3 text-center text-dark mb-2">Bakehouse</h1>
              <p className="text-center text-muted mb-4">Contact Us</p>

              <form onSubmit={(e) => e.preventDefault()}>
                <div className="row g-3">
                  
                  {/* Your Name */}
                  <div className="col-md-6">
                    <label htmlFor="name" className="form-label">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  {/* Email Address */}
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder="name@example.com"
                      required
                    />
                  </div>

                  {/* Subject / Query Type */}
                  <div className="col-12">
                    <label htmlFor="subject" className="form-label">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-control"
                      placeholder="e.g. Order Inquiry, Feedback, Custom Order"
                      required
                    />
                  </div>

                  {/* Message */}
                  <div className="col-12">
                    <label htmlFor="message" className="form-label">
                      Message / Query
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-control"
                      rows="4"
                      placeholder="Type your message here..."
                      required
                    ></textarea>
                  </div>

                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-dark w-100 mt-4">
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