import React from 'react';

function AssignedOrders() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6">
          <div className="card shadow-sm border-0 rounded-4">
            <div className="card-body p-4 p-md-5">
              <h2 className="text-center fw-bold mb-4">Assigned Orders </h2>

              <form onSubmit={(e) => e.preventDefault()}>
                {/* Order Item */}
                <div className="mb-3">
                  <label htmlFor="orderItem" className="form-label fw-semibold">Item Name</label>
                  <input 
                    type="text" 
                    className="form-control form-control-lg" 
                    id="orderItem" 
                    placeholder="e.g. Chocolate Cake" 
                    required 
                  />
                </div>

                {/* Delivery Address */}
                <div className="mb-3">
                  <label htmlFor="deliveryAddress" className="form-label fw-semibold">Delivery Address</label>
                  <textarea 
                    className="form-control" 
                    id="deliveryAddress" 
                    rows="3" 
                    placeholder="Customer delivery address..." 
                    required
                  ></textarea>
                </div>

                {/* Delivery Status */}
                <div className="mb-4">
                  <label htmlFor="deliveryStatus" className="form-label fw-semibold">Delivery Status</label>
                  <select className="form-select form-select-lg" id="deliveryStatus">
                    <option value="Assigned">Assigned</option>
                    <option value="Picked Up">Picked Up</option>
                    <option value="On The Way">On The Way</option>
                    <option value="Delivered">Delivered</option>
                  </select>
                </div>

                <button type="submit" className="btn btn-dark btn-lg w-100 fw-bold">
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