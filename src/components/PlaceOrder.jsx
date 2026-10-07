import React from 'react';

function PlaceOrder() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6">
          <div className="card shadow-sm border-0 rounded-4">
            <div className="card-body p-4 p-md-5">
              <h2 className="text-center fw-bold mb-4">Place Order </h2>

              <form onSubmit={(e) => e.preventDefault()}>
                {/* Full Name */}
                <div className="mb-3">
                  <label htmlFor="customerName" className="form-label fw-semibold">Full Name</label>
                  <input 
                    type="text" 
                    className="form-control form-control-lg" 
                    id="customerName" 
                    placeholder="Enter full name" 
                    required 
                  />
                </div>

                {/* Phone Number */}
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label fw-semibold">Phone Number</label>
                  <input 
                    type="tel" 
                    className="form-control form-control-lg" 
                    id="phone" 
                    placeholder="03001234567" 
                    required 
                  />
                </div>

                {/* Delivery Address */}
                <div className="mb-3">
                  <label htmlFor="address" className="form-label fw-semibold">Delivery Address</label>
                  <textarea 
                    className="form-control" 
                    id="address" 
                    rows="3" 
                    placeholder="Complete house/street address..." 
                    required
                  ></textarea>
                </div>

                {/* Payment Method */}
                <div className="mb-4">
                  <label htmlFor="paymentMethod" className="form-label fw-semibold">Payment Method</label>
                  <select className="form-select form-select-lg" id="paymentMethod">
                    <option value="COD">Cash on Delivery (COD)</option>
                    <option value="Card">Credit / Debit Card</option>
                    <option value="EasyPaisa">EasyPaisa / JazzCash</option>
                  </select>
                </div>

                <button type="submit" className="btn btn-dark btn-lg w-100 fw-bold">
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