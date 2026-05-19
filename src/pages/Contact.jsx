import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function Contact() {
  return (
    <div>

      <Navbar />

      <section className="contact-section">

        <h1>Hubungi Kami</h1>

        <p className="contact-subtitle">
          Kami siap membantu Anda. Silakan isi form di bawah ini
          atau hubungi kami melalui informasi kontak yang tersedia.
        </p>

        <div className="contact-container">

          {/* LEFT */}
          <div className="contact-form">

            <h2>Kirim Pesan</h2>

            <input
              type="text"
              placeholder="Masukkan nama Anda"
            />

            <input
              type="email"
              placeholder="nama@email.com"
            />

            <input
              type="text"
              placeholder="Topik pesan anda"
            />

            <textarea
              rows="6"
              placeholder="Tuliskan pesan atau pertanyaan disini..."
            ></textarea>

            <button>
              Kirim pesan
            </button>

          </div>

          {/* RIGHT */}
          <div className="contact-info">

            <div className="info-card">
              <h3>Email Support</h3>

              <p>bantuan@diagnoku.com</p>

              <span>
                Kami membalas dalam 1x24 jam
              </span>
            </div>

            <div className="info-card">
              <h3>Jam Operasional</h3>

              <p>Senin - Jumat</p>

              <span>
                08:00 - 17:00 WIB
              </span>
            </div>

            <div className="info-card">
              <h3>Lokasi Kantor</h3>

              <p>Jakarta Selatan</p>

              <span>
                Jl. Sudirman No.123
              </span>
            </div>

            <div className="map-box">
              <button>
                Buka Maps
              </button>
            </div>

          </div>

        </div>

      </section>

      <Footer />

    </div>
  );
}

export default Contact;