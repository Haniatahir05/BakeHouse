import React from 'react';

function ManageOrders() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6">
          <div className="card shadow-sm border-0 rounded-4">
            <div className="card-body p-4 p-md-5">
              <h2 className="text-center fw-bold mb-4">Manage Order Status</h2>
              <form onSubmit={(e) => e.preventDefault()}>
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

                <div className="mb-3">
                  <label htmlFor="orderStatus" className="form-label fw-semibold">Order Status</label>
                  <select className="form-select form-select-lg" id="orderStatus">
                    <option value="Pending">Pending</option>
                    <option value="Preparing">Preparing</option>
                    <option value="Out for Delivery">Out for Delivery</option>
                    <option value="Delivered">Delivered</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label htmlFor="notes" className="form-label fw-semibold">Special Instructions / Notes</label>
                  <textarea 
                    className="form-control" 
                    id="notes" 
                    rows="3" 
                    placeholder="e.g. Extra chocolate topping..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-dark btn-lg w-100 fw-bold">
                  Update Status
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