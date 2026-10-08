function ManageOrders() {
  return (
    <div className="container py-5">
      <div className="card border-0 shadow-sm">
        <div className="card-body p-4 p-md-5">
          <h1 className="h3 text-center text-dark mb-2">Bakehouse</h1>
          <p className="text-center text-muted mb-4">Manage Order Status</p>

          <form onSubmit={(e) => e.preventDefault()}>
            <div className="table-responsive">
              <table className="table table-bordered table-hover align-middle mb-0">
                <thead className="table-dark">
                  <tr>
                    <th scope="col">Order ID</th>
                    <th scope="col">Customer Name</th>
                    <th scope="col">Item Name</th>
                    <th scope="col">Order Status</th>
                    <th scope="col">Estimated Delivery</th>
                    <th scope="col">Payment Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <label className="visually-hidden" htmlFor="orderId">Order ID</label>
                      <input
                        type="text"
                        id="orderId"
                        name="orderId"
                        className="form-control"
                        placeholder="#ORD-1024"
                        required
                      />
                    </td>
                    <td>
                      <label className="visually-hidden" htmlFor="customerName">Customer Name</label>
                      <input
                        type="text"
                        id="customerName"
                        name="customerName"
                        className="form-control"
                        placeholder="Customer name"
                        required
                      />
                    </td>
                    <td>
                      <label className="visually-hidden" htmlFor="orderItem">Item Name</label>
                      <input
                        type="text"
                        id="orderItem"
                        name="orderItem"
                        className="form-control"
                        placeholder="Chocolate Cake"
                        required
                      />
                    </td>
                    <td>
                      <label className="visually-hidden" htmlFor="orderStatus">Order Status</label>
                      <select id="orderStatus" className="form-select" defaultValue="Pending" required>
                        <option value="Pending">Pending</option>
                        <option value="Preparing">Preparing</option>
                        <option value="Out for Delivery">Out for Delivery</option>
                        <option value="Delivered">Delivered</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                    </td>
                    <td>
                      <label className="visually-hidden" htmlFor="deliveryTime">Estimated Delivery Time</label>
                      <input
                        type="datetime-local"
                        id="deliveryTime"
                        name="deliveryTime"
                        className="form-control"
                        required
                      />
                    </td>
                    <td>
                      <label className="visually-hidden" htmlFor="paymentStatus">Payment Status</label>
                      <select id="paymentStatus" className="form-select" defaultValue="Unpaid" required>
                        <option value="Paid">Paid</option>
                        <option value="Unpaid">Unpaid (COD)</option>
                        <option value="Partial">Partial Advance</option>
                      </select>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <button type="submit" className="btn btn-dark w-100 mt-4">
              Update Order Details
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ManageOrders;