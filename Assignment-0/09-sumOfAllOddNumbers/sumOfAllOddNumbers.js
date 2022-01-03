let auxillaryNums = [[0], [0,1], [0,1,2], [0,1,2,3], [5,5,5,5,5,5]];

function sumOfAllEvenNumbers(nums) {
  let sum = 0
  for(item in nums) {
    if(nums[item] % 2 != 0) {
        sum += nums[item]
    }
  }
  return sum
}

let result = []
for(item in auxillaryNums) {
  result[item] = sumOfAllEvenNumbers(auxillaryNums[item])
}

console.log(result)

// Do not edit this line;
module.exports = sumOfAllOddNumbers;