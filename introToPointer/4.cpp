#include <iostream>
using namespace std;

int binToDec(int binNum){
    int ans =0;
    int pow=1;
    while(binNum>0){
        int lastDigit = binNum%10;
        ans += lastDigit*pow;
        pow*=2;
        binNum/=10;
    }
    return ans;
}

int  main(){
    int n;
    cout << "Enter a binary number: ";
    cin >> n;
    cout << "Decimal equivalent: " << binToDec(n) << endl;
    return 0;
}