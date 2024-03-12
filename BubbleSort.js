function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function bubbleSort(arr) {
  let size = arr.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < size - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
        swapped = true;
      }
    }
  } while (swapped);
}

function displayArray(arr) {
  console.log(arr.join(" "));
}

let arr = [45, 34, 23, 12, 76];

console.log("Original array:");
displayArray(arr);

bubbleSort(arr);

console.log("Sorted array:");
displayArray(arr);
