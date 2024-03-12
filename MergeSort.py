def merge(arr, low, mid, high):
    i, j, k = low, mid + 1, low
    B = [0] * (high + 1)
    while i <= mid and j <= high:
        if arr[i] < arr[j]:
            B[k] = arr[i]
            i += 1
        else:
            B[k] = arr[j]
            j += 1
        k += 1
    while i <= mid:
        B[k] = arr[i]
        k += 1
        i += 1
    while j <= high:
        B[k] = arr[j]
        k += 1
        j += 1
    for i in range(low, high + 1):
        arr[i] = B[i]


def merge_sort(arr, low, high):
    if low < high:
        mid = (low + high) // 2
        merge_sort(arr, low, mid)
        merge_sort(arr, mid + 1, high)
        merge(arr, low, mid, high)


def display_array(arr):
    for num in arr:
        print(num, end=" ")
    print()


if __name__ == "__main__":
    arr = [45, 34, 23, 12, 76]

    print("Original array:")
    display_array(arr)

    merge_sort(arr, 0, len(arr) - 1)

    print("Sorted array:")
    display_array(arr)
