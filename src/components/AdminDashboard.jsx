import React from 'react';

function AdminDashboard() {
  return (
    <div className="container-fluid my-4">
      {/* Top Header */}
      <div className="card shadow-sm mb-4">
        <div className="card-body d-flex justify-content-between align-items-center">
          <h3 className="m-0 text-warning fw-bold">BakeHouse Admin Portal</h3>
          <button className="btn btn-outline-danger btn-sm" disabled>
            Logout
          </button>
        </div>
      </div>

      {/* Main Layout: Left Vertical Sidebar + Right Overview Content */}
      <div className="row">
        {/* LEFT VERTICAL SIDEBAR */}
        <div className="col-md-3 col-lg-2 mb-4">
          <div className="list-group shadow-sm">
            <button 
              type="button" 
              className="list-group-item list-group-item-action active bg-warning text-dark border-warning fw-bold" 
              style={{ cursor: 'default' }}
            >
              Dashboard
            </button>
            <button type="button" className="list-group-item list-group-item-action text-muted" style={{ cursor: 'default' }}>
              Products
            </button>
            <button type="button" className="list-group-item list-group-item-action text-muted" style={{ cursor: 'default' }}>
              Recipes
            </button>
            <button type="button" className="list-group-item list-group-item-action text-muted" style={{ cursor: 'default' }}>
              Orders
            </button>
            <button type="button" className="list-group-item list-group-item-action text-muted" style={{ cursor: 'default' }}>
              Custom Cakes
            </button>
            <button type="button" className="list-group-item list-group-item-action text-muted" style={{ cursor: 'default' }}>
              Customers
            </button>
            <button type="button" className="list-group-item list-group-item-action text-muted" style={{ cursor: 'default' }}>
              Settings
            </button>
          </div>
        </div>

        {/* RIGHT CONTENT AREA - CLEAN DASHBOARD OVERVIEW */}
        <div className="col-md-9 col-lg-10">
          <div className="card shadow-sm p-4">
            <div className="border p-4 rounded bg-light">
              <h4 className="text-warning fw-bold mb-2">Welcome to Admin Dashboard </h4>
              <p className="text-muted m-0">Select an option from the left sidebar to manage BakeHouse products, orders, and customer requests.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;