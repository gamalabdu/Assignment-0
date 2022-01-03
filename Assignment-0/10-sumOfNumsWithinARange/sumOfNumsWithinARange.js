
let auxillaryNums = [[0], [0,1], [0,1,2], [0,1,2,3], [5,5,5,5,5,5]];

function sumOfNumsWithinARange(nums, start, end) {
  let sum = 0
  for(let i = start; i <= end; i++) {
    sum += nums[i]
  }
  return sum 
}

let result = sumOfNumsWithinARange([0,1,2,3],1,3)

console.log(result)






// Do not edit this line;
module.exports = sumOfNumsWithinARange;