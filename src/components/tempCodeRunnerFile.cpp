#include <iostream>
#include <math.h>

using namespace std;

int main()
{
int  m, n, a[10][10];
cout << "Satrlar sonini kiriting \nm=";
cin >> m;
cout << "Ustunlar sonini kiriting \nn=";
cin >> n;
cout <<"Massiv elementlarini kiriting \n";
for(int satr = 0; satr < m ; satr++)
for(int ustun = 0; ustun < n; ustun++)
{
cout << "a[" << satr << "][" << ustun << "]="; 
cin >> a[satr][ustun];
}
for(int satr = 0; satr < m; satr++)
{
for(int ustun = 0; ustun < n; ustun++)
cout << a[satr][ustun] << "\t"; cout<<"\n";
}
system ("pause");
return 0;
}