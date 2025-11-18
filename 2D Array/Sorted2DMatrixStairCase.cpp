#include <iostream>
using namespace std;

bool search(int arr[][4], int key, int n)
{
    int i = 0, j = n - 1;
    while (i < n && j >= 0)
    {
        int cell = arr[i][j];
        if (arr[i][j] == key)
        {
            cout << "found at cell (" << i << "," << j << ")\n";
            return true;
        }
        else if (arr[i][j] > key)
        {
            j--;
        }
        else
        {
            i++;
        }
    }
    cout << "Element not found in this array .";
    return false;
}

int main()
{
    int matrix[4][4] = {{10, 20, 30, 40},
                        {15, 25, 35, 45},
                        {27, 29, 37, 48},
                        {32, 33, 39, 50}};
    cout << search(matrix,69,4);
    return 0;
}