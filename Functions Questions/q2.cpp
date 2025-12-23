/*Question 2 : Write a function to calculate the sum of digits of a number.*/
#include <iostream>
using namespace std;

int sumOfDig(int num)
{
    int dig = 0;
    while (num >= 0)
    {
        num /= 10;
        dig++;
        if(num== 0)
            break;
    }
    return dig;
}

int main()
{
    cout << sumOfDig(123);
}