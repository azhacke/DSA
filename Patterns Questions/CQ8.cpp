// class Question 8
#include <iostream>
using namespace std;

int main()
{
    int n = 5;
    int num = 1;
    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= i ; j++)
        {
            cout << num++ << " ";
        }
        
        cout << endl;
    }
}
// Output:
// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15
// Explanation: The outer loop runs from 1 to n, controlling the rows. The inner loop runs from 1 to i, controlling the columns. A variable num is initialized to 1 before the loops and is incremented with each print, resulting in a continuous sequence of numbers across the rows.