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
    int arr[5] = {10, 20, 30, 40, 50};
    int n = sizeof(arr) / sizeof(arr[0]);
    printArray(arr, n);
    int arr2[n];
    for (int i = n - 1; i >= 0; i--)
    {
        int j = n - 1 - i;
        arr2[i] = arr[j];
    }
    for (int i = 0; i < n; i++)
    {
        arr[i] = arr2[i];
    }
    printArray(arr, n);
    return 0;
    // Time Complexity: O(n)
    // Space Complexity: O(n)
    // where n is the number of elements in the array
    // End of the program
}