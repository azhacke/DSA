#include <iostream>
using namespace std;

int main() {
    int N;
    cout << "Enter N (N >= 2): ";
    cin >> N;

    int a = 0, b = 1; // first two Fibonacci numbers

    cout << "First " << N << " Fibonacci numbers: ";

    cout << a << " " << b << " "; // print first two

    for (int i = 3; i <= N; i++) {
        int c = a + b;   // next Fibonacci number
        cout << c << " ";
        a = b;           // shift forward
        b = c;
    }

    cout << endl;
    return 0;
}
