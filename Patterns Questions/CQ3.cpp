//class Question 3
#include <iostream>
using namespace std;    

int main()
{
    int n = 4;
    for (int i = 0; i < n; i++)
    {
        for (int j = 1; j <= n-i; j++)
        {
            cout <<  "* ";
        }
        cout << endl;
    }
}
// Output:
// * * * *
// * * *
// * *
// *
// Explanation: The outer loop runs from 0 to n-1, controlling the rows. The inner loop runs from 1 to n-i, which decreases the number of asterisks printed in each subsequent row. inner loop, the current row number (i) is printed n times.