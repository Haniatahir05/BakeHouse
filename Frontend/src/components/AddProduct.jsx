import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { addProductAxiosFunction } from "../Service/Api";

const productSchema = z.object({
  productId: z
    .string()
    .min(1, "Product ID is required")
    .max(10, "Product ID must be at most 10 characters"),
  productName: z
    .string()
    .min(2, "Product Name must be at least 2 characters")
    .max(20, "Product Name must be at most 20 characters"),
  productDescription: z
    .string()
    .min(10, "Description must be at least 10 characters")
    .max(20, "Description must be at most 20 characters"),
  price: z.coerce.number().min(0, "Price cannot be negative"),
});

function AddProduct() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(productSchema),
  });

  async function myFormSubmissionFunction(data) {
    try {
      await addProductAxiosFunction({
        name: data.productName,
        description: data.productDescription,
        price: data.price,
      });
    } catch (error) {
      console.error("Service creation failed:", error.response?.data?.message || error.message);
    }
  }
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6">
          <div className="card shadow-sm border-0 rounded-4">
            <div className="card-body p-4 p-md-5">
              <h2 className="text-center fw-bold mb-4">
                Add Product - New File
              </h2>

              <form onSubmit={handleSubmit(myFormSubmissionFunction)}>
                <div className="mb-3">
                  <label htmlFor="productId" className="form-label">
                    Product ID
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="productId"
                    placeholder="Enter product ID"
                    {...register("productId")}
                  />
                  {errors.productId && (
                    <span className="text-danger">
                      {errors.productId.message}
                    </span>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="productName" className="form-label">
                    Product Name
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="productName"
                    placeholder="Enter product name"
                    {...register("productName")}
                  />
                  {errors.productName && (
                    <span className="text-danger">
                      {errors.productName.message}
                    </span>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="productDescription" className="form-label">
                    Product Description
                  </label>
                  <textarea
                    className="form-control form-control-lg"
                    id="productDescription"
                    rows="4"
                    placeholder="Enter product description"
                    {...register("productDescription")}
                  ></textarea>
                  {errors.productDescription && (
                    <span className="text-danger">
                      {errors.productDescription.message}
                    </span>
                  )}
                </div>

                <div className="mb-4">
                  <label htmlFor="price" className="form-label">
                    Price
                  </label>
                  <input
                    type="number"
                    className="form-control form-control-lg"
                    id="price"
                    min="0"
                    {...register("price")}
                  />
                  {errors.price && (
                    <span className="text-danger">
                      {errors.price.message}
                    </span>
                  )}
                </div>

                <button type="submit" className="btn btn-primary btn-lg w-100">
                  Add Product
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
