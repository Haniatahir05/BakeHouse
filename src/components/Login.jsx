import React from 'react';

function Login() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-7 col-lg-5">
          <div className="card border-0 shadow-sm bg-light">
            <div className="card-body p-4 p-md-5">
              {/* Heading with Clean Dark Theme */}
              <h1 className="h3 text-center text-dark fw-bold mb-2">BakeHouse</h1>
              <p className="text-center text-secondary mb-4">Welcome back</p>

              <form onSubmit={(e) => e.preventDefault()}>
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
                    placeholder="Enter your password"
                    required
                  />
                </div>

                <div className="text-end mb-4">
                  <a href="#forgot-password" className="small text-decoration-none text-dark fw-semibold">
                    Forgot Password?
                  </a>
                </div>

                {/* Clean Dark Button */}
                <button type="submit" className="btn btn-dark fw-bold w-100">
                  Login
                </button>

                <p className="text-center text-secondary small mt-4 mb-0">
                  Don&apos;t have an account?{' '}
                  <a href="#sign-up" className="text-decoration-none text-dark fw-bold">
                    Sign up
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

export default Login;