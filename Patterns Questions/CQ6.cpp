// class Question 6
#include <iostream>
using namespace std;

int main()
{
    int n = 4;
    for (int row = 1; row <= n; row++)
    {
        for (int col = 1; col <= n; col++)
        {
            if (row == 1 || row == n || col == 1 || col == n)
            {
                cout << "* ";
            }
            else
            {
                cout << "  ";
            }
        }
        cout << endl;
    }
}
// Output:
// * * * *
// *     *
// *     *
// * * * *
// Explanation: The outer loop runs from 1 to n, controlling the rows. The inner loop also runs from 1 to n, controlling the columns. An asterisk is printed if the current position is in the first or last row, or in the first or last column; otherwise, a space is printed.