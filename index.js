// Your code here
function mapToNegativize(sourceArray) {
    const newArray = []
    for (let i = 0; i < sourceArray.length; i++) {
      newArray.push(sourceArray[i] * -1)
    }
    return newArray
}

function mapToNoChange(sourceArray) {
    const newArray = sourceArray.slice()
    return newArray
}

function mapToDouble(sourceArray) {
    const newArray = []
    for (let i = 0; i < sourceArray.length; i++) {
      newArray.push(sourceArray[i] * 2)
    }
    return newArray
}

function mapToSquare(sourceArray) {
    const newArray = []
    for (let i = 0; i < sourceArray.length; i++) {
      newArray.push(sourceArray[i] ** 2)
    }
    return newArray
}

function reduceToTotal(sourceArray, startingPoint=0) {
let total = startingPoint
for (let i = 0; i < sourceArray.length; i++) {
    total += sourceArray[i]
  }
  return total
}

function reduceToAllTrue(sourceArray) {
    let validator = []
    for (let i = 0; i < sourceArray.length; i++) {
        validator.push(!!sourceArray[i])
    }
 if (validator.includes(false)) {
     return false
 } else {
     return true 
  }
}

function reduceToAnyTrue(sourceArray) {
    let validator = []
    for (let i = 0; i < sourceArray.length; i++) {
        validator.push(!!sourceArray[i])
    }
 if (validator.includes(true)) {
     return true
 } else {
     return false 
  }
}