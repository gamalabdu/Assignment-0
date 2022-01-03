

let auxillaryNums = [[1,2], [1,2,3], [1,2,3,4], [888, 23,62,100,5,4,3,2,1], [9000]];
let auxillaryTargets = [5, 5, 2, 500, 22]

function countOfAllNumbersSmallerThanTarget(nums, target) {
  let count = 0;
  for(e in nums) {
    if(nums[e] < target) {
      count++
    }
  }
  return count
}

let numSmallerThanTarget = [];

for(item in auxillaryNums) {
  numSmallerThanTarget[item] = countOfAllNumbersSmallerThanTarget(auxillaryNums[item],auxillaryTargets[item])
}

console.log(numSmallerThanTarget)

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;