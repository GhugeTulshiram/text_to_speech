const PredictionBox = ({ text }) => {
  return (
    <div className="prediction-box">
      <span>Predicted Text:</span>
      <strong>{text || "—"}</strong>
    </div>
  );
};

export default PredictionBox;
