//class Question 5
#include <iostream>
using namespace std;    

int main()
{
    int n = 4;
    string str = "A";
    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= i; j++)
        {
            cout << str << " ";
            str = char(int(str[0]) + 1);
        }
        cout << endl;
    }
}