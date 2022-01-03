
let auxillaryTestCases = [20,40,60,80,99,105,221];

auxillaryTestCases.forEach(subtractFive)

function subtractFive(item, index, arr) {
  arr[index] = item - 5;
}


console.log(auxillaryTestCases)




// Do not edit this line;
module.exports = subtractFive;