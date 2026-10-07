import React from 'react';

function AddProduct() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6">
          <div className="card shadow-sm border-0 rounded-4">
            <div className="card-body p-4 p-md-5">
              <h2 className="text-center fw-bold mb-4">Add Product</h2>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label fw-semibold">Item Title</label>
                  <input type="text" className="form-control form-control-lg" id="title" placeholder="e.g. Chocolate Cake" required />
                </div>

                <div className="mb-3">
                  <label htmlFor="category" className="form-label fw-semibold">Category</label>
                  <select className="form-select form-select-lg" id="category">
                    <option value="Cakes">Cakes</option>
                    <option value="Pastries">Pastries</option>
                    <option value="Cupcakes">Cupcakes</option>
                    <option value="Breads">Fresh Breads</option>
                    <option value="Cookies">Cookies</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="price" className="form-label fw-semibold">Price (PKR)</label>
                  <input type="number" className="form-control form-control-lg" id="price" placeholder="e.g. 1500" required />
                </div>

                <div className="mb-3">
                  <label htmlFor="description" className="form-label fw-semibold">Description</label>
                  <textarea className="form-control" id="description" rows="3" placeholder="Enter product details..."></textarea>
                </div>

                <div className="mb-4">
                  <label htmlFor="image" className="form-label fw-semibold">Image URL</label>
                  <input type="url" className="form-control form-control-lg" id="image" placeholder="https://..." />
                </div>

                <button type="submit" className="btn btn-dark btn-lg w-100 fw-bold">Add Product</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;