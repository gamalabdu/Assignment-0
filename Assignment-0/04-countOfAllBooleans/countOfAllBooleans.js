
let auxillaryTestCases = [[true, true], 
[1,2,false,false], 
[true, true, false, false], 
[8, "hello", undefined, null, false, false, false, false, false], 
["yes", "no", "true", "false"]];

function countOfAllBooleans(arr) {
  let count = 0;
  for (let e in arr) {
        if (typeof arr[e] === "boolean") {
            count++ 
        }
  }
  return count
}

for(item in auxillaryTestCases) {
  auxillaryTestCases[item] = countOfAllBooleans(auxillaryTestCases[item])
}

console.log(auxillaryTestCases)



// Do not edit this line;
module.exports = countOfAllBooleans;