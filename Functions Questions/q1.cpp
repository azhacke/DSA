/*Question 1 : 
Write a function to check if a number is 
a palindr ome in C++. 
(121 is a palindr ome, 321 is not)*/
#include<iostream>
using namespace std;

bool isPalindrome(int num){
    int original = num;
    int reversed = 0;
    while(num>0){
        int digit =  num%10;
        num = num/10;
        reversed = reversed * 10 +digit;
    }

    return original == reversed;
}

int main(){
    cout << isPalindrome(121);   
}