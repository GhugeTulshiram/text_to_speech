const { processText } = require("../services/nlpService");
const { generateGif } = require("../services/gifService");

exports.textToGif = async (req, res) => {
  const { text } = req.body;

  const tokens = processText(text);
  const gifPath = await generateGif(tokens);

  res.json({
    tokens,
    gif: gifPath
  });
};
