#include <iostream>
using namespace std;

void selectionSort(int arr[], int n)
{ // selecting Smallest element every time
    for (int i = 0; i < n - 1; i++)
    {//0
        int minIdx = i;
        for (int j = i + 1; j < n; j++)
        {
            if (arr[j] < arr[minIdx])
            {
                minIdx = j;
            }
        }
        swap(arr[j], arr[i]);
    }
    for (int i = 0; i < n; i++)
    {
        cout << arr[i] << " ";
    }
}

int main()
{
    int n, arr[] = {5, 4, 3, 2, 1};
    n = sizeof(arr) / sizeof(int);
    selectionSort(arr, n);
}
