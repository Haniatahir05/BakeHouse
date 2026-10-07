import { Link } from 'react-router-dom';

function RiderMenu() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#063b3b' }}>
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">BakeHouse</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#riderMenu"
          aria-controls="riderMenu"
          aria-expanded="false"
          aria-label="Toggle rider navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="riderMenu">
          <div className="navbar-nav ms-auto">
            <Link className="nav-link" to="/rider-login">Rider Login</Link>
            <Link className="nav-link" to="/rider-dashboard">Dashboard</Link>
            <Link className="nav-link" to="/assigned-orders">Assigned Orders</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default RiderMenu;
