#include <iostream>
using namespace std;
int binNum[32], i, p = 0;
int decToBin(int decimalNum)
{
    int n = decimalNum;
    int pow = 1;
    int binNum = 32;
    while (n > 0)
    {
        int rem = n % 2;
        binNum += rem * pow;
        pow = pow * 10;
        n = n / 2 ;
    }
    cout << "Binary of " << decimalNum << "= " << binNum;
    return 0;
}

int main()
{
    int n;
    cout << "Enter a decimal number: ";
    cin >> n;
    decToBin(n);
    
    cout << endl;
    return 0;
}