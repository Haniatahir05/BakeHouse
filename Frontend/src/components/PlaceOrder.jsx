import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { createOrder } from "../Service/Api";

const placeOrderSchema = z.object({
  serviceId: z.string().min(1, "Service ID is required"),
  customerName: z.string().min(2, "Full name is required"),
  phone: z.string().min(10, "Phone number must be at least 10 characters"),
  address: z.string().min(10, "Address must be at least 10 characters"),
  paymentMethod: z.string().min(1, "Please select payment method"),
});

function PlaceOrder() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(placeOrderSchema),
  });

  async function myFormSubmissionFunction(data) {
    try {
      await createOrder(data);
    } catch (error) {
      console.error("Order submission failed:", error.response?.data?.message || error.message);
    }
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-9">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              <h1 className="h3 text-center text-dark mb-2">Bakehouse</h1>
              <p className="text-center text-muted mb-4">Place Order</p>

              <form onSubmit={handleSubmit(myFormSubmissionFunction)}>
                <div className="row g-3">
                  <div className="col-12">
                    <label htmlFor="serviceId" className="form-label">Service ID</label>
                    <input type="text" id="serviceId" className="form-control" placeholder="Paste service ID" {...register("serviceId")} />
                    {errors.serviceId && <span className="text-danger">{errors.serviceId.message}</span>}
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="customerName" className="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="customerName"
                      className="form-control"
                      placeholder="Enter full name"
                      {...register("customerName")}
                    />
                    {errors.customerName && (
                      <span className="text-danger">{errors.customerName.message}</span>
                    )}
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="phone" className="form-label">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="form-control"
                      placeholder="03001234567"
                      {...register("phone")}
                    />
                    {errors.phone && <span className="text-danger">{errors.phone.message}</span>}
                  </div>

                  <div className="col-12">
                    <label htmlFor="address" className="form-label">
                      Delivery Address
                    </label>
                    <textarea
                      id="address"
                      className="form-control"
                      rows="3"
                      placeholder="Complete house/street address..."
                      {...register("address")}
                    ></textarea>
                    {errors.address && <span className="text-danger">{errors.address.message}</span>}
                  </div>

                  <div className="col-12">
                    <label htmlFor="paymentMethod" className="form-label">
                      Payment Method
                    </label>
                    <select
                      id="paymentMethod"
                      className="form-select"
                      defaultValue="COD"
                      {...register("paymentMethod")}
                    >
                      <option value="COD">Cash on Delivery (COD)</option>
                      <option value="Card">Credit / Debit Card</option>
                      <option value="EasyPaisa">EasyPaisa / JazzCash</option>
                    </select>
                    {errors.paymentMethod && (
                      <span className="text-danger">{errors.paymentMethod.message}</span>
                    )}
                  </div>
                </div>

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
