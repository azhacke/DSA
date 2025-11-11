#include <iostream>
using namespace std;
int main()
{
    int n, a=0, b=1;
    cout << "Enter the number of Fibonacci terms: ";
    cin >> n;
    for (int i = 0; i < n; i++)
    {
        cout << a << "  ";
        int temp = b;
        b = a + b;
        a = temp;
    }
}