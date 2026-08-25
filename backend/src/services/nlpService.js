const stopWords = ["is", "am", "are", "the", "to"];

exports.processText = (text) => {
  return text
    .toLowerCase()
    .split(" ")
    .filter(word => !stopWords.includes(word));
};
