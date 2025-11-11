#include <iostream>
using namespace std;

int main() {
    int n;
    long long res = 1; // Use long long for larger results
    // Input from user
    cout << "Enter the number: ";
    cin >> n;
    if(n == 0 || n == 1) {
        cout << "Factorial is 1" << endl;
        return 0;
    }
    if (n < 0) {
        cout << "Factorial is not defined for negative numbers." << endl;
        return 1;
    }
    for(int i = 1; i<=n; ++i) {
        res *= i;
    }

    cout << "Factorial is " << res << endl;
    return 0;
}