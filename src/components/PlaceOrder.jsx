import React from 'react';

function PlaceOrder() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-9">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              <h1 className="h3 text-center text-dark mb-2">Bakehouse</h1>
              <p className="text-center text-muted mb-4">Place Order</p>

              <form onSubmit={(e) => e.preventDefault()}>
                <div className="row g-3">
                  
                  {/* Full Name */}
                  <div className="col-md-6">
                    <label htmlFor="customerName" className="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="customerName"
                      name="customerName"
                      className="form-control"
                      placeholder="Enter full name"
                      required
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="col-md-6">
                    <label htmlFor="phone" className="form-label">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="form-control"
                      placeholder="03001234567"
                      required
                    />
                  </div>

                  {/* Delivery Address */}
                  <div className="col-12">
                    <label htmlFor="address" className="form-label">
                      Delivery Address
                    </label>
                    <textarea
                      id="address"
                      name="address"
                      className="form-control"
                      rows="3"
                      placeholder="Complete house/street address..."
                      required
                    ></textarea>
                  </div>

                  {/* Payment Method */}
                  <div className="col-12">
                    <label htmlFor="paymentMethod" className="form-label">
                      Payment Method
                    </label>
                    <select id="paymentMethod" className="form-select" defaultValue="COD" required>
                      <option value="COD">Cash on Delivery (COD)</option>
                      <option value="Card">Credit / Debit Card</option>
                      <option value="EasyPaisa">EasyPaisa / JazzCash</option>
                    </select>
                  </div>

                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-dark w-100 mt-4">
                  Confirm Order
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaceOrder;