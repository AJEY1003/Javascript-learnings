#include<iostream>
using namespace std;
int main(){
    int sal;
    int hra,da;
    cout<<"enter the basic salary"<<endl;
    cin>>sal;
    
    if(sal<=10000){
        hra=0.2*sal;
        da=0.8*sal;
       
    }
      else if(sal<=20000){
        hra=0.25*sal;
        da=0.9*sal;
      
    }
      if(sal>=20000){
        hra=0.3*sal;
        da=0.95*sal;
       
    }
     sal+=hra+da;
        cout<<sal;
    
}