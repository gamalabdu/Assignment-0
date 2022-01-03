
let auxillaryNums = [[0,1], [0,1,2], [0,1,2,3], [0,1,2,3,4], [5,5,5,5,5,5,5]];


function sumOfMinimumAndMaximum(nums) {
  
  let max = 0
  let min = 0

  min = Math.min(...nums)
  max = Math.max(...nums)

  return max + min
}

let result = sumOfMinimumAndMaximum([5,5,5,5,5,5,5])

console.log(result)

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;