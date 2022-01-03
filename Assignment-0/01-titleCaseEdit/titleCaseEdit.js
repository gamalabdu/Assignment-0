
let auxillaryTestCases = ["the sun also rises", "east Of Eden", "a scanner Darkly", "The Invisible Man", "Get out"];

function titleCaseEdit(str) {
  let strLowerCase = str.toLowerCase();
  let wordArr = strLowerCase.split(" ").map(function(currentValue) {
      return currentValue[0].toUpperCase() + currentValue.substring(1);
  });
  return wordArr.join(" ");
}

auxillaryTestCases.map(function (title) {
  titleCaseEdit(title)
  console.log(titleCaseEdit(title))
} )





// Do not edit this line;
module.exports = titleCaseEdit;