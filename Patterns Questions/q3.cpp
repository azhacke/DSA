#include <iostream>
using namespace std;

int main() {
    int n = 5;
    for (int i = 1; i <= n; i++) {
        // Print leading spaces
        for (int space = 1; space <= n - i; space++) {
            cout << " ";
        }
        // Print descending numbers
        for (int j = i; j >= 1; j--) {
            cout << j;
        }
        // Print ascending numbers
        for (int j = 2; j <= i; j++) {
            cout << j;
        }
        cout << endl;
    }
    return 0;
}