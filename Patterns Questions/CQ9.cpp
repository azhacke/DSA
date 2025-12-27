// class Question 9
#include <iostream>
using namespace std;

int main()
{
    int n = 4;
    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= n + i - 1; j++)
        {
            if(j <= n - i)
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
// Explanation: The outer loop runs from 1 to n, controlling the rows. The inner loop runs from 1 to n + i - 1, controlling the columns. A space is printed if the current column index (j) is less than or equal to (n - i); otherwise, an asterisk is printed. This creates a centered triangle of asterisks. 