#include <iostream>
#include <cstring>
using namespace std;

int main() {
    // strlen
    char str1[] = "hello";
    cout << "Length of str1: " << strlen(str1) << endl;

    // strcpy
    char str2[20];
    strcpy(str2, str1);
    cout << "Copied str1 to str2: " << str2 << endl;

    // strcat
    char str3[30] = "world ";
    strcat(str3, str2);
    cout << "Concatenated str3 + str2: " << str3 << endl;

    // strcmp
    char str4[] = "hello";
    int cmp = strcmp(str1, str4);
    cout << "strcmp(str1, str4): " << cmp << " (0 means equal)" << endl;

    // strchr
    char* ch = strchr(str1, 'l');
    if (ch) cout << "First 'l' in str1: " << ch << endl;

    // strstr
    char str5[] = "programming";
    char* sub = strstr(str5, "gram");
    if (sub) cout << "Substring 'gram' in str5: " << sub << endl;

    // memset
    char buffer[10];
    memset(buffer, '*', 5);
    buffer[5] = '\0';
    cout << "Buffer after memset: " << buffer << endl;

    // memcmp
    char a[] = "abc";
    char b[] = "abd";
    int memcmp_result = memcmp(a, b, 3);
    cout << "memcmp(a, b, 3): " << memcmp_result << " (negative means a < b)" << endl;

    return 0;
}