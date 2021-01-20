/* Sorted Map
================================================

1.It is the child interface of MAP. If we want to represent a group of key value of pairs
 according to some sorting order or keys  then we should go for the SortedMap.


2. Sorting is based upon the key but not based upon the values.

3. SortedMap defines the following specific methods.

a. Object firstKey();

b. Object lastkey();

c. SortedMap headMap(Object key)

d. SortedMap tailMap(Object key)

e. SortedMap subMap(Object key1, Object key2)

f. Comparator comparator()

101 A

103 B

104 C

107 D

125 E

136 F


a. firstKey()---->101

b. lastKey()------> 136

c  headMap(107)----101=A, 103=B, 104=c

d. tailMap(107)------> 103=B, 104=C, 107=D

e. comparator()...This will return comparator object. If we are using default sorting technique then
                  we will get null.







*/

//Proof- that SortedMap object is not created instead its implemented class object is created.
package SortedMap1_Hashtable1_PropertyFile1;

import java.util.*;

class Sample12

{
    
    public static void main(String[] args)
    {
        
        TreeMap m = new TreeMap();
        
        m.put(101, "vikas");
        
        m.put(102,"dravid");
        
        
      SortedMap m1 = m.headMap(102);
      
    System.out.println(m1.getClass());
    }


}

/*

run:
class java.util.TreeMap$AscendingSubMap
BUILD SUCCESSFUL (total time: 0 seconds)

*/

//------------------------------------------------------------------***************************------------------------------------------------