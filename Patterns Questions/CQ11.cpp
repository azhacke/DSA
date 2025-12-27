// class Question 11
#include <iostream>
using namespace std;

int main()
{
    int n = 4;
    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= n + i - 1; j++)
        {
            if (j <= n - i)
            {
                cout << "  ";
            }
            else
            {
                cout << "* ";
            }
        }

        cout << endl;
    }
    for (int i = n - 1; i >= 1; i--)
    {
        for (int j = 1; j <= n + i - 1; j++)
        {
            if (j <= n - i)
            {
                cout << "  ";
            }
            else
            {
                cout << "* ";
            }
        }

        cout << endl;
    }
}
// Output:
//       * 
//     * * *
//   * * * * *
// * * * * * * *
//   * * * * *
//     * * *
//       *
// Explanation: The first outer loop runs from 1 to n, creating the upper centered triangle of asterisks. The second outer loop runs from n-1 to 1, creating the inverted centered triangle below it. The inner loops run from 1 to n + i - 1, controlling the columns. A space is printed if the current column index (j) is less than or equal to (n - i); otherwise, an asterisk is printed. This results in a diamond shape made of asterisks.