import React from 'react';

function CustomizeCake() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6">
          <div className="card shadow-sm border-0 rounded-4">
            <div className="card-body p-4 p-md-5">
              <h2 className="text-center fw-bold mb-4">Customize Your Cake </h2>
              <form onSubmit={(e) => e.preventDefault()}>
                
                {/* Flavour Select */}
                <div className="mb-3">
                  <label htmlFor="flavour" className="form-label fw-semibold">Cake Flavour</label>
                  <select className="form-select form-select-lg" id="flavour">
                    <option value="Chocolate">Chocolate Fudge</option>
                    <option value="Vanilla">Vanilla Sponge</option>
                    <option value="Red Velvet">Red Velvet</option>
                    <option value="Pineapple">Pineapple</option>
                  </select>
                </div>

                {/* Weight Select */}
                <div className="mb-3">
                  <label htmlFor="weight" className="form-label fw-semibold">Weight (Pounds)</label>
                  <select className="form-select form-select-lg" id="weight">
                    <option value="2">2 pounds</option>
                    <option value="3">3 pounds</option>
                    <option value="5">5 pounds</option>
                  </select>
                </div>

                {/* Message on Cake */}
                <div className="mb-3">
                  <label htmlFor="message" className="form-label fw-semibold">Message on Cake</label>
                  <input 
                    type="text" 
                    className="form-control form-control-lg" 
                    id="message" 
                    placeholder="e.g. Happy Birthday Sara!" 
                    required 
                  />
                </div>

                {/* Custom Design / Notes */}
                <div className="mb-4">
                  <label htmlFor="instructions" className="form-label fw-semibold">Special Design Notes</label>
                  <textarea 
                    className="form-control" 
                    id="instructions" 
                    rows="3" 
                    placeholder="e.g. Blue frosting with chocolate chips..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-dark btn-lg w-100 fw-bold">
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