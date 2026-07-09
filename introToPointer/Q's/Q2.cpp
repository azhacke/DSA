// Question 2: What will be the output of the following code?
#include <iostream>
using namespace std;

void multiplyByTwo(int &a, int &b, int &c)
{
    a *= 2;
    b *= 2;
    c *= 2;
}
int main()
{
    int x = 1, y = 2, z = 3;
    cout << x << " " << y << " " << z << endl;
    multiplyByTwo(x, y, z);
    cout << x << " " << y << " " << z << endl;
    return 0;
}