// AAAABССDDD -> A4BC2D3

const fn = (str) => {
  let left = 0;
  let right = 0;
  const arr = str.split('');

  for (let i = 0; i < arr.length + 1; i++) {
    if (arr[i] === arr[i - 1]) {
      left++
    } else {
      if (left) {
        arr[right] = left + 1
        right++;
        arr[right] = arr[i]
        right++;
        left = 0;
      } else {
        arr[right] = arr[i]
        right++;
      }
    }
  }

  return arr.splice(0, right).join()
}

console.log('arr', fn('AAAABBC'))
console.log('arr', fn('abcccc'))