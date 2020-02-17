/*
void addFirst(Object o)

        It is used to insert the given element at the beginning of a list.

*/
package c2_LinkedListMethods;

import java.util.*;

 class Linkedlist1 {
    
     public static void main(String[] args)
     {
         LinkedList a = new LinkedList();
    
         a.add(1);
         a.add(2);
         a.add(3);
         
         a.addFirst("Vikas"); // This will insert the element a the first place ,shifting all the
                              // rest of the elements to the right.
         
         System.out.println(a);
         
     }
 
 
 
 
 }
/*
run:
[Vikas, 1, 2, 3]
BUILD SUCCESSFUL (total time: 0 seconds)


*/