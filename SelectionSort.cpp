#include <iostream>
using namespace std;

void swap(int *a, int *b)
{
    int temp = *a;
    *a = *b;
    *b = temp;
}
void selectionSort(int arr[], int size)
{
    for (int i = 0; i < size - 1; i++)
    {
        int min_index = i;
        for (int j = i + 1; j < size; j++)
        {
            if (arr[j] < arr[min_index])
            {
                min_index = j;
            }
        }
        swap(&arr[i], &arr[min_index]);
    }
}
void displayArray(int arr[], int size)
{
    for (int i = 0; i < size; i++)
    {
        cout << arr[i] << " ";
    }
    cout << endl;
}

int main()
{
    int arr[] = {45, 34, 23, 12, 76};
    int size = sizeof(arr) / sizeof(arr[0]);

    cout << "Original array: " << endl;
    displayArray(arr, size);

    selectionSort(arr, size);

    cout << "Sorted array: " << endl;
    displayArray(arr, size);

    return 0;
}
