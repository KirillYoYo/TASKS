// "style that all" -> "style%20trat%20all"

const fn = (str) => {
  let arr = str.split('')
  const newLength = arr.filter((el) => el === ' ').length * 2  + arr.length
  let right = newLength - 1;

  for (let i = arr.length - 1; i > -1; i--) {

    if (arr[i] === ' ') {
      arr[right] = '0'
      arr[right - 1] = '2'
      arr[right - 2] = '%'
      right = right - 3
    } else {
      arr[right] = arr[i]
      right--
    }
  }

  return arr.join('')
}

console.log('arr', fn('a b'))
console.log('arr', fn(' a b '))