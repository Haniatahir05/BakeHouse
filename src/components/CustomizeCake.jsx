import React from 'react';

function CustomizeCake() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-9">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              <h1 className="h3 text-center text-dark mb-2">Bakehouse</h1>
              <p className="text-center text-muted mb-4">Customize Your Cake</p>

              <form onSubmit={(e) => e.preventDefault()}>
                <div className="row g-3">
                  
                  {/* Flavour Select */}
                  <div className="col-md-6">
                    <label htmlFor="flavour" className="form-label">
                      Cake Flavour
                    </label>
                    <select id="flavour" className="form-select" defaultValue="" required>
                      <option value="" disabled>
                        Select a flavour
                      </option>
                      <option value="Chocolate">Chocolate Fudge</option>
                      <option value="Vanilla">Vanilla Sponge</option>
                      <option value="Red Velvet">Red Velvet</option>
                      <option value="Pineapple">Pineapple</option>
                    </select>
                  </div>

                  {/* Weight Select */}
                  <div className="col-md-6">
                    <label htmlFor="weight" className="form-label">
                      Weight (Pounds)
                    </label>
                    <select id="weight" className="form-select" defaultValue="" required>
                      <option value="" disabled>
                        Select weight
                      </option>
                      <option value="2">2 pounds</option>
                      <option value="3">3 pounds</option>
                      <option value="5">5 pounds</option>
                    </select>
                  </div>

                  {/* Message on Cake */}
                  <div className="col-12">
                    <label htmlFor="message" className="form-label">
                      Message on Cake
                    </label>
                    <input
                      type="text"
                      id="message"
                      name="message"
                      className="form-control"
                      placeholder="e.g. Happy Birthday Sara!"
                      required
                    />
                  </div>

                  {/* Custom Design / Notes */}
                  <div className="col-12">
                    <label htmlFor="instructions" className="form-label">
                      Special Design Notes
                    </label>
                    <textarea
                      id="instructions"
                      name="instructions"
                      className="form-control"
                      rows="4"
                      placeholder="e.g. Blue frosting with chocolate chips..."
                    ></textarea>
                  </div>

                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-dark w-100 mt-4">
                  Submit Custom Order
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomizeCake;