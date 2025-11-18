#include <iostream>
using namespace std;

// Template function to accept any fixed-size 2D array
template <size_t rows, size_t cols>
void printM(int (&matrix)[rows][cols])
{
    int srow = 0, scol = 0, erow = rows - 1, ecol = cols - 1;

    while (srow <= erow && scol <= ecol)
    {
        // Top row: left to right
        for (int i = scol; i <= ecol; i++)
            cout << matrix[srow][i] << " ";

        // Right column: top to bottom
        for (int i = srow + 1; i <= erow; i++)
            cout << matrix[i][ecol] << " ";

        // Bottom row: right to left
        if (srow < erow)//this or //imp
        {
            for (int i = ecol - 1; i >= scol; i--)
                // this
                // if(scol == ecol) break; //imp
                cout << matrix[erow][i] << " ";
        }

        // Left column: bottom to top
        if (scol < ecol)//this or  //imp
        {
            for (int i = erow - 1; i > srow; i--)
                //this
                // if(scol == ecol) break; //imp
                cout << matrix[i][scol] << " ";
        }

        srow++;
        scol++;
        erow--;
        ecol--;
    }
}

int main()
{
    int matrix[4][4] = {
        {1, 2, 3, 4},
        {5, 6, 7, 8},
        {9, 10, 11, 12},
        {13, 14, 15, 16}};

    printM(matrix);
    return 0;
}