/*
int lastIndexOf(Object o) //LAST OCCURENCE
=========================================================================

    It is used to return the index in this list of the last occurrence of the 
    specified element, or -1 if the list does not contain this element


*/


package b2_ArrayListMethods;

import java.util.*;

 class ArrayListMethods {
    
     public static void main(String[] args)
     {
         
         ArrayList a = new ArrayList();
         a.add("A");
         a.add("B");
         a.add("C");
         a.add("A");
         
         System.out.println(a.lastIndexOf("A"));
         
     }
 }
/*
run:
3
BUILD SUCCESSFUL (total time: 0 seconds)


*/