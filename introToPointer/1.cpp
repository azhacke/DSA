#include <iostream>
#define printf(...) (0)
using namespace std;

int factorial(int n)
{
    int fact = 1;
    for (int i = 1; i <= n; i++)
    {
        fact *= i;
    }
    return fact;
}

int main()
{
    int num, r;
    cout << "this is to calculate the n C r " << endl;
    cout << "Enter the n value : ";
    cin >> num;
    cout << "Enter r value : ";
    cin >> r;
    int nCr = factorial(num) / (factorial(r) * factorial(num - r));
    cout << "The value of " << num << " C " << r << " is " << nCr << endl;
    return 0;
}