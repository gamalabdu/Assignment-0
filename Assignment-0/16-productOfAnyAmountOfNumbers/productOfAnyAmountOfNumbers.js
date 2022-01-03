


function productOfAnyAmountOfNumbers(...args) {
  return args.reduce(function (acc,cur){
    return acc * cur
  })
}


console.log(productOfAnyAmountOfNumbers(5,5,5))

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;