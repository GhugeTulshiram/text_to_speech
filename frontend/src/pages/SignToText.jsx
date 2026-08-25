import { useRef, useState } from "react";
import Camera from "../components/signToText/Camera";
import HandTracker from "../components/signToText/HandTracker";
import PredictionBox from "../components/signToText/PredictionBox";
import "./SignToText.css";

/* ======================
   SIMPLE DICTIONARY
====================== */
const WORDS = [
  "hi",
"hello",
"how",
"are",
"you",
"howareyou",
"yes",
"no",
"please",
"thank",
"thanks",
"sorry",
"help",
"love",
"good",
"bad",
"morning",
"night",
"welcome",
"bye",
"friend",
"family",
"mother",
"father",
"brother",
"sister",
"school",
"teacher",
"student",
"learn",
"study",
"work",
"play",
"eat",
"drink",
"water",
"food",
"hungry",
"happy",
"sad",
"angry",
"excited",
"tired",
"sick",
"fine",
"okay",
"home",
"house",
"where",
"what",
"when",
"why",
"who",
"name",
"age",
"old",
"young",
"man",
"woman",
"boy",
"girl",
"today",
"tomorrow",
"yesterday",
"time",
"day",
"week",
"month",
"year",
"again",
"stop",
"go",
"come",
"see",
"listen",
"speak",
"sign",
"language",
"understand",
"practice",
"learnsign",
];

const autoCorrect = (word) => {
  let best = word;
  let min = Infinity;
  WORDS.forEach((w) => {
    let diff = Math.abs(w.length - word.length);
    if (diff < min) {
      min = diff;
      best = w;
    }
  });
  return best;
};

const SignToText = () => {
  const videoRef = useRef(null);

  const [output, setOutput] = useState("—");
  const [cameraOn, setCameraOn] = useState(false);

  const wordRef = useRef("");
  const sentenceRef = useRef("");
  const lastCharRef = useRef("");
  const lastTimeRef = useRef(Date.now());

  /* ======================
     TEXT TO SPEECH (MANUAL)
  ====================== */
  const speakText = () => {
    if (!output || output === "—") return;

    window.speechSynthesis.cancel();
    const msg = new SpeechSynthesisUtterance(output);
    msg.lang = "en-US";
    msg.rate = 0.9;
    window.speechSynthesis.speak(msg);
  };

  /* ======================
     CAMERA CONTROLS
  ====================== */
  const startCamera = () => {
    setOutput("—");
    sentenceRef.current = "";
    wordRef.current = "";
    lastCharRef.current = "";
    setCameraOn(true);
  };

  const stopCamera = () => {
    const stream = videoRef.current?.srcObject;
    if (stream) stream.getTracks().forEach((t) => t.stop());
    setCameraOn(false);
  };

  const reset = () => {
    sentenceRef.current = "";
    wordRef.current = "";
    lastCharRef.current = "";
    setOutput("—");
  };

  const copyText = () => {
    if (output !== "—") {
      navigator.clipboard.writeText(output);
      alert("Text copied!");
    }
  };

  /* ======================
     SIGN HANDLER
  ====================== */
  const onPrediction = (char) => {
    const now = Date.now();

    if (!char) return;

    // Hand removed → finalize word
    if (char === "No Hand Detected") {
      if (now - lastTimeRef.current > 1800 && wordRef.current) {
        const fixed = autoCorrect(wordRef.current);
        sentenceRef.current += fixed + " ";
        wordRef.current = "";
        setOutput(sentenceRef.current.trim());
      }
      return;
    }

    // Prevent same letter spam
    if (char === lastCharRef.current) return;

    // Pause → new word
    if (now - lastTimeRef.current > 1200 && wordRef.current) {
      const fixed = autoCorrect(wordRef.current);
      sentenceRef.current += fixed + " ";
      wordRef.current = "";
    }

    wordRef.current += char.toLowerCase();
    lastCharRef.current = char;
    lastTimeRef.current = now;

    setOutput(sentenceRef.current + wordRef.current);
  };

  return (
    <>
      {/* ================= SIGN TO TEXT ================= */}
      <div className="stt-page">
        <div className="stt-wrapper">
          <h1>Sign to Text</h1>
          <p className="subtitle">
            Convert sign language into text & speech
          </p>

          <div className="stt-main">
            {/* LEFT */}
            <div className="detected-card">
              <h3>Detected Output</h3>
              <PredictionBox text={output} />

              <div className="detected-actions">
                <button className="primary-btn" onClick={reset}>
                  Try Again
                </button>

                <button className="secondary-btn" onClick={copyText}>
                  Copy Text
                </button>

                {/* 🔊 TEXT TO SPEECH BUTTON */}
                <button className="primary-btn" onClick={speakText}>
                  🔊 Speak
                </button>
              </div>
            </div>

            {/* RIGHT */}
            <div className="camera-card">
              {cameraOn && (
                <>
                  <Camera videoRef={videoRef} />
                  <HandTracker
                    videoRef={videoRef}
                    onPrediction={onPrediction}
                  />
                </>
              )}

              <div className="camera-actions">
                {!cameraOn ? (
                  <button className="primary-btn" onClick={startCamera}>
                    Start Camera
                  </button>
                ) : (
                  <button className="secondary-btn" onClick={stopCamera}>
                    Stop Camera
                  </button>
                )}
                <span className="camera-note">
                  ASL Alphabets & Numbers
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WATCH & LEARN + ABOUT US stay unchanged */}
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

export default SignToText;
