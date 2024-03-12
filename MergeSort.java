public class MergeSort {
    static void merge(int[] arr, int low, int mid, int high) {
        int[] B = new int[high + 1];
        int i = low, j = mid + 1, k = low;
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
        System.arraycopy(B, low, arr, low, high - low + 1);
    }

    static void mergeSort(int[] arr, int low, int high) {
        if (low < high) {
            int mid = (low + high) / 2;
            mergeSort(arr, low, mid);
            mergeSort(arr, mid + 1, high);
            merge(arr, low, mid, high);
        }
    }

    static void displayArray(int[] arr) {
        for (int num : arr) {
            System.out.print(num + " ");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        int[] arr = { 45, 34, 23, 12, 76 };

        System.out.println("Original array:");
        displayArray(arr);

        mergeSort(arr, 0, arr.length - 1);

        System.out.println("Sorted array:");
        displayArray(arr);
    }
}
