#include <iostream>
#include <cmath>
using namespace std;
int main()
{
    int n;
    cout << "Enter a number: ";
    cin >> n;
    for (int num = 2; num <= n; num++)
    {
        bool isPrime = true; // Assume i is prime until proven otherwise

        for (int j = 2; j <= sqrt(num); j++)
        {
            if (num % j == 0)
            {
                isPrime = false;
                // cout << num << " is not prime " << endl;
                break;
            }
        }
        if (isPrime)
        {
            cout << num << " is prime " << endl;
        }
    }
    return 0;
}