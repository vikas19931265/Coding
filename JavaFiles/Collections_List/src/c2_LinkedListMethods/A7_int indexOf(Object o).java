/*
int indexOf(Object o)

    It is used to return the index in this list of the first occurrence of the 
    specified element, or -1 if the List does not contain this element.

        


*/


package c2_LinkedListMethods;

import java.util.*;

 class LikedList7 {
    
     public static void main(String[] args)
     {
         
         LinkedList a = new LinkedList();
         a.add("A");
         a.add("B");
         a.add("C");
         a.add("A");
         
         System.out.println(a.indexOf("A"));
         
     }
 }
/*
run:
0
BUILD SUCCESSFUL (total time: 0 seconds)


*/

//----------------------------------------------------------------------********************-------------------------------------------