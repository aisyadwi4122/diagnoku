import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { FaChartBar, FaHeartbeat, FaNotesMedical, FaUserMd } from "react-icons/fa";
import "../styles/dashboard.css";

function Dashboard() {
    return (
        <div className="dashboard-container">
            <Navbar />

            <div className="dashboard-content">
                <aside className="dashboard-sidebar">
                    <h2>Menu Insight</h2>
                    <ul>
                        <li className="active">
                            <FaChartBar />
                            Ringkasan Keluhan
                        </li>

                        <li>
                            <FaHeartbeat />
                            Tren Penyakit
                        </li>

                        <li>
                            <FaNotesMedical />
                            Data Demografi
                        </li>
                    </ul>
                </aside>

                <main className="dashboard-main">
                    <h1>Dashboard Insight</h1>
                    <p>
                        Ringkasan data terkini dari interaksi pengguna Diagnoku.
                    </p>

                    <div className="chart-card">
                        <div className="chart-header">
                            <h3>Top 5 keluhan minggu ini</h3>
                        </div>

                        <div className="chart">

                            <div className="bar-group">
                                <div className="bar blue" style={{height:"80%"}}></div>
                                <p>Demam</p>
                            </div>

                            <div className="bar-group">
                                <div className="bar blue" style={{height:"55%"}}></div>
                                <p>Batuk</p>
                            </div>

                             <div className="bar-group">
                                <div className="bar blue" style={{height:"40%"}}></div>
                                <p>Pusing</p>
                            </div>

                            <div className="bar-group">
                                <div className="bar blue" style={{height:"25%"}}></div>
                                <p>Mual</p>
                            </div>

                             <div className="bar-group">
                                <div className="bar blue" style={{height:"10%"}}></div>
                                <p>Nyeri</p>
                            </div>
                            
                        </div>
                    </div>

                    <div className="dashboard-cards">
                        <div className="info-card">
                            <div className="icon red">
                                <FaHeartbeat />
                            </div>

                            <h3>Info Sehat</h3>
                        </div>

                        <div className="info-card">
                            <div className="icon blue-icon">
                                <FaNotesMedical />
                            </div>

                            <h3>Tips & Artikel</h3>
                        </div>

                        <div className="info-card">
                            <div className="icon green">
                                <FaUserMd />
                            </div>

                            <h3>Cari Dokter</h3>
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
}

export default Dashboard;