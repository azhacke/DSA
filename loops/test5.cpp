#include <iostream>
using namespace std;
int main()
{
    int n = 5,i=1;
    for (int row = 1; row <= n; row++)
    {
        for (int col = 1; col <= row; col++)
            cout << i++ << " ";
        cout << endl;
    }
}