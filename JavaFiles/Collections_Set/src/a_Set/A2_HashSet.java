/*HashSet
===============================================================================

1. The underline data structure for HashSet is Hashtable.

2. Duplicate objects are not allowed.

3. Insertion order is not preserved and it is based on Hashcode of Objects.

4. Null insertion is possible but allowed only once as duplicates are not allowed.

5. Heterogenous objects are allowed.

6.Implements Serilizable and Cloneable but not RandomAccess interface.

7. Hashset is the best choice if our frequent operation is "Search Operation".


[important note]

    In HashSet duplicates are not allowed. If we are trying to insert duplicates then
we wont get any compile time or run time errors. add() method simply returns false.
    
        Example

                HashSet h = new HashSet();

                System.out.println(h.add("A")); // true.

                System.out.println(h.add("B")); // false.
                





HashSet Constructors();
========================================


1) HashSet h = new HashSet();

    This will create an empty HashSet object with the default initial capacity of 16. 
    and default fill ratio of 0.75.

2) HashSet h = new HashSet( int initialCapacity);

    This will create an empty HashSet object with specified initial capacity and default fill
    ratio of 0.75.


3) HashSet h = new HashSet(int initialCpacity, float fillRatio);

    This will create an empty HashSet object with specified initial capacity and specified fill
    ratio.

4) HashSet h = new HashSet( Collection c);

    This will create an equivalent HashSet for the given Collection.
    This constructor is ment for interconversion between Collection objects.


What is Fill Ratio/ Load factor??
====================================================

After filling how much ratio a new HashSet Object will be created , this ratio is called as Fill Ratio or 
Load factor. For example Fill Ratio 0.75 means after filling 75 percent ratio a new HashSet object will be created





*/
package a_Set;

import java.util.HashSet;


 class HashSetDemo {
    
     public static void main(String[] args)
     {
         HashSet h = new HashSet();
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
[null, D, B, C, 10, Z]
BUILD SUCCESSFUL (total time: 0 seconds)

*/

//-----------------------------------------------------------------------************************************----------------------------------------