

let auxillaryTestCases = [[true, true], 
[1,2,false,false], 
[true, true, false, false], 
[8, "hello", undefined, null, false, false, false, false, false], 
["yes", "no", "true", "false"]];

function countOfAllBooleansAndStrings(arr) {
  let count = 0;
  for(item in arr) {
    if(typeof arr[item] === "boolean") {
      count++
    }
    if(typeof arr[item] === "string") {
      count++
    }
  }
  return count
}

for(item in auxillaryTestCases) {
  auxillaryTestCases[item] = countOfAllBooleansAndStrings(auxillaryTestCases[item])
}

console.log(auxillaryTestCases)

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;