/*Question 3 : Write a function which takes 2 numbers as parameters (a & b) and
outputs : a^2 + b^2 + 2*ab.*/
#include <iostream>
#include <cmath>
using namespace std;

int calcs(int a, int b)
{

    return a * a + b * b + 2 * a * b;
}

int main()
{
    cout << calcs(10, 20);
}