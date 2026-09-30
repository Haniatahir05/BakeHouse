function Signup() {
	return (
		<div className="container py-5">
			<div className="row justify-content-center">
				<div className="col-12 col-sm-10 col-md-8 col-lg-6">
					<div className="card border-0 shadow-sm">
						<div className="card-body p-4 p-md-5">
							{/* BakeHouse Title with Yellow/Warning Theme */}
							<h1 className="h3 text-center text-warning fw-bold mb-2">BakeHouse</h1>
							<p className="text-center text-muted mb-4">Create your account</p>

							<form onSubmit={(e) => e.preventDefault()}>
								<div className="mb-3">
									<label htmlFor="fullName" className="form-label">
										Full name
									</label>
									<input
										type="text"
										id="fullName"
										name="fullName"
										className="form-control"
										placeholder="Enter your full name"
										autoComplete="name"
										required
									/>
								</div>

								<div className="mb-3">
									<label htmlFor="email" className="form-label">
										Email address
									</label>
									<input
										type="email"
										id="email"
										name="email"
										className="form-control"
										placeholder="Enter your email"
										autoComplete="email"
										required
									/>
								</div>

								<div className="mb-3">
									<label htmlFor="phone" className="form-label">
										Phone number
									</label>
									<input
										type="tel"
										id="phone"
										name="phone"
										className="form-control"
										placeholder="Enter your phone number"
										autoComplete="tel"
										required
									/>
								</div>

								<div className="mb-3">
									<label htmlFor="password" className="form-label">
										Password
									</label>
									<input
										type="password"
										id="password"
										name="password"
										className="form-control"
										placeholder="Create a password"
										autoComplete="new-password"
										minLength={8}
										required
									/>
								</div>

								<div className="mb-3">
									<label htmlFor="confirmPassword" className="form-label">
										Confirm password
									</label>
									<input
										type="password"
										id="confirmPassword"
										name="confirmPassword"
										className="form-control"
										placeholder="Confirm your password"
										autoComplete="new-password"
										minLength={8}
										required
									/>
								</div>

								<div className="form-check mb-4">
									<input
										type="checkbox"
										id="terms"
										name="terms"
										className="form-check-input"
										required
									/>
									<label htmlFor="terms" className="form-check-label">
										I agree to the Terms &amp; Conditions
									</label>
								</div>

								{/* Yellow / Warning Theme Button */}
								<button type="submit" className="btn btn-warning text-dark fw-bold w-100">
									Create Account
								</button>

								<p className="text-center text-muted small mt-4 mb-0">
									Already have an account?{' '}
									<a href="#login" className="text-decoration-none text-warning fw-semibold">
										Login
									</a>
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