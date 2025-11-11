#include <iostream>
using namespace std;

int binarySearch(int *arr, int n, int key)
{
    int start = 0;
    int end = n - 1;
    while (start <= end)
    {
        int mid = (start + end) / 2;
        if (arr[mid] == key)
        {
            cout << "Element found at index " << mid << " and element is  " << arr[mid] << endl;
            return arr[mid];
        }
        else if (arr[mid] < key)
        {
            start = mid + 1; // search in right half
        }
        else
        {
            end = mid - 1; // search in left half
        }
    }
    cout << "Element not found" << endl;
}

int main()
{
    int n;
    cout << "enter the no of elements in array: ";
    cin >> n;
    int arr[n];
    cout << "enter the elements in sorted order: ";
    for (int i = 0; i < n; i++)
    {
        cin >> arr[i];
    }
    int key;
    cin >> key;
    binarySearch(arr, n, key);
    return 0;
    // Time Complexity: O(log n)
    // Space Complexity: O(1)
    // this is iterative approach of binary search
}