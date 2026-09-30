import React from 'react';

function RiderPanel() {
  return (
    <div className="container-fluid my-4">
      {/* Top Header */}
      <div className="card border-0 shadow-sm mb-4 bg-light">
        <div className="card-body d-flex justify-content-between align-items-center">
          <h3 className="m-0 text-dark fw-bold">BakeHouse - Rider Portal</h3>
          <button className="btn btn-outline-danger btn-sm" disabled>
             Logout
          </button>
        </div>
      </div>

      {/* Main Layout: Left Sidebar + Right Content */}
      <div className="row">
        {/* LEFT VERTICAL SIDEBAR */}
        <div className="col-md-3 col-lg-2 mb-4">
          <div className="list-group shadow-sm border-0">
            <button
              type="button"
              className="list-group-item list-group-item-action active bg-dark text-white border-dark fw-semibold"
              style={{ cursor: 'default' }}
            >
               Dashboard
            </button>
            <button type="button" className="list-group-item list-group-item-action text-secondary" style={{ cursor: 'default' }}>
               Assigned Orders
            </button>
            <button type="button" className="list-group-item list-group-item-action text-secondary" style={{ cursor: 'default' }}>
               Pickup Orders
            </button>
            <button type="button" className="list-group-item list-group-item-action text-secondary" style={{ cursor: 'default' }}>
              Active Deliveries
            </button>
            <button type="button" className="list-group-item list-group-item-action text-secondary" style={{ cursor: 'default' }}>
               Delivery History
            </button>
            <button type="button" className="list-group-item list-group-item-action text-secondary" style={{ cursor: 'default' }}>
               Earnings
            </button>
            <button type="button" className="list-group-item list-group-item-action text-secondary" style={{ cursor: 'default' }}>
               Notifications
            </button>
            <button type="button" className="list-group-item list-group-item-action text-secondary" style={{ cursor: 'default' }}>
               My Profile
            </button>
            <button type="button" className="list-group-item list-group-item-action text-secondary" style={{ cursor: 'default' }}>
               Availability
            </button>
            <button type="button" className="list-group-item list-group-item-action text-secondary" style={{ cursor: 'default' }}>
               Support
            </button>
          </div>
        </div>

        {/* RIGHT CONTENT AREA */}
        <div className="col-md-9 col-lg-10">
          <div className="card border-0 shadow-sm p-4 bg-light">
            <div className="bg-white p-4 rounded border">
              <h4 className="text-dark fw-bold mb-2">Welcome to Rider Portal 🚚</h4>
              <p className="text-secondary m-0">
                Select an option from the sidebar to manage your deliveries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RiderPanel;