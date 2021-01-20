/*
LinkedHashMap
============================================

1. It is the child class of HashMap.

2. It is exactly same as HashMap( including methods and constructors) except the following differences.


                HashMap                                                                          LinkedHashMap

1.The underline data structure is HashTable.                                       1. The underline data structure is combination of linkedList and 
                                                                                       HashTable(hybrid data structure).

2. Insertion order is not preserved and it is based on Hashcode of keys.           2.Insertion order is preserved

3. Introduced in 1.2 version                                                       3. Introduced in 1.4 version.






3. In the below HashMap program if we replace with the LinkedHashMap then output 
  will be in the order in which elements were inserted that is insertion order will be preserved.
   

[note]

    LinkedHashSet and LinkedHashMap are commonly used for developing cache  based applications.

*/
package Collections_HashMap_LinkedHashMap_WeakHashMap_IdentityHashMap2;


import java.util.*;
 
class HashMapDemo3119 {
    
    public static void main(String[] args)
    {
        HashMap hm = new HashMap();
        hm.put("bataki", 700);
        hm.put("balaih", 800);
        hm.put("venkatesh", 1000);
        hm.put("nagarjuna", 500);
     
        System.out.println(hm); // insertion order wont get preserved(OS  change may show variation)
        
LinkedHashMap lm3 = new LinkedHashMap();
       

        lm3.put("batak", 700);
        lm3.put("balaih", 800);
        lm3.put("venkatesh", 200);
        lm3.put("nagarjuna", 500);
        
        System.out.println(lm3); // insertion order will be preserved
    }
    
}

/*
run:
{bataki=700, balaih=800, venkatesh=1000, nagarjuna=500}
{batak=700, balaih=800, venkatesh=200, nagarjuna=500}
BUILD SUCCESSFUL (total time: 0 seconds)

*/

//--------------------------------------------------------------*********************************------------------------------------------------------------