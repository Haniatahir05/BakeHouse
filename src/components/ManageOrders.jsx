import React from 'react';

function ManageOrders() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-9">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              <h1 className="h3 text-center text-dark mb-2">Bakehouse</h1>
              <p className="text-center text-muted mb-4">Manage Order Status</p>

              <form onSubmit={(e) => e.preventDefault()}>
                <div className="row g-3">
                  
                  {/* Order ID */}
                  <div className="col-md-6">
                    <label htmlFor="orderId" className="form-label">
                      Order ID
                    </label>
                    <input
                      type="text"
                      id="orderId"
                      name="orderId"
                      className="form-control"
                      placeholder="e.g. #ORD-1024"
                      required
                    />
                  </div>

                  {/* Customer Name */}
                  <div className="col-md-6">
                    <label htmlFor="customerName" className="form-label">
                      Customer Name
                    </label>
                    <input
                      type="text"
                      id="customerName"
                      name="customerName"
                      className="form-control"
                      placeholder="Enter customer name"
                      required
                    />
                  </div>

                  {/* Item Name */}
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

                  {/* Order Status Select */}
                  <div className="col-md-6">
                    <label htmlFor="orderStatus" className="form-label">
                      Order Status
                    </label>
                    <select id="orderStatus" className="form-select" defaultValue="Pending" required>
                      <option value="Pending">Pending</option>
                      <option value="Preparing">Preparing</option>
                      <option value="Out for Delivery">Out for Delivery</option>
                      <option value="Delivered">Delivered</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </div>

                  {/* Delivery Date & Time */}
                  <div className="col-md-6">
                    <label htmlFor="deliveryTime" className="form-label">
                      Estimated Delivery Time
                    </label>
                    <input
                      type="datetime-local"
                      id="deliveryTime"
                      name="deliveryTime"
                      className="form-control"
                      required
                    />
                  </div>

                  {/* Payment Status */}
                  <div className="col-md-6">
                    <label htmlFor="paymentStatus" className="form-label">
                      Payment Status
                    </label>
                    <select id="paymentStatus" className="form-select" defaultValue="Unpaid" required>
                      <option value="Paid">Paid</option>
                      <option value="Unpaid">Unpaid (COD)</option>
                      <option value="Partial">Partial Advance</option>
                    </select>
                  </div>

                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-dark w-100 mt-4">
                  Update Order Details
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageOrders;