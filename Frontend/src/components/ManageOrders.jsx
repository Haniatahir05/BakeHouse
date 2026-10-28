import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateOrderStatus } from "../Service/Api";

const manageOrderSchema = z.object({
  orderId: z.string().min(1, "Order ID is required"),
  customerName: z.string().min(2, "Customer Name is required"),
  orderItem: z.string().min(2, "Item Name is required"),
  orderStatus: z.string().min(1, "Order Status is required"),
  deliveryTime: z.string().min(1, "Estimated Delivery is required"),
  paymentStatus: z.string().min(1, "Payment Status is required"),
});

function ManageOrders() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(manageOrderSchema),
  });

  async function myFormSubmissionFunction(data) {
    try {
      await updateOrderStatus(data.orderId, data.orderStatus);
    } catch (error) {
      console.error("Order update failed:", error.response?.data?.message || error.message);
    }
  }

  return (
    <div className="container py-5">
      <div className="card border-0 shadow-sm">
        <div className="card-body p-4 p-md-5">
          <h1 className="h3 text-center text-dark mb-2">Bakehouse</h1>
          <p className="text-center text-muted mb-4">Manage Order Status</p>

          <form onSubmit={handleSubmit(myFormSubmissionFunction)}>
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
                        className="form-control"
                        placeholder="#ORD-1024"
                        {...register("orderId")}
                      />
                      {errors.orderId && (
                        <span className="text-danger d-block mt-1">{errors.orderId.message}</span>
                      )}
                    </td>
                    <td>
                      <label className="visually-hidden" htmlFor="customerName">Customer Name</label>
                      <input
                        type="text"
                        id="customerName"
                        className="form-control"
                        placeholder="Customer name"
                        {...register("customerName")}
                      />
                      {errors.customerName && (
                        <span className="text-danger d-block mt-1">{errors.customerName.message}</span>
                      )}
                    </td>
                    <td>
                      <label className="visually-hidden" htmlFor="orderItem">Item Name</label>
                      <input
                        type="text"
                        id="orderItem"
                        className="form-control"
                        placeholder="Chocolate Cake"
                        {...register("orderItem")}
                      />
                      {errors.orderItem && (
                        <span className="text-danger d-block mt-1">{errors.orderItem.message}</span>
                      )}
                    </td>
                    <td>
                      <label className="visually-hidden" htmlFor="orderStatus">Order Status</label>
                      <select
                        id="orderStatus"
                        className="form-select"
                        defaultValue="Pending"
                        {...register("orderStatus")}
                      >
                        <option value="Pending">Pending</option>
                        <option value="Accepted">Accepted</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                      {errors.orderStatus && (
                        <span className="text-danger d-block mt-1">{errors.orderStatus.message}</span>
                      )}
                    </td>
                    <td>
                      <label className="visually-hidden" htmlFor="deliveryTime">Estimated Delivery Time</label>
                      <input
                        type="datetime-local"
                        id="deliveryTime"
                        className="form-control"
                        {...register("deliveryTime")}
                      />
                      {errors.deliveryTime && (
                        <span className="text-danger d-block mt-1">{errors.deliveryTime.message}</span>
                      )}
                    </td>
                    <td>
                      <label className="visually-hidden" htmlFor="paymentStatus">Payment Status</label>
                      <select
                        id="paymentStatus"
                        className="form-select"
                        defaultValue="Unpaid"
                        {...register("paymentStatus")}
                      >
                        <option value="Paid">Paid</option>
                        <option value="Unpaid">Unpaid (COD)</option>
                        <option value="Partial">Partial Advance</option>
                      </select>
                      {errors.paymentStatus && (
                        <span className="text-danger d-block mt-1">{errors.paymentStatus.message}</span>
                      )}
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
