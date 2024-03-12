function merge(arr, low, mid, high) {
  let i = low,
    j = mid + 1,
    k = low;
  let B = new Array(high + 1);
  while (i <= mid && j <= high) {
    if (arr[i] < arr[j]) {
      B[k] = arr[i];
      i++;
    } else {
      B[k] = arr[j];
      j++;
    }
    k++;
  }
  while (i <= mid) {
    B[k] = arr[i];
    k++;
    i++;
  }
  while (j <= high) {
    B[k] = arr[j];
    k++;
    j++;
  }
  for (let i = low; i <= high; i++) {
    arr[i] = B[i];
  }
}

function mergeSort(arr, low, high) {
  if (low < high) {
    let mid = Math.floor((low + high) / 2);
    mergeSort(arr, low, mid);
    mergeSort(arr, mid + 1, high);
    merge(arr, low, mid, high);
  }
}

function displayArray(arr) {
  console.log(arr.join(" "));
}

let arr = [45, 34, 23, 12, 76];

console.log("Original array:");
displayArray(arr);

mergeSort(arr, 0, arr.length - 1);

console.log("Sorted array:");
displayArray(arr);
