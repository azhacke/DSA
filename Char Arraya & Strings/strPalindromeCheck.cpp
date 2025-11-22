#include <iostream>
using namespace std;

bool isPalindrome(char str[], int n)
{
    int st = 0, end = n - 1;
    while (st < end)
    {
        if (str[st++] != str[end--])
        {
            cout << "no a valid palindrome \n";
            return false;
        }
    }
    cout << str << "  a valid palindrome \n";
    return true;
}

int main()
{
    char str[] = "racecar";
    isPalindrome(str, sizeof(str) - 1);
}