import Navbar from "../components/layout/Navbar";

import "../styles/global.css";

function Chatbot() {
  return (
    <div>

      <Navbar />

      <div className="chatbot-page">

        <div className="sidebar">

          <h3>Riwayat Chat</h3>

          <div className="history-item">
            Batuk Berdahak
          </div>

          <div className="history-item">
            Demam Tinggi
          </div>

        </div>

        <div className="chat-area">

          <div className="messages">

            <div className="bot-message">
              Halo! Ceritakan gejala Anda.
            </div>

            <div className="user-message">
              Saya mengalami batuk dan demam.
            </div>

          </div>

          <div className="chat-input">

            <input
              type="text"
              placeholder="Ketik keluhan Anda..."
            />

            <button>
              Kirim
            </button>

          </div>

        </div>

        <div className="prediction-panel">

          <h3>Hasil Prediksi</h3>

          <p>
            Kemungkinan: Flu Ringan
          </p>

        </div>

      </div>

    </div>
  );
}

export default Chatbot;