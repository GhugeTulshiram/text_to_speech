import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-left">
          <h1>Learn Sign Language Easily</h1>
          <p>
            Master sign language with interactive lessons, real-time sign recognition,
            and AI-powered conversion tools.
          </p>
          <button className="primary-btn">Get Started</button>
        </div>

        <div className="hero-right">
          <iframe
            src="https://www.youtube.com/embed/v1desDduz5M"
            title="Sign Language Learning"
            allowFullScreen
          />
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <Feature
          title="Text to Sign"
          desc="Convert text into animated sign language visuals."
          onClick={() => navigate("/text-to-sign")}
        />

        <Feature
          title="Sign to Text"
          desc="Use your camera to convert hand signs into text."
          onClick={() => navigate("/sign-to-text")}
        />

        {/* <Feature
          title="Practice"
          desc="Improve your signing skills with guided practice."
        />

        <Feature
          title="Dictionary"
          desc="Learn ASL alphabets, numbers and common signs."
        /> */}
      </section>

      {/* WATCH & LEARN */}
      <section className="watch-section">
        <h2>Watch & Learn Sign Language</h2>
        <p className="watch-subtitle">
          Learn ASL alphabets, numbers, and common phrases through short videos.
        </p>

        <div className="video-scroll">
          <div className="video-card">
            <iframe src="https://www.youtube.com/embed/DBQINq0SsAw" allowFullScreen />
            <span>ASL Alphabet</span>
          </div>

          <div className="video-card">
            <iframe src="https://www.youtube.com/embed/Y4stD_ypaAI" allowFullScreen />
            <span>ASL Numbers</span>
          </div>

          <div className="video-card">
            <iframe src="https://www.youtube.com/embed/nJx-XsxeajQ" allowFullScreen />
            <span>Common Phrases</span>
          </div>

          <div className="video-card">
            <iframe src="https://www.youtube.com/embed/25XUwHErhnk" allowFullScreen />
            <span>Finger Spelling</span>
          </div>
        </div>
      </section>

      {/* ABOUT US */}
      <section className="about-full">
        <div className="about-wrapper">
          <h2>Empowering Communication Through Sign Language</h2>

          <p className="about-intro">
            Sign Language is more than gestures — it is a bridge that connects people,
            emotions, and cultures. Our platform makes learning Sign Language easy,
            interactive, and accessible to everyone.
          </p>

          <div className="about-row">
            <div className="about-box">
              <h3>👋 Visual Language</h3>
              <p>
                Sign Language uses hand movements, facial expressions, and body
                language to communicate meaning clearly.
              </p>
            </div>

            <div className="about-box">
              <h3>🧠 Inclusive Learning</h3>
              <p>
                Designed for beginners and advanced learners using AI guidance.
              </p>
            </div>

            <div className="about-box">
              <h3>🤖 AI Powered</h3>
              <p>
                Real-time hand tracking and machine learning recognition.
              </p>
            </div>
          </div>

          <div className="about-stats">
            <div><h4>26+</h4><span>Alphabets</span></div>
            <div><h4>10+</h4><span>Numbers</span></div>
            <div><h4>100+</h4><span>Practice Signs</span></div>
            <div><h4>AI</h4><span>Real-time Detection</span></div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why">
        <h2>Why Learn With Us?</h2>

        <div className="why-grid">
          <WhyCard title="Interactive Videos" desc="Step-by-step video lessons." />
          <WhyCard title="AI Sign Detection" desc="Real-time sign recognition." />
          <WhyCard title="Progress Tracking" desc="Track your learning journey." />
          <WhyCard title="Fun Practice" desc="Engaging quizzes & challenges." />
        </div>
      </section>

    </div>
  );
};

/* ======================
   REUSABLE COMPONENTS
====================== */

const Feature = ({ title, desc, onClick }) => (
  <div className="feature-card">
    <h3>{title}</h3>
    <p>{desc}</p>
    <button onClick={onClick}>Try Now</button>
  </div>
);

const WhyCard = ({ title, desc }) => (
  <div className="why-card">
    <h4>{title}</h4>
    <p>{desc}</p>
  </div>
);

export default Home;
