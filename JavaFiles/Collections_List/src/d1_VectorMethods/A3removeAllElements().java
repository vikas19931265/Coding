/*
removeAllElements()

    This will remove all the elements from the collection. This is like a clear() method.
    

*/
package d1_VectorMethods;

import java.util.*;


 class RemoveAllElement {
    

 public static void main(String[] args)
 {
     Vector v = new Vector();
     
     v.addElement(10);
     
     v.addElement(20);
 
     v.removeAllElements();
     
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

//----------------------------------------------------------------------*******************---------------------------------