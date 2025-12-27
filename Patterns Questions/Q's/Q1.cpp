// Question 1
#include <iostream>
using namespace std;

int main()
{
    int n = 5;
    int num = 1;
    for (int row = 1; row <= n; row++)
    {
        int start = (row % 2 == 0) ? 0 : 1; // Even row starts with 0, odd row with 1
        for (int col = 1; col <= row; col++)
        {
            cout << start;
            start = 1 - start; // Alternate between 1 and 0
        }

        cout << endl;
    }
}
// output:
// 1
// 01
// 101
// 0101
// 10101
