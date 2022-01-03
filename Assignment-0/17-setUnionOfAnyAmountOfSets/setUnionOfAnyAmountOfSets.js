


function setUnionOfAnyAmountOfSets(...args) {
   let newSet = new Set();
    args.forEach( S => S.forEach( e => newSet.add(e)))
    return newSet;
}
let s1 = new Set([3,4,99]);
let s2 = new Set([5,0,3,78,6]);
let s3 = new Set([0,4,88,76,12]);

let result = setUnionOfAnyAmountOfSets(s1,s2,s3)

console.log(result)

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;