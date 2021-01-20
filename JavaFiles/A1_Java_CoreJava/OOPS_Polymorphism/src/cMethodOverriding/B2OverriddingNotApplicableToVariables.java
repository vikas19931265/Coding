/*

Overridding concept is not applicable to variables
==============================================================


1. Variables resolution always taken care by compiler based on reference types.

2. This is irrespective of whether the variable is static or non-static

3. Overriding concept is applicable only for methods but not for variables.


*/
package cMethodOverriding;


 class Par {
    
     int x=888;
 
 
 }

class Chi extends Par
{
    int x=999;
}


class Testing
{
    public static void main( String[] args)
    {
        Par p= new Par();
        System.out.println(p.x);
        
        Chi c= new Chi();
        System.out.println(c.x);
    
        Par p1= new Chi();
        System.out.println(p1.x);
    
    }
} 

/*
run:
888
999
888
BUILD SUCCESSFUL (total time: 0 seconds)

*/

//--------------------------------------------------------------------------*********-------------------------------------------------------------