import React from 'react';

function RiderPanel() {
  return (
    <div className="container-fluid my-4">
      {/* Top Header */}
      <div className="card shadow-sm mb-4">
        <div className="card-body d-flex justify-content-between align-items-center">
          <h3 className="m-0 text-warning fw-bold">BakeHouse - Rider Portal</h3>
          <button className="btn btn-outline-danger btn-sm" disabled>
            🚪 Logout
          </button>
        </div>
      </div>

      {/* Main Layout: Left Vertical Sidebar + Right Simple Content */}
      <div className="row">
        {/* LEFT VERTICAL SIDEBAR */}
        <div className="col-md-3 col-lg-2 mb-4">
          <div className="list-group shadow-sm">
            <button 
              type="button" 
              className="list-group-item list-group-item-action active bg-warning text-dark border-warning fw-bold" 
              style={{ cursor: 'default' }}
            >
              🏠 Dashboard
            </button>
            <button type="button" className="list-group-item list-group-item-action text-muted" style={{ cursor: 'default' }}>
              📦 Assigned Orders
            </button>
            <button type="button" className="list-group-item list-group-item-action text-muted" style={{ cursor: 'default' }}>
              🛍️ Pickup Orders
            </button>
            <button type="button" className="list-group-item list-group-item-action text-muted" style={{ cursor: 'default' }}>
              🚚 Active Deliveries
            </button>
            <button type="button" className="list-group-item list-group-item-action text-muted" style={{ cursor: 'default' }}>
              📋 Delivery History
            </button>
            <button type="button" className="list-group-item list-group-item-action text-muted" style={{ cursor: 'default' }}>
              💰 Earnings
            </button>
            <button type="button" className="list-group-item list-group-item-action text-muted" style={{ cursor: 'default' }}>
              🔔 Notifications
            </button>
            <button type="button" className="list-group-item list-group-item-action text-muted" style={{ cursor: 'default' }}>
              👤 My Profile
            </button>
            <button type="button" className="list-group-item list-group-item-action text-muted" style={{ cursor: 'default' }}>
              🟢 Availability
            </button>
            <button type="button" className="list-group-item list-group-item-action text-muted" style={{ cursor: 'default' }}>
              🆘 Support
            </button>
          </div>
        </div>

        {/* RIGHT CONTENT AREA - SIMPLE WELCOME MESSAGE ONLY */}
        <div className="col-md-9 col-lg-10">
          <div className="card shadow-sm p-4">
            <div className="border p-4 rounded bg-light">
              <h4 className="text-warning fw-bold mb-2">Welcome to Rider Portal 🚚</h4>
              <p className="text-muted m-0">Select an option from the sidebar to manage your deliveries.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RiderPanel;