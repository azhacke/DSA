#include<iostream>
using namespace std;

int main(){
    int number ,temp;
    int dig ,sum = 0;
    cout << "Enter  number: ";
    cin >> number;
    temp = number;
    
    while(number > 0){
        dig = number % 10;//last dig
        number /= 10; //removing last dig
        sum += dig*dig*dig;//cube of last dig
    }
    if(sum == temp){
        cout << "Armstrong Number";
    }
    else{
        cout << "Not an Armstrong Number";
    }
    return 0;
}