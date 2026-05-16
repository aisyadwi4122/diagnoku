import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import "../styles/global.css";

function Faq() {
    return (
        <div className="page-container">
            <Navbar />
            <section className="faq-section">
                <h1>Frequently Ask Questions</h1>

                <p className="faq-subtitle">
                    Bagaimana kami dapat membantu anda hari ini? Cari di basis pengetahuan kami atau telusuri kategori dibawah ini.
                </p>

                <input 
                type="text"
                placeholder="Search for question..."
                className="faq-search"
                />

                <div className="faq-categories">
                    <button className="active">Semua pertanyaan</button>
                    <button>Umum</button>
                    <button>Privasi</button>
                    <button>Teknis</button>
                    <button>Medical Disclaimer</button>
                </div>

                <div className="faq-list">
                    <div className="faq-item">
                        <h3>Is this a substitute for a doctor?</h3>
                    </div>

                    <div className="faq-item active-faq">
                        <h3>How is my data stored?</h3>

                        <p>
                            Your privacy is our top priority. All conversation and
                            symptom data are encrypted end-to-end and stored securely.
                        </p>
                    </div>

                    <div className="faq-item">
                        <h3>How accurate is the AI?</h3>
                    </div>

                    <div className="faq-item">
                        <h3>Is Diagnoku free to use?</h3>
                    </div>
                </div>

                <div className="faq-support">
                    <h2>Still have question?</h2>

                    <p>
                        If you couldn't find the answer you were looking for,
                        our support team is here to help.
                    </p>

                    <button>Contact Support</button>
                </div>

            </section>

            <Footer />
        </div>
    );
}

export default Faq;