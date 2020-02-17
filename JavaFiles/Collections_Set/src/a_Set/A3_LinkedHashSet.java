/* Linked HashSet
=====================================================================================

1. It is the child class of HashSet.

2. It is exactly same as HashSet ( including constructors and methods) except the following
   differences.



            HashSet                                   LinkedHashSet          
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

1. The underline data structure is HashTable        1. The underline data structure is combination
                                                       of LinkedList and Hashtable.     


2. Insertion order not preserved                    2. Insertion order is preserved.


3. Introduced in 1.2 version.                      3. Introduced in 1.4 version.    


In below program if we replace HashSet with LinkedHashSet then the insertion order will get
preserved.



[note]

    In general we can use LinkedHashSet to develop cache based application where duplicates are not 
    not allowed but the insertion order must be preserved.

*/
package a_Set;

import java.util.HashSet;
import java.util.LinkedHashSet;


 class LinkedHashSetDemo {
    
     public static void main(String[] args)
     {
         LinkedHashSet h = new LinkedHashSet();
         h.add("B");
         h.add("C");
         h.add("D");
         h.add("Z");
         h.add(null);
         h.add(10);
         
         System.out.println(h.add("Z")); //false
         System.out.println(h); // insertion order will not be preserved.
     }
 
 }

/*

run:
false
[B, C, D, Z, null, 10]
BUILD SUCCESSFUL (total time: 0 seconds)



*/

//--------------------------------------------------------------------****************************------------------------------------------------