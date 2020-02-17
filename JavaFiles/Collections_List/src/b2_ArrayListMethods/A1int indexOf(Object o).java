/*
int indexOf(Object o) // FIRST OCCURENCE

    It is used to return the index in this list of the first occurrence of the 
    specified element, or -1 if the List does not contain this element.

        


*/


package b2_ArrayListMethods;

import java.util.*;

 class ArrayListMethods2 {
    
     public static void main(String[] args)
     {
         
         ArrayList a = new ArrayList();
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

//-----------------------------------------------------------------******************-------------------------------