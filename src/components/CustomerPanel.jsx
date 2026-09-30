import React from 'react';

function CustomerPanel() {
  return (
    <div className="container-fluid my-4">
      {/* Top Header */}
      <div className="card shadow-sm mb-4">
        <div className="card-body d-flex justify-content-between align-items-center">
          <h3 className="m-0 text-warning fw-bold">BakeHouse - Customer Portal</h3>
          <button className="btn btn-outline-danger btn-sm" disabled>
             Logout
          </button>
        </div>
      </div>

      {/* Main Layout: Left Vertical Sidebar + Right Content */}
      <div className="row">
        {/* LEFT VERTICAL SIDEBAR */}
        <div className="col-md-3 col-lg-2 mb-4">
          <div className="list-group shadow-sm">
            <button 
              type="button" 
              className="list-group-item list-group-item-action active bg-warning text-dark border-warning fw-bold" 
              style={{ cursor: 'default' }}
            >
               Dashboard / Home
            </button>
            <button type="button" className="list-group-item list-group-item-action text-muted" style={{ cursor: 'default' }}>
               Shop
            </button>
            <button type="button" className="list-group-item list-group-item-action text-muted" style={{ cursor: 'default' }}>
              Recipes
            </button>
            <button type="button" className="list-group-item list-group-item-action text-muted" style={{ cursor: 'default' }}>
               Cart
            </button>
            <button type="button" className="list-group-item list-group-item-action text-muted" style={{ cursor: 'default' }}>
               Custom Cake
            </button>
            <button type="button" className="list-group-item list-group-item-action text-muted" style={{ cursor: 'default' }}>
               My Orders
            </button>
            <button type="button" className="list-group-item list-group-item-action text-muted" style={{ cursor: 'default' }}>
               Wishlist
            </button>
            <button type="button" className="list-group-item list-group-item-action text-muted" style={{ cursor: 'default' }}>
               My Profile
            </button>
            <button type="button" className="list-group-item list-group-item-action text-muted" style={{ cursor: 'default' }}>
               Offers
            </button>
            <button type="button" className="list-group-item list-group-item-action text-muted" style={{ cursor: 'default' }}>
               Contact Us
            </button>
          </div>
        </div>

        {/* RIGHT CONTENT AREA - ONLY WELCOME & FEATURED ITEMS */}
        <div className="col-md-9 col-lg-10">
          <div className="card shadow-sm p-4">
            <div className="border p-4 rounded bg-light">
              <h4 className="text-warning mb-2 fw-bold">Welcome to BakeHouse! 🍰</h4>
              <p className="text-muted mb-4">Freshly baked happiness delivered to your doorstep.</p>
              
              <h5 className="fw-bold mb-3 text-secondary">Featured Bakery Items</h5>
              <div className="row g-3">
                <div className="col-md-4">
                  <div className="card h-100 shadow-sm border-0">
                    <div className="card-body">
                      <h6 className="card-title fw-bold">Chocolate Fudge Cake</h6>
                      <p className="card-text text-muted small">Rich layered chocolate fudge cake with premium frosting.</p>
                      <p className="fw-bold text-warning mb-2">PKR 2,200</p>
                      <button className="btn btn-sm btn-outline-warning w-100" disabled>Add to Cart</button>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card h-100 shadow-sm border-0">
                    <div className="card-body">
                      <h6 className="card-title fw-bold">Red Velvet Cupcakes</h6>
                      <p className="card-text text-muted small">Box of 6 moist red velvet cupcakes with cream cheese.</p>
                      <p className="fw-bold text-warning mb-2">PKR 1,200</p>
                      <button className="btn btn-sm btn-outline-warning w-100" disabled>Add to Cart</button>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card h-100 shadow-sm border-0">
                    <div className="card-body">
                      <h6 className="card-title fw-bold">Butter Cookies Box</h6>
                      <p className="card-text text-muted small">Traditional crispy butter cookies freshly baked daily.</p>
                      <p className="fw-bold text-warning mb-2">PKR 850</p>
                      <button className="btn btn-sm btn-outline-warning w-100" disabled>Add to Cart</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerPanel;