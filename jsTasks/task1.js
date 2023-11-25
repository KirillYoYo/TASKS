// [1,2,3,0,0,4,0,0,0,5,0] - [1,2,3,4,5]

const fn = (arr) => {
  let left = 0;
  let right = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[right] = arr[i]
      right++
    } else {
      left++
    }
  }

  return arr.splice(0, arr.length - left)
}

console.log('arr', fn([1,2,3,0,0,0,4,0,5,0]))
console.log('arr', fn([0,2,3,0,0,0,4,0,5]))
console.log('arr', fn([0,0,3,0,0,0,4,0,5,0]))