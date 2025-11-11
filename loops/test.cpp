#include <iostream>
using namespace std;
int main()
{
    int n = 4, m = n;
    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= 4-i+1; j++)
        {
            // if (j <= i)
                cout << "* ";
            // else
            //     cout << "  ";
        }
        m--;
        cout << endl;
    }
}