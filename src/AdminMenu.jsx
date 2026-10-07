import { Link } from 'react-router-dom';

function AdminMenu() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#063b3b' }}>
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">BakeHouse</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#adminMenu"
          aria-controls="adminMenu"
          aria-expanded="false"
          aria-label="Toggle admin navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="adminMenu">
          <div className="navbar-nav ms-auto">
            <Link className="nav-link" to="/admin-login">Admin Login</Link>
            <Link className="nav-link" to="/admin-dashboard">Dashboard</Link>
            <Link className="nav-link" to="/add-product">Add Product</Link>
            <Link className="nav-link" to="/manage-orders">Manage Orders</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default AdminMenu;
