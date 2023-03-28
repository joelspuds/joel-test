const sentenceLength = (exports.sentenceLength = string => {
  let tempNumber = 60;

  if (string.length > tempNumber) {
    string = string.substring(0, tempNumber);
    string = string + '&hellip;';
  }

  return string;
});
