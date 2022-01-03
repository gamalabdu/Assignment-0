
let auxillaryTestCases = [20,40,60,80,99,105,221];

function cutInHalfAndFloor(num) {
  num = num / 2
  num = Math.floor(num)
  return num
}

for (let num in auxillaryTestCases) {
  auxillaryTestCases[num] = auxillaryTestCases[num] / 2
  auxillaryTestCases[num] = Math.floor(auxillaryTestCases[num])
}

console.log(auxillaryTestCases)



// Do not edit this line;
module.exports = cutInHalfAndFloor;