import React from 'react';

function AdminLogin() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-7 col-lg-5">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              <h1 className="h3 text-center text-dark mb-2">Bakehouse</h1>
              <div className="text-center mb-4">
                <span className="badge bg-dark text-white px-3 py-2 fw-semibold">
                  Admin Portal Access
                </span>
              </div>

              <form onSubmit={(e) => e.preventDefault()}>
                <div className="mb-3">
                  <label htmlFor="adminEmail" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="adminEmail"
                    name="adminEmail"
                    className="form-control"
                    placeholder="admin@bakehouse.com"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="adminPassword" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    id="adminPassword"
                    name="adminPassword"
                    className="form-control"
                    placeholder="Enter admin password"
                    required
                  />
                </div>

                <div className="text-end mb-4">
                  <a href="#forgot-password" className="small text-muted text-decoration-none">
                    Forgot Password?
                  </a>
                </div>

                <button type="submit" className="btn btn-dark w-100">
                  Login as Admin
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;