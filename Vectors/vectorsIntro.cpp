#include <iostream>
#include <vector>
using namespace std;

int main()
{
    vector<int> vec1 = {1, 2, 3, 4};
    vector<int> vec2(10,-1);//constructor all ten ceated and initilized to -1
    cout << vec1.size() << "\n";
    for (int i = 0; i < vec2.size(); i++)
    {
        cout << vec2[i] << " ";// 
    }
    
    return 0;
}