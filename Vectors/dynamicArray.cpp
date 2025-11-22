#include <iostream>
using namespace std;

void func() // static array
{
    int arr[100] = {1, 2, 3, 4, 5};
    for (int i = 0; i < 5; i++)
    {
        cout << arr[i] << " "; // memory is allocated in stack....
    }
    cout << endl;

    return;
}

void func2() // dynamic array
{
    int size;
    cin >> size;
    int *ptr = new int[size];
    // when the function control goes to main
    //  ptr destorys in funCtions stack memory
    // dynamically allocated memory created in heap memory
    //  the heap dynamically allocated memory leaks
    // dynamically allocated and does not delete automatially
    // use delete[] ptr; //so we this
    int x = 0;
    for (int i = 0; i < size; i++)
    {
        ptr[i] = x;
        cout << ptr[i] << " ";
        x++;
    }
    delete[] ptr;
    return;
}

void funcInt()
{
    int *ptr = new int;
    *ptr = 999;
    cout << *ptr << endl;
    delete ptr;
}
int main()
{
    funcInt();
    // int arr[100] = {1, 2, 3, 4, 5};//static memory allocations
    func();
    // cout << arr[0] << endl;//destroys as function ends
    // int size;
    // cin >> size;

    // int *ptr = new int[size]; // created pointer in main
    // creates dynamcALLY allocated array in heap memory

    func2();

    return 0;
}