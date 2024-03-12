def swap(a, b):
    temp = a
    a = b
    b = temp


def selection_sort(arr):
    size = len(arr)
    for i in range(size - 1):
        min_index = i
        for j in range(i + 1, size):
            if arr[j] < arr[min_index]:
                min_index = j
        arr[i], arr[min_index] = arr[min_index], arr[i]


def display_array(arr):
    for num in arr:
        print(num, end=" ")
    print()


if __name__ == "__main__":
    arr = [45, 34, 23, 12, 76]

    print("Original array:")
    display_array(arr)

    selection_sort(arr)

    print("Sorted array:")
    display_array(arr)
