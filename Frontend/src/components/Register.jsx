import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const registerSchema = z
  .object({
    fullName: z.string().min(2, "Full name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email"),
    phone: z.string().min(10, "Phone number must be at least 10 characters"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(8, "Confirm password is required"),
    terms: z.boolean().refine((value) => value, "You must accept the terms"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      terms: false,
    },
  });
  const navigate = useNavigate();

  async function myFormSubmissionFunction(data) {
    navigate("/customer");
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6">
          <div className="card border-0 shadow-sm bg-light">
            <div className="card-body p-4 p-md-5">
              <h1 className="h3 text-center text-dark fw-bold mb-2">BakeHouse</h1>
              <p className="text-center text-secondary mb-4">Create your account</p>

              <form onSubmit={handleSubmit(myFormSubmissionFunction)}>
                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label text-dark fw-semibold">
                    Full name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    className="form-control"
                    placeholder="Enter your full name"
                    autoComplete="name"
                    {...register("fullName")}
                  />
                  {errors.fullName && (
                    <span className="text-danger">{errors.fullName.message}</span>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label text-dark fw-semibold">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="Enter your email"
                    autoComplete="email"
                    {...register("email")}
                  />
                  {errors.email && <span className="text-danger">{errors.email.message}</span>}
                </div>

                <div className="mb-3">
                  <label htmlFor="phone" className="form-label text-dark fw-semibold">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="form-control"
                    placeholder="Enter your phone number"
                    autoComplete="tel"
                    {...register("phone")}
                  />
                  {errors.phone && <span className="text-danger">{errors.phone.message}</span>}
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label text-dark fw-semibold">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    placeholder="Create a password"
                    autoComplete="new-password"
                    {...register("password")}
                  />
                  {errors.password && (
                    <span className="text-danger">{errors.password.message}</span>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label text-dark fw-semibold">
                    Confirm password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    className="form-control"
                    placeholder="Confirm your password"
                    autoComplete="new-password"
                    {...register("confirmPassword")}
                  />
                  {errors.confirmPassword && (
                    <span className="text-danger">{errors.confirmPassword.message}</span>
                  )}
                </div>

                <div className="form-check mb-2">
                  <input
                    type="checkbox"
                    id="terms"
                    className="form-check-input"
                    {...register("terms")}
                  />
                  <label htmlFor="terms" className="form-check-label text-secondary small">
                    I agree to the Terms &amp; Conditions
                  </label>
                </div>
                {errors.terms && <span className="text-danger">{errors.terms.message}</span>}

                <button type="submit" className="btn btn-dark fw-bold w-100 mt-3">
                  Create Account
                </button>

                <p className="text-center text-secondary small mt-4 mb-0">
                  Already have an account?{" "}
                  <Link to="/login" className="text-decoration-none text-dark fw-bold">
                    Login
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

export default Signup;
