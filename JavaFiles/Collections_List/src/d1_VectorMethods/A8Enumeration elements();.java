/*
Enumeration elements();

        To iterate through the collection elements inside the vector.

*/
package d1_VectorMethods;

import java.util.*;


 class Enumerat {
    

 public static void main(String[] args)
 {
     Vector v = new Vector();
     
     v.addElement(10);
     
     v.addElement(20);
 
     Enumeration e = v.elements();
     
     while(e.hasMoreElements())
         
     {
         System.out.println(e.nextElement());
     }
 
 
 }
 
}

/*
run:
10
20
BUILD SUCCESSFUL (total time: 0 seconds)


*/

//---------------------------------------------------------------------**********************-----------------------------------------