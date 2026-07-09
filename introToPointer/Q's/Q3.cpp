// Question 2: What will be the output of the following code?
#include <iostream>
using namespace std;

int main()
{
    int a = 32;
    int *ptr = &a;

    char ch = 'A'; // ASCII value of 'A' is 65
    char &cho = ch;

    cho += a;   // 65 + 32 = 97
    *ptr += ch; // 97+32=129
    cout << a << " " << ch << endl;
    return 0;
}
// Output:
// 129 a
// Explanation:
// 1. We start with an integer variable 'a' initialized to 32 and a pointer 'ptr' pointing to 'a'.
// 2. We have a character variable 'ch' initialized to 'A', which has
//    an ASCII value of 65. We also have a reference 'cho' to 'ch'.
// 3. When we do 'cho += a;', it adds the value of 'a' (32) to the ASCII value of 'ch' (65), resulting in 'ch' being updated to 97, which corresponds to the character 'a'.
// 4. Next, we do '*ptr += ch;'. Here, 'ch' now has the value 97. So we add 97 to the current value of 'a' (which is 32), resulting in 'a' being updated to 129.
// 5. Finally, we print the values of 'a' and 'ch', which are 129 and 'a', respectively.