import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <h1 className="logo">
        DiagnoKu
      </h1>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/chatbot">Chatbot</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/contact">Kontak</Link>
      </div>

      <div className="nav-right">
        <Link to="/login">
          <button className="login-btn">
            Login
          </button>
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;