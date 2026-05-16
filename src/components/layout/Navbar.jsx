import { Link } from "react-router-dom";

function Navbar(){
    return (
        <nav className="navbar">
            <h1 className="logo">
                Diagnoku
            </h1>

            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/chatbot">Chatbot</Link>
                <Link to="/login">Login</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/faq">FAQ</Link>
            </div>

            <Link to="/chatbot">
              <button className="chat-btn">
                Mulai Chat
              </button>
            </Link>
        </nav>
    );
}

export default Navbar;