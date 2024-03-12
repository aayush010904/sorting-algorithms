function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function selectionSort(arr) {
  let size = arr.length;
  for (let i = 0; i < size - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < size; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    swap(arr, i, minIndex);
  }
}

function displayArray(arr) {
  console.log(arr.join(" "));
}

let arr = [45, 34, 23, 12, 76];

console.log("Original array:");
displayArray(arr);

selectionSort(arr);

console.log("Sorted array:");
displayArray(arr);
