// 冒泡排序 n^2
function bubbleSort(arr) {
  let length = arr.length

  for (let i = 0; i < length; i ++) {
    for (let j = 0; j < length - 1; j ++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }

  return arr
}

// 选择排序 n^2
function selectSort(arr) {
  let length = arr.length
  let minIndex = 0

  for (let i = 0; i < length - 1; i ++) {
    minIndex = i
    for (let j = i; j < length; j ++) {
      if (arr[j] < arr[minIndex]) minIndex = j
    }

    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
  }

  return arr
}

// 插入排序 n^2
function insertSort(arr) {
  let length = arr.length

  for (let i = 0; i < length; i ++) {
    let j = i
    let target = arr[j]

    while(j > 0 && arr[j - 1] > target) {
      arr[j] = arr[j - 1]
      j --
    }

    arr[j] = target
  }

  return arr
}

// 快排 nlog(n)  ~  n^2
function quickSort(arr) {
  if (arr.length < 2) {
    return arr
  }

  const curr = arr[arr.length - 1]

  const left = arr.filter((v, i) => {
    return v <= curr && i != arr.length - 1
  })
  const right = arr.filter(v => v > curr)

  return [...quickSort(left), curr, ...quickSort(right)]
}


// 归并 nlog(n)
function mergeSort(arr) {
  if(arr.length < 2) return arr

  const mid = Math.floor(arr.length / 2)

  const left = mergeSort(arr.slice(0, mid))
  const right = mergeSort(arr.slice(mid))
  return merge(left, right)
}

function merge(left, right) {
  let res = []
  let i = 0
  let j = 0

  while(i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      res.push(left[i])
      i ++
    } else {
      res.push(right[j])
      j ++
    }
  }

  if (i < left.length) {
    res.push(...left.slice(i))
  }

  if (j < right.length) {
    res.push(...right.slice(j))
  }

  return res
}

const test = [1,3,2,5,1,4]

console.log(mergeSort(test))