#include <iostream>
using namespace std;
int main()
{
    int sideLength;
    float pencil, pen, eraser;
    // Q1
    cout << "Enter your side length: ";
    cin >> sideLength;
    cout << "The area of the square is: " << sideLength * sideLength << endl;
    // Q2
    cout << "Enter the price of pencil, pen and eraser: ";
    cin >> pencil >> pen >> eraser;
    float totalPrice = pencil + pen + eraser;
    cout << "The total price is: " << totalPrice << endl;
    cout << "Price after 18% GST: " << totalPrice + (totalPrice * 0.18) << endl;
    //Q3
    int p, r, t;
    cout << "Enter principal, rate and time: ";
    cin >> p >> r >> t;
    float si = (p * r * t) / 100.0;
    cout << "The simple interest is: " << si << endl;
    
    return 0;
}