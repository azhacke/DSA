#include <iostream>
#include <algorithm> //this is for built-in sort function
using namespace std;
int main()
{
    int n, arr[] = {5, 4, 3, 2, 1};
    n = sizeof(arr) / sizeof(int);
    sort(arr, arr + n); // built-in sort function
    for (int i = 0; i < n; i++)
    {
        cout << arr[i] << " ";
    }
}