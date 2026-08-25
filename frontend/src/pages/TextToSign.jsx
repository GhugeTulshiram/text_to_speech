import { useEffect, useState } from "react";
import "./TextToSign.css";

const TextToSign = () => {
  const [text, setText] = useState("");
  const [chars, setChars] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playing, setPlaying] = useState(false);

  const handleConvert = () => {
    if (!text.trim()) return;

    const result = text
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "")
      .split("");

    setChars(result);
    setCurrentIndex(0);
    setPlaying(true);
  };

  const handleReset = () => {
    setText("");
    setChars([]);
    setCurrentIndex(0);
    setPlaying(false);
  };

  const getGifPath = (char) => {
    if (char >= "a" && char <= "z") {
      return `/asl_gifs/alphabet/${char}.gif`;
    }
    if (char >= "0" && char <= "9") {
      return `/asl_gifs/numbers/${char}.gif`;
    }
    return `/asl_gifs/placeholder.gif`;
  };

  useEffect(() => {
    if (!playing || currentIndex >= chars.length) return;

    const timer = setTimeout(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 900);

    return () => clearTimeout(timer);
  }, [playing, currentIndex, chars]);

  return (
    <>
      {/* HOME / TEXT TO SIGN */}
      <div className="tts-page">
        <div className="tts-wrapper">
          {/* LEFT */}
          <div className="tts-left">
            <h1>Text to Sign</h1>
            <p className="subtitle">
              Convert text into animated sign language visuals
            </p>

            <input
              className="tts-input"
              type="text"
              placeholder="Hello123"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />

            <button className="convert-btn" onClick={handleConvert}>
              Convert to Sign
            </button>

            {chars.length > 0 && (
              <div className="actions">
                <button
                  className="primary-btn"
                  onClick={() => setPlaying(!playing)}
                >
                  {playing ? "Pause" : "Play"}
                </button>
                <button className="secondary-btn" onClick={handleReset}>
                  Reset
                </button>
              </div>
            )}
          </div>

          {/* RIGHT */}
          <div className="tts-right">
            {/* 3D IMAGE */}
            <div className="sign-3d-box">
              <img src="/3dimage.jpg" alt="3D Sign Language" />
              <span>3D Sign Guide</span>
            </div>

            {/* CENTERED GIF */}
            {chars.length > 0 && currentIndex < chars.length && (
              <div className="animated-sign centered">
                <img
                  src={getGifPath(chars[currentIndex])}
                  alt={chars[currentIndex]}
                  onError={(e) => {
                    e.target.src = "/asl_gifs/placeholder.gif";
                  }}
                />
                <span>{chars[currentIndex].toUpperCase()}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* WATCH & LEARN */}
<section className="watch-section">
  <h2>Watch & Learn Sign Language</h2>
  <p className="watch-subtitle">
    Learn ASL alphabets, numbers, and common phrases through short videos.
  </p>

  <div className="video-scroll">
    <div className="video-card">
      <iframe
        src="https://www.youtube.com/embed/DBQINq0SsAw"
        title="ASL Alphabet"
        allowFullScreen
      ></iframe>
      <span>ASL Alphabet</span>
    </div>

    <div className="video-card">
      <iframe
        src="https://www.youtube.com/embed/Y4stD_ypaAI"
        title="ASL Numbers"
        allowFullScreen
      ></iframe>
      <span>ASL Numbers</span>
    </div>

    <div className="video-card">
      <iframe
        src="https://www.youtube.com/embed/nJx-XsxeajQ"
        title="Basic Phrases"
        allowFullScreen
      ></iframe>
      <span>Common Phrases</span>
    </div>

    <div className="video-card">
      <iframe
        src="https://www.youtube.com/embed/25XUwHErhnk"
        title="Finger Spelling"
        allowFullScreen
      ></iframe>
      <span>Finger Spelling</span>
    </div>
  </div>
</section>


      {/* ABOUT US */}
      <section className="about-full">
        <div className="about-wrapper">
          <h2>Empowering Communication Through Sign Language</h2>

          <p className="about-intro">
            Sign Language is more than gestures — it is a bridge that connects
            people, emotions, and cultures. Our platform makes learning Sign
            Language easy, interactive, and accessible to everyone.
          </p>

          <div className="about-row">
            <div className="about-box">
              <h3>👋 Visual Language</h3>
              <p>
                Sign Language uses hand movements, facial expressions, and body
                language to communicate meaning clearly and effectively.
              </p>
            </div>

            <div className="about-box">
              <h3>🧠 Inclusive Learning</h3>
              <p>
                Designed for beginners and advanced learners, our tools help
                anyone learn ASL at their own pace using AI and visual guidance.
              </p>
            </div>

            <div className="about-box">
              <h3>🤖 AI Powered</h3>
              <p>
                Our Sign-to-Text system uses real-time hand tracking and machine
                learning to recognize signs instantly.
              </p>
            </div>
          </div>

          <div className="about-stats">
            <div>
              <h4>26+</h4>
              <span>Alphabets</span>
            </div>
            <div>
              <h4>10+</h4>
              <span>Numbers</span>
            </div>
            <div>
              <h4>100+</h4>
              <span>Practice Signs</span>
            </div>
            <div>
              <h4>AI</h4>
              <span>Real-time Detection</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TextToSign;
