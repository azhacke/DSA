#include <iostream> 
using namespace std;

int main(){
    int a = 10;
    int *ptr = &a;
    int **ptr2 = &ptr;
    cout << "Value of a address: " << &a << endl;
    cout << "Value of ptr: " << ptr << endl;
    cout << "Value of ptr2: " << ptr2 << endl;
    return 0;
}