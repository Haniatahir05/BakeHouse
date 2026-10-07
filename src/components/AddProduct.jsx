import React from 'react';

function AddProduct() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-9">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              <h1 className="h3 text-center text-dark mb-2">Bakehouse</h1>
              <p className="text-center text-muted mb-4">Add a new product to the catalogue</p>

              <form onSubmit={(e) => e.preventDefault()}>
                <div className="row g-3">
                  
                  {/* Item Title */}
                  <div className="col-12">
                    <label htmlFor="title" className="form-label">
                      Item Title
                    </label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      className="form-control"
                      placeholder="e.g. Chocolate Cake"
                      required
                    />
                  </div>

                  {/* Category Select */}
                  <div className="col-md-6">
                    <label htmlFor="category" className="form-label">
                      Category
                    </label>
                    <select id="category" className="form-select" defaultValue="" required>
                      <option value="" disabled>
                        Select a category
                      </option>
                      <option value="Cakes">Cakes</option>
                      <option value="Pastries">Pastries</option>
                      <option value="Cupcakes">Cupcakes</option>
                      <option value="Breads">Fresh Breads</option>
                      <option value="Cookies">Cookies</option>
                    </select>
                  </div>

                  {/* Price (PKR) */}
                  <div className="col-md-6">
                    <label htmlFor="price" className="form-label">
                      Price (PKR)
                    </label>
                    <input
                      type="number"
                      id="price"
                      name="price"
                      className="form-control"
                      placeholder="e.g. 1500"
                      min="0"
                      required
                    />
                  </div>

                  {/* Description */}
                  <div className="col-12">
                    <label htmlFor="description" className="form-label">
                      Description
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      className="form-control"
                      rows="4"
                      placeholder="Enter product details..."
                      required
                    ></textarea>
                  </div>

                  {/* Image URL */}
                  <div className="col-12">
                    <label htmlFor="image" className="form-label">
                      Image URL
                    </label>
                    <input
                      type="url"
                      id="image"
                      name="image"
                      className="form-control"
                      placeholder="https://..."
                    />
                  </div>

                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-dark w-100 mt-4">
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