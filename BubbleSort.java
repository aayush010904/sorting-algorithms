public class BubbleSort {
    static void swap(int[] arr, int a, int b) {
        int temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    }

    static void bubbleSort(int[] arr) {
        int size = arr.length;
        boolean swapped;
        do {
            swapped = false;
            for (int i = 0; i < size - 1; i++) {
                if (arr[i] > arr[i + 1]) {
                    swap(arr, i, i + 1);
                    swapped = true;
                }
            }
        } while (swapped);
    }

    static void displayArray(int[] arr) {
        for (int num : arr) {
            System.out.print(num + " ");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        int[] arr = {45, 34, 23, 12, 76};

        System.out.println("Original array:");
        displayArray(arr);

        bubbleSort(arr);

        System.out.println("Sorted array:");
        displayArray(arr);
    }
}
