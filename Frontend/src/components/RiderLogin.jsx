import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

const riderLoginSchema = z.object({
  riderEmail: z.string().min(2, "Rider email or phone is required"),
  riderPassword: z.string().min(6, "Password must be at least 6 characters"),
  rememberRider: z.boolean().optional(),
});

function RiderLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(riderLoginSchema),
    defaultValues: { rememberRider: false },
  });
  const navigate = useNavigate();

  async function myFormSubmissionFunction(data) {
    navigate("/rider");
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-7 col-lg-5">
          <div className="card border-0 shadow-sm bg-light">
            <div className="card-body p-4 p-md-5">
              <div className="text-center mb-4">
                <h1 className="h3 text-dark fw-bold mb-2">BakeHouse</h1>
                <span className="badge bg-dark text-white px-3 py-2 fw-semibold">
                  Delivery Rider Portal
                </span>
              </div>

              <form onSubmit={handleSubmit(myFormSubmissionFunction)}>
                <div className="mb-3">
                  <label htmlFor="riderEmail" className="form-label text-dark fw-semibold">
                    Rider Email / Phone
                  </label>
                  <input
                    type="text"
                    id="riderEmail"
                    className="form-control"
                    placeholder="rider@bakehouse.com"
                    {...register("riderEmail")}
                  />
                  {errors.riderEmail && (
                    <span className="text-danger">{errors.riderEmail.message}</span>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="riderPassword" className="form-label text-dark fw-semibold">
                    Password
                  </label>
                  <input
                    type="password"
                    id="riderPassword"
                    className="form-control"
                    placeholder="Enter your password"
                    {...register("riderPassword")}
                  />
                  {errors.riderPassword && (
                    <span className="text-danger">{errors.riderPassword.message}</span>
                  )}
                </div>

                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="rememberRider"
                      {...register("rememberRider")}
                    />
                    <label className="form-check-label text-secondary small" htmlFor="rememberRider">
                      Remember Me
                    </label>
                  </div>
                  <a href="#forgot" className="text-decoration-none small text-dark fw-semibold">
                    Forgot Password?
                  </a>
                </div>

                <button type="submit" className="btn btn-dark fw-bold w-100 py-2">
                  Login as Rider
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RiderLogin;
