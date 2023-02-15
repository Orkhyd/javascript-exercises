const reverseString = function (initWord) {
  let retWord = "";
  for (let i = 0; i < initWord.length; i++) {
    retWord += initWord[initWord.length - i - 1];
  }
  return retWord;
};

// Do not edit below this line
module.exports = reverseString;
