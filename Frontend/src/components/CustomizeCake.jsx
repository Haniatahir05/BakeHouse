import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const customizeCakeSchema = z.object({
  flavour: z.string().min(1, "Please select a flavour"),
  weight: z.string().min(1, "Please select weight"),
  message: z.string().min(2, "Message on cake is required"),
  instructions: z.string().optional(),
});

function CustomizeCake() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(customizeCakeSchema),
  });

  function myFormSubmissionFunction(data) {
    console.log("Form submitted.", data);
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-9">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              <h1 className="h3 text-center text-dark mb-2">Bakehouse</h1>
              <p className="text-center text-muted mb-4">Customize Your Cake</p>

              <form onSubmit={handleSubmit(myFormSubmissionFunction)}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="flavour" className="form-label">
                      Cake Flavour
                    </label>
                    <select id="flavour" className="form-select" defaultValue="" {...register("flavour")}>
                      <option value="" disabled>
                        Select a flavour
                      </option>
                      <option value="Chocolate">Chocolate Fudge</option>
                      <option value="Vanilla">Vanilla Sponge</option>
                      <option value="Red Velvet">Red Velvet</option>
                      <option value="Pineapple">Pineapple</option>
                    </select>
                    {errors.flavour && <span className="text-danger">{errors.flavour.message}</span>}
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="weight" className="form-label">
                      Weight (Pounds)
                    </label>
                    <select id="weight" className="form-select" defaultValue="" {...register("weight")}>
                      <option value="" disabled>
                        Select weight
                      </option>
                      <option value="2">2 pounds</option>
                      <option value="3">3 pounds</option>
                      <option value="5">5 pounds</option>
                    </select>
                    {errors.weight && <span className="text-danger">{errors.weight.message}</span>}
                  </div>

                  <div className="col-12">
                    <label htmlFor="message" className="form-label">
                      Message on Cake
                    </label>
                    <input
                      type="text"
                      id="message"
                      className="form-control"
                      placeholder="e.g. Happy Birthday Sara!"
                      {...register("message")}
                    />
                    {errors.message && <span className="text-danger">{errors.message.message}</span>}
                  </div>

                  <div className="col-12">
                    <label htmlFor="instructions" className="form-label">
                      Special Design Notes
                    </label>
                    <textarea
                      id="instructions"
                      className="form-control"
                      rows="4"
                      placeholder="e.g. Blue frosting with chocolate chips..."
                      {...register("instructions")}
                    ></textarea>
                  </div>
                </div>

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
