#include <iostream>
using namespace std;
int main()
{
    int n = 5;
    char ch = 65; // ASCII value of 'a' is 97 and 'A' is 65
    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= i; j++)
        {
            cout << ch++ << " ";
        }
        cout << endl;
    }
}