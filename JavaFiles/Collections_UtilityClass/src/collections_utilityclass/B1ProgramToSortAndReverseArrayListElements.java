/*

Program to reverse the elements of array List in ascending and descending order
=======================================================================================

*/
package collections_utilityclass;

import java.util.*;

class Reversing_Unreversing
{
    public static void main(String[] args)
    {
        
        ArrayList a = new ArrayList();
        
        a.add(10);
        
        a.add(30);
        
        a.add(15);
        
        a.add(90);
        
        System.out.println("Origninal Order  "+a);
        
        Collections.sort(a);
        
        System.out.println("Order after sorting by default  "+a);
        
        Collections.reverse(a);
        
        System.out.println("Order after reversing  "+ a);
        
        
        
    }
    
}

/*
run:
Origninal Order  [10, 30, 15, 90]
Order after sorting by default  [10, 15, 30, 90]
Order after reversing  [90, 30, 15, 10]
BUILD SUCCESSFUL (total time: 0 seconds)

*/

//--------------------------------------------------------------***************************--------------------------------------------------