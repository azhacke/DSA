#include <iostream>
#include <cmath>
using namespace std;
int main()
{
    int n;
    cout << "Enter a number: ";
    cin >> n;
    if (n <= 1)
    {
        cout << n << " is not a prime number." << endl;
        return 0;
    }
    for (int j = 2; j <= n; j++)
    {
        bool isPrime = true;
        for (int i = 2; i < sqrt(j) + 1; i++)
        {
            if (j % i == 0)
            {
                isPrime = false;
                break;
            }
        }
        if (isPrime)
        {
            cout << j << " is a prime number." << endl;
        }
    }

    return 0;
}