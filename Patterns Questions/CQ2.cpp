//class Question 2
#include <iostream>
using namespace std;    

int main()
{
    int n = 4;
    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= i; j++)
        {
            cout <<  "* ";
        }
        cout << endl;
    }
}
// Output:
// *
// * *
// * * *
// * * * *
// Explanation: The outer loop runs from 1 to n (4 in this case), controlling the rows. The inner loop runs from 1 to i, which increases the number of asterisks printed in each subsequent row. In each iteration of the inner loop, the current row number (i) is printed i times.