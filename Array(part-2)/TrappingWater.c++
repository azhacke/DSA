#include <iostream>
using namespace std;

int rainWater(int arr[], int n)
{
    int leftMax[20000], rightMax[20000], miin[10000], sum = 0;
    leftMax[0] = arr[0]; //
    rightMax[n - 1] = arr[n - 1];
    // cout << " left max array : ";
    for (int i = 1; i < n; i++)
    {
        leftMax[i] = max(leftMax[i - 1], arr[i - 1]);
        // cout << leftMax[i] << " ";
    }
    // cout << endl
    //  << " right max array : ";
    for (int i = n - 2; i >= 0; i--)
    {
        rightMax[i] = max(rightMax[i + 1], arr[i + 1]);
        // cout << rightMax[i] << " ";
    }

    cout << endl;
    for (int i = 1; i < n - 1; i++)
    {
        miin[i] = min(leftMax[i], rightMax[i]);
        if ((miin[i] - arr[i]) > 0)
        {
            sum += miin[i] - arr[i];
        }
    }
    return sum;
}

int main()
{
    int heights[] = {5, 4, 3, 2, 5};
    int n = sizeof(heights) / sizeof(heights[0]);
    cout << "The rain water trapped is : " << rainWater(heights, n);

    return 0;
    //time complexity O(n);
}