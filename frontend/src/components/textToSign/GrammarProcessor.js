const STOP_WORDS = ["is", "am", "are", "the", "to"];

export const processTextToASL = (text) => {
  return text
    .toLowerCase()
    .split(" ")
    .filter(word => !STOP_WORDS.includes(word));
};
