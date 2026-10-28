import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 numbers"),
});

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const navigate = useNavigate();

  async function myFormSubmissionFunction(data) {
    navigate("/customer");
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-7 col-lg-5">
          <div className="card border-0 shadow-sm bg-light">
            <div className="card-body p-4 p-md-5">
              <h1 className="h3 text-center text-dark fw-bold mb-2">BakeHouse</h1>
              <p className="text-center text-secondary mb-4">Welcome back</p>

              <form onSubmit={handleSubmit(myFormSubmissionFunction)}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label text-dark fw-semibold">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="Enter your email"
                    {...register("email")}
                  />
                  {errors.email && <span className="text-danger">{errors.email.message}</span>}
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label text-dark fw-semibold">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    placeholder="Enter your password"
                    {...register("password")}
                  />
                  {errors.password && (
                    <span className="text-danger">{errors.password.message}</span>
                  )}
                </div>

                <div className="text-end mb-4">
                  <a href="#forgot-password" className="small text-decoration-none text-dark fw-semibold">
                    Forgot Password?
                  </a>
                </div>

                <button type="submit" className="btn btn-dark fw-bold w-100">
                  Login
                </button>

                <p className="text-center text-secondary small mt-4 mb-0">
                  Don&apos;t have an account?{" "}
                  <Link to="/signup" className="text-decoration-none text-dark fw-bold">
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
