import { Link } from 'react-router-dom';

function CustomerMenu() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white navbar-bakehouse">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">BakeHouse</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#customerMenu"
          aria-controls="customerMenu"
          aria-expanded="false"
          aria-label="Toggle customer navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="customerMenu">
          <div className="navbar-nav ms-auto">
            <Link className="nav-link" to="/signup">Sign Up</Link>
            <Link className="nav-link" to="/login">Login</Link>
            <Link className="nav-link" to="/contact">Contact</Link>
            <Link className="nav-link" to="/customize-cake">Customize Cake</Link>
            <Link className="nav-link" to="/place-order">Place Order</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default CustomerMenu;
