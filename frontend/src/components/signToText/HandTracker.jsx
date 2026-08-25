import { useEffect, useRef } from "react";

const HandTracker = ({ videoRef, onPrediction }) => {
  const handsRef = useRef(null);
  const cameraRef = useRef(null);
  const activeRef = useRef(false);

  const lastSentTime = useRef(0);
  const predictionBuffer = useRef([]);
  const lastStablePrediction = useRef("");

  useEffect(() => {
    if (!videoRef.current) return;
    if (!window.Hands || !window.Camera) return;

    activeRef.current = true;

    const hands = new window.Hands({
      locateFile: (file) =>
        `https://cdn.jsdelivr.net/npm/@mediapipe/hands@0.4/${file}`,
    });

    hands.setOptions({
      maxNumHands: 1,
      modelComplexity: 0,
      minDetectionConfidence: 0.7,
      minTrackingConfidence: 0.7,
    });

    hands.onResults(async (results) => {
      if (!activeRef.current) return;

      // ❌ No hand
      if (
        !results.multiHandLandmarks ||
        results.multiHandLandmarks.length === 0
      ) {
        onPrediction("Hand Not Detected");
        predictionBuffer.current = [];
        return;
      }

      // ✅ Extract landmarks
      const landmarks = results.multiHandLandmarks[0]
        .map((lm) => [lm.x, lm.y, lm.z])
        .flat();

      if (landmarks.length !== 63) return;

      // ⏱ Throttle API calls (300ms)
      const now = Date.now();
      if (now - lastSentTime.current < 300) return;
      lastSentTime.current = now;

      try {
        const res = await fetch("http://127.0.0.1:8000/predict", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ landmarks }),
        });

        const data = await res.json();
        const prediction = data.prediction;

        if (!prediction || prediction === "Unclear") return;

        // 🧠 Stability buffer
        predictionBuffer.current.push(prediction);
        if (predictionBuffer.current.length > 3) {
          predictionBuffer.current.shift();
        }

        // ✅ Accept only stable prediction
        const allSame = predictionBuffer.current.every(
          (p) => p === predictionBuffer.current[0]
        );

        if (allSame && prediction !== lastStablePrediction.current) {
          lastStablePrediction.current = prediction;
          onPrediction(prediction);
        }
      } catch {
        onPrediction("ML Server Error");
      }
    });

    const camera = new window.Camera(videoRef.current, {
      onFrame: async () => {
        if (!activeRef.current) return;
        await hands.send({ image: videoRef.current });
      },
      width: 640,
      height: 480,
    });

    handsRef.current = hands;
    cameraRef.current = camera;
    camera.start();

    return () => {
      activeRef.current = false;

      if (cameraRef.current) {
        try {
          cameraRef.current.stop();
        } catch {}
      }

      if (handsRef.current) {
        try {
          handsRef.current.close();
        } catch {}
      }
    };
  }, [videoRef, onPrediction]);

  return null;
};

export default HandTracker;
