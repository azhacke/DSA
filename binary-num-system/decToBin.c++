#include<iostream>
using namespace std;

int main() {
    int decimal;
    cout << "enter a decimal number: ";
    cin >> decimal;
    int binary = 0, base = 1, temp = decimal;
    while (temp > 0)
    {
        int last_digit = temp % 2;
        binary += last_digit * base;
        base = base * 10; //binary number is in base 10 system
        temp = temp / 2;
    }
    
    cout << "binary equivalent: " << binary;
}