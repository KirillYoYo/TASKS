// "Simple message     with  spaces" -> "Simple message with spaces"

const fn = (str) => {
  let right = 0;
  let arr = str.split('')

  for (let i = 0; i < arr.length; i++) {
    const ifSpaces = arr[i] === ' ' && arr[i + 1] === ' ' && arr[i + 1]
      if (!ifSpaces) {
        arr[right] = arr[i]
        right++
      }
  }

  return arr.splice(0, right).join('')
}

console.log('arr', fn('a  a   a    a   '))
console.log('arr', fn('Simple message     with  spaces'))