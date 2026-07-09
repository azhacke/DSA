#include<iostream>
using namespace std;
int main()
{
    int n = 4;
    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= n; j++)
        {
            cout << j << " ";
        }
        cout << endl;
    }
    return 0;
}
// Output:
// 1 2 3 4  
// 1 2 3 4
// 1 2 3 4
// 1 2 3 4
// Explanation: The outer loop runs from 1 to n (4 in this case), controlling