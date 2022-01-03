
let sampleNums = [10,20,30,40,50,60,70,80,90,100,95];
let targ = 150

function pairSum(nums, target) {
  for(item in nums){
    let first = nums[item]
    for(let i = 1; i < nums.length; i++) {
      if(first + nums[i] === target) {
        return true;
      }
    }
  }
  return false
}

console.log(pairSum(sampleNums,targ))


// Do not edit this line;
module.exports = pairSum;