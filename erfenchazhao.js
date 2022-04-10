function search(arr, target) {
  let left = 0
  let right = arr.length - 1
  let mid = Math.floor((left + right) / 2)
  while(left <= right && arr[mid] != target) {
    if (arr[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
    mid = Math.floor((left + right) / 2)
  }

  return mid
}


const a = [1,3,5,9,33,56,78,123,444,654,999]

const test = search(a, 56)

console.log(test)