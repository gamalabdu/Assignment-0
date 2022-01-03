

let auxillaryNums = [[0], [0,1], [0,1,2], [0,1,2,3], [5,5,5,5,5,5]];

function countOfAllIndexMatchingNumbers(nums) {
  let count = 0;
  for(item in nums) {
      if(item == nums[item]) {
        count++
      }
    }
    return count
}

let result = []

for(item in auxillaryNums) {
  result[item] = countOfAllIndexMatchingNumbers(auxillaryNums[item])
}

console.log(result)



// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;