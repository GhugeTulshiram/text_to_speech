const fs = require("fs");
const path = require("path");

exports.generateGif = async (tokens) => {
  // Simple mapping (pre-made GIFs)
  const gifName = tokens.join("_") + ".gif";
  const gifPath = `/uploads/generated_gifs/${gifName}`;

  const fullPath = path.join(__dirname, "../../uploads/generated_gifs", gifName);
  fs.writeFileSync(fullPath, "GIF PLACEHOLDER");

  return gifPath;
};
