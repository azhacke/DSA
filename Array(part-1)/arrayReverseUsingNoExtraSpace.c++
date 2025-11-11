#include <iostream>
using namespace std;

void printArray(int arr[], int n)
{
    for (int i = 0; i < n; i++)
    {
        cout << arr[i] << " ";
    }
    cout << endl;
}

int main()
{
    int arr[] = {10, 20, 30, 40, 50, 60};
    int n = sizeof(arr) / sizeof(arr[0]);
    printArray(arr, n);
    int start = 0;
    int end = n - 1;
    while (start < end)
    {
        // Swap arr[start] and arr[end]
        int temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        // swap(arr[start], arr[end]); // Alternatively, using STL swap function
        start++;
        end--;
    }
    printArray(arr, n);
    return 0;
    // Time Complexity: O(n)
    // Space Complexity: O(1)
}