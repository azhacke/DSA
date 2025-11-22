#include <iostream>
using namespace std;
int* func2() // dynamic array
{
    int *ptr = new int;
    *ptr = 1200;
    cout << "ptr points to " << *ptr << endl;
    // delete ptr;//deleted here 
    return ptr;
}

int main()
{
    int *x = func2();

    cout << *x << endl;
    return 0;
}