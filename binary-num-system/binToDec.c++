#include<iostream>
using namespace std;

int main() {
    int binary;
    cout << "enter a binary number: ";
    cin >> binary;
    int decimal = 0, base = 1, temp = binary;
    while (temp > 0) {
        int last_digit = temp % 10;
        decimal += last_digit * base;
        base = base * 2;//binary base is 2
        temp = temp / 10;
    }
    cout << "decimal equivalent: " << decimal;
}