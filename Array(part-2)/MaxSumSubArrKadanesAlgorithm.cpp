#include <iostream>
// #define INT_MIN -2147483648
using namespace std;

void MaxSubArraysOpt(int arr[], int n)
{
    int maxSum = INT32_MIN;
    int currsum=0;
    for (int start = 0; start < n; start++)
    {
        currsum += arr[start];
        maxSum = max(maxSum, currsum);
        if (currsum < 0)
        {
            currsum = 0;
        }
    }
    cout << "Maximum Subarray Sum (kadane's Algorithm): " << maxSum << endl;
}

int main()
{
    int arr[] = {2, -3, 6, -5, 4, 2};
    int n = sizeof(arr) / sizeof(arr[0]);
    MaxSubArraysOpt(arr, n);
    return 0;
}