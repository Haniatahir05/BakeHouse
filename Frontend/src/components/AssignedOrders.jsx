import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateOrderStatus } from "../Service/Api";

const assignedOrdersSchema = z.object({
  orderId: z.string().min(1, "Order ID is required"),
  orderItem: z.string().min(2, "Item Name is required"),
  riderName: z.string().min(2, "Assigned Rider is required"),
  deliveryStatus: z.enum(["Accepted", "In Progress", "Completed", "Cancelled"]),
  deliveryAddress: z.string().min(10, "Delivery Address must be at least 10 characters"),
});

function AssignedOrders() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(assignedOrdersSchema),
  });

  async function myFormSubmissionFunction(data) {
    try {
      await updateOrderStatus(data.orderId, data.deliveryStatus);
    } catch (error) {
      console.error("Delivery update failed:", error.response?.data?.message || error.message);
    }
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-9">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              <h1 className="h3 text-center text-dark mb-2">Bakehouse</h1>
              <p className="text-center text-muted mb-4">Assigned Orders</p>

              <form onSubmit={handleSubmit(myFormSubmissionFunction)}>
                <div className="row g-3">
                  <div className="col-12">
                    <label htmlFor="orderId" className="form-label">Order ID</label>
                    <input type="text" id="orderId" className="form-control" {...register("orderId")} />
                    {errors.orderId && <span className="text-danger">{errors.orderId.message}</span>}
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="orderItem" className="form-label">
                      Item Name
                    </label>
                    <input
                      type="text"
                      id="orderItem"
                      className="form-control"
                      placeholder="e.g. Chocolate Cake"
                      {...register("orderItem")}
                    />
                    {errors.orderItem && (
                      <span className="text-danger">{errors.orderItem.message}</span>
                    )}
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="riderName" className="form-label">
                      Assigned Rider
                    </label>
                    <input
                      type="text"
                      id="riderName"
                      className="form-control"
                      placeholder="Enter rider name"
                      {...register("riderName")}
                    />
                    {errors.riderName && (
                      <span className="text-danger">{errors.riderName.message}</span>
                    )}
                  </div>

                  <div className="col-12">
                    <label htmlFor="deliveryStatus" className="form-label">
                      Delivery Status
                    </label>
                    <select
                      id="deliveryStatus"
                      className="form-select"
                      defaultValue="Accepted"
                      {...register("deliveryStatus")}
                    >
                      <option value="Accepted">Accepted</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Completed">Completed</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                    {errors.deliveryStatus && (
                      <span className="text-danger">{errors.deliveryStatus.message}</span>
                    )}
                  </div>

                  <div className="col-12">
                    <label htmlFor="deliveryAddress" className="form-label">
                      Delivery Address
                    </label>
                    <textarea
                      id="deliveryAddress"
                      className="form-control"
                      rows="3"
                      placeholder="Customer delivery address..."
                      {...register("deliveryAddress")}
                    ></textarea>
                    {errors.deliveryAddress && (
                      <span className="text-danger">{errors.deliveryAddress.message}</span>
                    )}
                  </div>
                </div>

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
