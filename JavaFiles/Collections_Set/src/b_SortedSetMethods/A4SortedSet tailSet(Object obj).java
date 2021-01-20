/*
SortedSet tailSet(Object obj)

  returns elements greater then or equal to obj in sorted manner.
*/
package b_SortedSetMethods;

import java.util.*;

 class TailsSet {
    

 public static void main(String[] args)
 {
     
     TreeSet s = new TreeSet();
     
     s.add(10);
     
     s.add(20);
     
     s.add(30);
     
     System.out.println(s.tailSet(10));
             
             }
 
}

/*
run:
[10, 20, 30]
BUILD SUCCESSFUL (total time: 0 seconds)

*/

//---------------------------------------------------------------********************************-------------------------------------------