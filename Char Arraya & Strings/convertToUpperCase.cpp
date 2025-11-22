#include <iostream>
using namespace std;

void toUpperCase(char word[], int n)
{
    for (int i = 0; i < n; i++)
    {
        if (word[i] >= 'a' && word[i] <= 'z')
        {
            word[i] = word[i] + 'A' - 'a';
        }
    }
    cout << word;
}

int main()
{
    char word[] = "apple";

    toUpperCase(word, sizeof(word));
}