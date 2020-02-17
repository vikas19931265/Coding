/*
removeElementAt(int index)

    This will remove the element at the specified position
    

*/
package d1_VectorMethods;

import java.util.*;


 class RemoveElement {
    

 public static void main(String[] args)
 {
     Vector v = new Vector();
     
     v.addElement(10);
     
     v.addElement(20);
 
     v.removeElementAt(0);
     
     for(Object o : v)
     {
         System.out.println(o);
     }
 
 
 }
 
 
 
 }

/*
run:
20
BUILD SUCCESSFUL (total time: 0 seconds)

*/

//-------------------------------------------------------------------*********************---------------------------