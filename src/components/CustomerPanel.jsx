import React from 'react';

function CustomerPanel() {
  return (
    <div className="container-fluid my-4">
      {/* Top Header */}
      <div className="card shadow-sm mb-4 border-0 bg-white">
        <div className="card-body d-flex justify-content-between align-items-center">
          <h3 className="m-0 text-dark fw-bold">BakeHouse - Customer Portal</h3>
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
              Dashboard / Home
            </button>
            <button className="list-group-item list-group-item-action text-secondary">Shop</button>
            <button className="list-group-item list-group-item-action text-secondary">Recipes</button>
            <button className="list-group-item list-group-item-action text-secondary">Cart</button>
            <button className="list-group-item list-group-item-action text-secondary">Custom Cake</button>
            <button className="list-group-item list-group-item-action text-secondary">My Orders</button>
            <button className="list-group-item list-group-item-action text-secondary">Wishlist</button>
            <button className="list-group-item list-group-item-action text-secondary">My Profile</button>
            <button className="list-group-item list-group-item-action text-secondary">Offers</button>
            <button className="list-group-item list-group-item-action text-secondary">Contact Us</button>
          </div>
        </div>

        {/* Right Content Area */}
        <div className="col-md-9 col-lg-10">
          <div className="card shadow-sm p-4 border-0 bg-light">
            <h4 className="text-dark fw-bold mb-1">Welcome to BakeHouse! 🍰</h4>
            <p className="text-secondary mb-4">Freshly baked happiness delivered to your doorstep.</p>

            <h5 className="fw-bold mb-3 text-dark">Featured Bakery Items</h5>
            
            <div className="row g-3">
              {/* Product Card 1 */}
              <div className="col-md-4">
                <div className="card h-100 shadow-sm border-0 bg-white">
                  <div className="card-body d-flex flex-column justify-content-between">
                    <div>
                      <h6 className="card-title fw-bold text-dark">Chocolate Fudge Cake</h6>
                      <p className="card-text text-secondary small">
                        Rich layered chocolate fudge cake with premium frosting.
                      </p>
                    </div>
                    <div>
                      <p className="fw-bold text-dark mb-2">PKR 2,200</p>
                      <button className="btn btn-sm btn-dark w-100" disabled>Add to Cart</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Card 2 */}
              <div className="col-md-4">
                <div className="card h-100 shadow-sm border-0 bg-white">
                  <div className="card-body d-flex flex-column justify-content-between">
                    <div>
                      <h6 className="card-title fw-bold text-dark">Red Velvet Cupcakes</h6>
                      <p className="card-text text-secondary small">
                        Box of 6 moist red velvet cupcakes with cream cheese.
                      </p>
                    </div>
                    <div>
                      <p className="fw-bold text-dark mb-2">PKR 1,200</p>
                      <button className="btn btn-sm btn-dark w-100" disabled>Add to Cart</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Card 3 */}
              <div className="col-md-4">
                <div className="card h-100 shadow-sm border-0 bg-white">
                  <div className="card-body d-flex flex-column justify-content-between">
                    <div>
                      <h6 className="card-title fw-bold text-dark">Butter Cookies Box</h6>
                      <p className="card-text text-secondary small">
                        Traditional crispy butter cookies freshly baked daily.
                      </p>
                    </div>
                    <div>
                      <p className="fw-bold text-dark mb-2">PKR 850</p>
                      <button className="btn btn-sm btn-dark w-100" disabled>Add to Cart</button>
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