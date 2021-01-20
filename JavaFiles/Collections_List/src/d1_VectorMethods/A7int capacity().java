/*
int capacity()

    This method returns the current capacity of the vector

*/
package d1_VectorMethods;

import java.util.*;


 class capacity {
    

 public static void main(String[] args)
 {
     Vector v = new Vector(); //Default capactiy of Vector is 10
     
     v.addElement(10);
     
     v.addElement(20);
 
     System.out.println(v.capacity());
     
  
 
 }
 
}
/*

run:
10
BUILD SUCCESSFUL (total time: 0 seconds)

*/

//------------------------------------------------------------------***********************---------------------------------------------------