#include <iostream>
using namespace std;

int boubleSort(int arr[], int n)
{
    for (int i = 0; i < n; i++)
    {
        bool isSwap = false;
        {
            for (int j = 0; j < n - 1 - i; j++)
                // it works even j < n
                if (arr[j] > arr[j + 1])
                {
                    swap(arr[i], arr[i + 1]);
                    isSwap = true;
                }
        }
        if (!isSwap)
        {
            break;
        }
    }
    cout << "sorted Array : ";
    for (int i = 0; i < n; i++)
    {
        cout << arr[i] << " ";
    }
    return 0;
}

int main()
{
    int n;
    int arr[] = {
        5,
        4,
        3,
        2,
        1,
    };
    n = sizeof(arr) / sizeof(int);
    // cout << n;
    boubleSort(arr, n);
} // time complexity