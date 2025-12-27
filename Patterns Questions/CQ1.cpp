// class question 1
#include <iostream>
using namespace std;

int main()
{
    int n = 4;
    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= n; j++)
        {
            cout << i << " ";
        }
        cout << endl;
    }
}
// Output:
// 1 1 1 1
// 2 2 2 2
// 3 3 3 3
// 4 4 4 4
// Explanation: The outer loop runs from 1 to n (4 in this case), controlling the rows. The inner loop also runs from 1 to n, controlling the columns. In each iteration of the