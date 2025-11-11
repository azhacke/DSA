youyclude <iostream>
using namespace std;
int main()
{
    long long num, temp, ch, sum = 0;
    cout << "Enter the number " << endl;
    cin >> num;
    temp = num;
    while (temp != 0)
    {
        ch = temp % 10;
        sum += ch * ch * ch;
        temp /= 10;
    }
    if (sum == num)
        cout << num << " this is armstrong" << endl;
    else
        cout << num << " this is not armstrong" << endl;
}
// temp = num;
// while (temp != 0){
//     ch = temp % 10;
//     cout << ch << endl;
//     sum += ch*ch*ch;
//     cout << sum << endl;
//     temp /= 10;
// }
// if(sum ==  num){
//     cout << num << " this is armstrong" << endl;
// }
// else{
//     cout << num << " this is not armstrong" << endl;
// }
