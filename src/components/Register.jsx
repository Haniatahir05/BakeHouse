import React from 'react';

function Signup() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6">
          <div className="card border-0 shadow-sm bg-light">
            <div className="card-body p-4 p-md-5">
              {/* Heading with Clean Dark Theme */}
              <h1 className="h3 text-center text-dark fw-bold mb-2">BakeHouse</h1>
              <p className="text-center text-secondary mb-4">Create your account</p>

              <form onSubmit={(e) => e.preventDefault()}>
                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label text-dark fw-semibold">
                    Full name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    className="form-control"
                    placeholder="Enter your full name"
                    autoComplete="name"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label text-dark fw-semibold">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter your email"
                    autoComplete="email"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="phone" className="form-label text-dark fw-semibold">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="form-control"
                    placeholder="Enter your phone number"
                    autoComplete="tel"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label text-dark fw-semibold">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="form-control"
                    placeholder="Create a password"
                    autoComplete="new-password"
                    minLength={8}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label text-dark fw-semibold">
                    Confirm password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    className="form-control"
                    placeholder="Confirm your password"
                    autoComplete="new-password"
                    minLength={8}
                    required
                  />
                </div>

                <div className="form-check mb-4">
                  <input
                    type="checkbox"
                    id="terms"
                    name="terms"
                    className="form-check-input"
                    required
                  />
                  <label htmlFor="terms" className="form-check-label text-secondary small">
                    I agree to the Terms &amp; Conditions
                  </label>
                </div>

                {/* Clean Dark Button */}
                <button type="submit" className="btn btn-dark fw-bold w-100">
                  Create Account
                </button>

                <p className="text-center text-secondary small mt-4 mb-0">
                  Already have an account?{' '}
                  <a href="#login" className="text-decoration-none text-dark fw-bold">
                    Login
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;