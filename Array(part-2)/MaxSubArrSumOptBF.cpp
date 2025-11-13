#include <iostream>
// #define INT_MIN -2147483648
using namespace std;

void MaxSubArraysOpt(int arr[], int n)
{
    int maxSum = INT32_MIN;
    for (int start = 0; start < n; start++)
    {
        int currSum = 0;
        for (int end = start; end < n; end++)
        {

            currSum += arr[end];
            cout << currSum << ",";
            maxSum = max(maxSum, currSum);
        }
        cout << endl;
    }
    cout << "Maximum Subarray Sum (Optimized Brute Force): " << maxSum << endl;
}

int main()
{
    int arr[] = {2, -3, 6, -5, 4, 2};
    int n = sizeof(arr) / sizeof(arr[0]);
    MaxSubArraysOpt(arr, n);
    return 0;
}