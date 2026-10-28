import React from 'react';

function AdminDashboard() {
  return (
    <div className="container-fluid my-4">
      {/* Top Header */}
      <div className="card shadow-sm mb-4 border-0 bg-white">
        <div className="card-body d-flex justify-content-between align-items-center">
          <h3 className="m-0 text-dark fw-bold">BakeHouse Admin Portal</h3>
          <button className="btn btn-outline-danger btn-sm" disabled>
            Logout
          </button>
        </div>
      </div>

      {/* Main Layout */}
      <div className="row">
        {/* Left Sidebar */}
        <div className="col-md-3 col-lg-2 mb-3">
          <div className="list-group shadow-sm">
            <button className="list-group-item list-group-item-action active bg-dark text-white border-dark fw-semibold">
              Dashboard
            </button>
            <button className="list-group-item list-group-item-action text-secondary">Products</button>
            <button className="list-group-item list-group-item-action text-secondary">Recipes</button>
            <button className="list-group-item list-group-item-action text-secondary">Orders</button>
            <button className="list-group-item list-group-item-action text-secondary">Custom Cakes</button>
            <button className="list-group-item list-group-item-action text-secondary">Customers</button>
            <button className="list-group-item list-group-item-action text-secondary">Settings</button>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="col-md-9 col-lg-10">
          <div className="card shadow-sm p-4 border-0 bg-light">
            <h4 className="text-dark fw-bold mb-2">Welcome to Admin Dashboard</h4>
            <p className="text-secondary m-0">
              Select an option from the left sidebar to manage BakeHouse products, orders, and customer requests.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;