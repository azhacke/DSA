// Question 1
#include<iostream>
using namespace std;

int main(){
    int x;
    int *ptr;
    x=7;
    ptr=&x; 
    cout << "The value of x is: " << *ptr << endl;
    cout << "The address of x is: " << &x << endl;
}