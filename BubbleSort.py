def swap(a, b):
    temp = a
    a = b
    b = temp


def bubble_sort(arr):
    size = len(arr)
    swapped = True
    while swapped:
        swapped = False
        for i in range(size - 1):
            if arr[i] > arr[i + 1]:
                arr[i], arr[i + 1] = arr[i + 1], arr[i]
                swapped = True


def display_array(arr):
    for num in arr:
        print(num, end=" ")
    print()


if __name__ == "__main__":
    arr = [45, 34, 23, 12, 76]

    print("Original array:")
    display_array(arr)

    bubble_sort(arr)

    print("Sorted array:")
    display_array(arr)
