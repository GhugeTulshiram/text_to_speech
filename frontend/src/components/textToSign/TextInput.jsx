import { useState } from "react";
import { processTextToASL } from "./GrammarProcessor";
import GifPlayer from "./GifPlayer";

const TextInput = () => {
  const [text, setText] = useState("");
  const [tokens, setTokens] = useState([]);

  return (
    <div>
      <textarea onChange={e => setText(e.target.value)} />
      <button onClick={() => setTokens(processTextToASL(text))}>
        Convert
      </button>
      <GifPlayer tokens={tokens} />
    </div>
  );
};

export default TextInput;
