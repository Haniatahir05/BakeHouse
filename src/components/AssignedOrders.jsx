import React from 'react';

function AssignedOrders() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-9">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              <h1 className="h3 text-center text-dark mb-2">Bakehouse</h1>
              <p className="text-center text-muted mb-4">Assigned Orders</p>

              <form onSubmit={(e) => e.preventDefault()}>
                <div className="row g-3">
                  
                  {/* Order Item */}
                  <div className="col-md-6">
                    <label htmlFor="orderItem" className="form-label">
                      Item Name
                    </label>
                    <input
                      type="text"
                      id="orderItem"
                      name="orderItem"
                      className="form-control"
                      placeholder="e.g. Chocolate Cake"
                      required
                    />
                  </div>

                  {/* Rider / Driver Assigned */}
                  <div className="col-md-6">
                    <label htmlFor="riderName" className="form-label">
                      Assigned Rider
                    </label>
                    <input
                      type="text"
                      id="riderName"
                      name="riderName"
                      className="form-control"
                      placeholder="Enter rider name"
                      required
                    />
                  </div>

                  {/* Delivery Status */}
                  <div className="col-12">
                    <label htmlFor="deliveryStatus" className="form-label">
                      Delivery Status
                    </label>
                    <select id="deliveryStatus" className="form-select" defaultValue="Assigned" required>
                      <option value="Assigned">Assigned</option>
                      <option value="Picked Up">Picked Up</option>
                      <option value="On The Way">On The Way</option>
                      <option value="Delivered">Delivered</option>
                    </select>
                  </div>

                  {/* Delivery Address */}
                  <div className="col-12">
                    <label htmlFor="deliveryAddress" className="form-label">
                      Delivery Address
                    </label>
                    <textarea
                      id="deliveryAddress"
                      name="deliveryAddress"
                      className="form-control"
                      rows="3"
                      placeholder="Customer delivery address..."
                      required
                    ></textarea>
                  </div>

                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-dark w-100 mt-4">
                  Update Delivery Status
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssignedOrders;