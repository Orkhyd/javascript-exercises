const repeatString = function (str, repeatNb) {
  let finalStr = "";
  for (let i = 0; i < repeatNb; i++) {
    finalStr += str;
  }
  if (repeatNb >= 0) {
    return finalStr;
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = repeatString;
