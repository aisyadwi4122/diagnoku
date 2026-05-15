import { Link } from "react-router-dom";
import { FaEnvelope, FaLock, FaUserCircle } from "react-icons/fa";
import AuthLayout from "../components/auth/AuthLayout";

function Login() {
    return (
        <AuthLayout>
            <div className="top-line"></div>
            <div className="icon-wrapper">
                <FaUserCircle className="main-icon" />
            </div>

            <h1 className="title">Selamat Datang</h1>
            <p className="subtitle">
                Masuk ke akun Diagnoku Anda akan melanjutkan ke perjalanan kesehatan.
            </p>

            <form>
                <div className="input-group">
                    <label>Email</label>
                    <div className="input-box">
                        <FaEnvelope className="input-icon" />
                        <input type="email" placeholder="nama@email.com" />
                    </div>
                </div>

                <div className="input-group">
                    <div className="label-row">
                        <label>Password</label>
                        <span className="forgot">Lupa Password</span>
                    </div>

                    <div className="input-box">
                        <FaLock className="input-icon" />
                        <input type="password" placeholder="********" />
                    </div>
                </div>

                <button className="primary-btn">Masuk</button>
            </form>

            <div className="divider">
                <span></span>
                <p>atau</p>
                <span></span>
            </div>

            <button className="google-btn">
                <img
                 src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
                 alt="google"
                />
                Masuk dengan Google
            </button>

            <p className="bottom-text">
                Belum punya akun? <Link to="/register">Daftar Sekarang</Link>
            </p>
        </AuthLayout>
    )
}

export default Login;