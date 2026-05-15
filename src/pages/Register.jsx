import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  FaEnvelope,
  FaLock,
  FaUser,
  FaShieldAlt,
} from "react-icons/fa";

import AuthLayout from "../components/auth/AuthLayout";
import API from "../api/api";

function Register() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.password ||
      !form.confirmPassword
    ) {
      alert("Semua data wajib diisi");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("Konfirmasi password tidak cocok");
      return;
    }

    try {

      const response = await API.post("/register", {
        name: form.name,
        email: form.email,
        password: form.password,
      });

      alert(response.data.message);

      navigate("/");

    } catch (error) {

      console.log(error);

      alert("Register gagal");
    }
  };

  return (
    <AuthLayout>

      <div className="top-line"></div>

      <h1 className="title">Diagnoku</h1>

      <p className="subtitle">
        Buat akun untuk memulai konsultasi
      </p>

      <form onSubmit={handleRegister}>

        <div className="input-group">
          <label>Nama Lengkap</label>

          <div className="input-box">
            <FaUser className="input-icon" />

            <input
              type="text"
              name="name"
              placeholder="Masukkan nama lengkap anda"
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="input-group">
          <label>Email</label>

          <div className="input-box">
            <FaEnvelope className="input-icon" />

            <input
              type="email"
              name="email"
              placeholder="contoh@gmail.com"
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="input-group">
          <label>Kata Sandi</label>

          <div className="input-box">
            <FaLock className="input-icon" />

            <input
              type="password"
              name="password"
              placeholder="Buat kata sandi yang kuat"
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="input-group">
          <label>Konfirmasi Kata Sandi</label>

          <div className="input-box">
            <FaShieldAlt className="input-icon" />

            <input
              type="password"
              name="confirmPassword"
              placeholder="Ulangi kata sandi anda"
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="checkbox-wrapper">
          <input type="checkbox" />

          <p>
            Saya setuju dengan
            <span> Syarat dan ketentuan </span>
            serta
            <span> Kebijakan Privasi</span>
          </p>
        </div>

        <button type="submit" className="primary-btn">
          Daftar
        </button>

      </form>

      <p className="bottom-text">
        Sudah punya akun?
        <Link to="/"> Login Sekarang</Link>
      </p>

    </AuthLayout>
  );
}

export default Register;