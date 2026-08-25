import aslDictionary from "../../utils/aslDictionary";

const GifPlayer = ({ tokens }) => {
  return (
    <div style={{ display: "flex", gap: 10 }}>
      {tokens.map((t, i) => (
        <img key={i} src={aslDictionary[t]} width="120" />
      ))}
    </div>
  );
};

export default GifPlayer;
