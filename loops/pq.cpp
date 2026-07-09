#include <iostream>
#include <cmath>
using namespace std;
int main()
{

    int num;
    cout << "enter num to check prime : ";
    cin >> num;
    if (num <= 1)
    {
        cout << "not prime";
        return 0;
    }
        for (int j = 2; j <= sqrt(num); j++)
        {
            if (num % j == 0)
            {
                cout << "not prime ";
                return 0;
            }
        }
        cout << "prime";
    return 0;
}