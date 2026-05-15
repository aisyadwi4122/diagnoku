import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import FeatureCard from "../components/cards/FeatureCard";

import "../styles/global.css";

function Home() {
    return(
        <div>
            <Navbar />
            <section className="hero">
                <h1>
                    Kenali gejala anda dengan mudah
                </h1>

                <p>
                    Prediksi awal kesehatan menggunakan AI chatbot.
                </p>

                <button className="hero-btn">
                    Mulai Chat
                </button>
            </section>

            <section className="features">
                <FeatureCard
                title="Respon Cepat"
                desc="Deteksi awal gejala dengan cepat"
                />

                <FeatureCard
                title="Aman & Privat"
                desc="Data keshatan terlindungi dengan aman"
                />

                <FeatureCard
                title="Insight AI"
                desc="Analisis berbasis Artificial Intelligence."
                />
            </section>

            <Footer />
        </div>
    );
}

export default Home;