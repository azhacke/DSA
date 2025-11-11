#include <iostream>
using namespace std;
int main(){
    int n,sum=0,temp,digit;
    cout << "Enter the number : ";
    cin >> n;
    temp = n;
    // while(temp!=0){
    //     ld = temp % 10;
    //     temp = temp / 10;
    //     sum += ld*ld*ld;
    // }
    // for(digit=0; temp!=0; digit++){
    //     ld = temp % 10;
    //     temp /= 10;
    //     sum += ld*ld*ld;
    // }
    for(digit=0; temp!=0; temp /= 10){
        digit = temp % 10;
        sum += digit*digit*digit;
    }
    if(sum == n){
        cout << n << " is an Armstrong number." << endl;
    }
    else{
        cout << n << " is not an Armstrong number." << endl;
    }
    return 0;
}   