#include <stdio.h>

void swap(int *a, int *b)
{
    int temp = *a;
    *a = *b;
    *b = temp;
}

void bubbleSort(int arr[], int size)
{
    int swapped;
    do
    {
        swapped = 0;
        for (int i = 0; i < size - 1; i++)
        {
            if (arr[i] > arr[i + 1])
            {
                swap(&arr[i], &arr[i + 1]);
                swapped = 1;
            }
        }
    } while (swapped);
}

void displayArray(int arr[], int size)
{
    for (int i = 0; i < size; i++)
    {
        printf("%d ", arr[i]);
    }
    printf("\n");
}

int main()
{
    int arr[] = {45, 34, 23, 12, 76};
    int size = sizeof(arr) / sizeof(arr[0]);

    printf("Original array: ");
    displayArray(arr, size);

    bubbleSort(arr, size);

    printf("Sorted array: ");
    displayArray(arr, size);

    return 0;
}
