import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

const adminLoginSchema = z.object({
  adminEmail: z.string().email("Please enter a valid email"),
  adminPassword: z.string().min(6, "Password must be at least 6 characters"),
});

function AdminLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(adminLoginSchema),
  });
  const navigate = useNavigate();

  async function myFormSubmissionFunction(data) {
    navigate("/admin");
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-7 col-lg-5">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              <h1 className="h3 text-center text-dark mb-2">Bakehouse</h1>
              <div className="text-center mb-4">
                <span className="badge bg-dark text-white px-3 py-2 fw-semibold">
                  Admin Portal Access
                </span>
              </div>

              <form onSubmit={handleSubmit(myFormSubmissionFunction)}>
                <div className="mb-3">
                  <label htmlFor="adminEmail" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="adminEmail"
                    className="form-control"
                    placeholder="admin@bakehouse.com"
                    {...register("adminEmail")}
                  />
                  {errors.adminEmail && (
                    <span className="text-danger">{errors.adminEmail.message}</span>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="adminPassword" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    id="adminPassword"
                    className="form-control"
                    placeholder="Enter admin password"
                    {...register("adminPassword")}
                  />
                  {errors.adminPassword && (
                    <span className="text-danger">{errors.adminPassword.message}</span>
                  )}
                </div>

                <div className="text-end mb-4">
                  <a href="#forgot-password" className="small text-muted text-decoration-none">
                    Forgot Password?
                  </a>
                </div>

                <button type="submit" className="btn btn-dark w-100">
                  Login as Admin
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
