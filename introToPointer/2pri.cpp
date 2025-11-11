#include <iostream>
using namespace std;
bool IsPrime(int n)
{
        for (int i = 2; i < n; i++)
        {
            if (n % i == 0)
            {
                return false;
            }
        }
    return true;
}
int PrintPrimes(int n)
{
    for (int i = 2; i <= n; i++)
    {
        if (IsPrime(i))
        {
            cout << i << " ";
        }
    }
    cout << endl;
    return 0;
}
int main()
{
    int n;
    cout << "Enter the nth number: ";
    cin >> n;
   PrintPrimes(n);
    
    return 0;
}