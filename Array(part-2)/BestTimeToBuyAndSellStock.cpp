#include <iostream>
using namespace std;

int bestTimeToBuyAndSellStock(int prices[], int n)
{
    int bestBuy[100000];
    bestBuy[0] = INT32_MAX;
    for (int i = 1; i < n; i++)
    {
        // bestBuy[i] is the minimum price to buy stock from day 0 to day i-1
        bestBuy[i] = min(bestBuy[i - 1], prices[i - 1]);
    }
    int maxProfit = 0;
    for (int i = 1; i < n; i++)
    {
        int profit = prices[i] - bestBuy[i];
        maxProfit = max(maxProfit, profit);
    }
    if (maxProfit > 0)
        return maxProfit;
    else
        return 0;
}

int main()
{
    int prices[] = {7, 1, 5, 3, 6, 4};
    int price[] = {7, 6, 4, 3, 1};
    int n = sizeof(price) / sizeof(price[0]);
    cout << bestTimeToBuyAndSellStock(price, n);
}