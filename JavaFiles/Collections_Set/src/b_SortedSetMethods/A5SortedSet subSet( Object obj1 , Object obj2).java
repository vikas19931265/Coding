/*
SortedSet subSet( Object obj1 , Object obj2)

    returns elements greater then or equal to obj1 and less then obj2.
*/
package b_SortedSetMethods;

import java.util.*;

 class SubSet {
    

 public static void main(String[] args)
 {
     
     TreeSet s = new TreeSet();
     
     s.add(10);
     
     s.add(20);
     
     s.add(30);
     
     s.add(50);
     
     System.out.println(s.subSet(10, 50));
             
   
 
 
 }
 
}

/*
run:
[10, 20, 30]
BUILD SUCCESSFUL (total time: 0 seconds)

*/

//------------------------------------------------------------------*****************************----------------------------------------------