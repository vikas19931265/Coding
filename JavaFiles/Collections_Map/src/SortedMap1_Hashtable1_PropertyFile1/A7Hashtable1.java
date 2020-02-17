package SortedMap1_Hashtable1_PropertyFile1;

/*

Hashtable.
==============================

1. The underline data structure for Hashtable is "Hashtable".

2. Insertion order is not preserved and it is based on Hashcode of keys(object).

3. Duplicate keys are not allowed and values can be duplicated.

4. Heterogeneous objects are allowed for both keys and values.(big difference)

5. Null is not allowed  for both the keys and values otherwise we will get RuntimeException
   saying NullPointerException.

6. It implements Serializable and Cloneable interfaces but does not implement RandomAccess.

7. Every method present inside the Hashtable is Synchronized and hence Hastable object is
   Threadsafe.

8. Hashtable is the best choice if our frequent operation is "Search" operation.



Constructors in Hashtable.
=====================================

There are 4 constructors present for the Hashtable.

1.  Hashtable h = new Hashtable();

    Creates empty hastable object  with default initialcapacity of  11 and default fill ratio of 0.75.

2. Hashtable h = new Hashtable(int initialCapacity);

    Specifying our own capacity

3. Hashtable h = new Hashtable(int initialCapacity, float fillratio);

4. Hashtable h = new Hashtable (Map m)

        Interconversion between hashtable object and map object.



*/

//---------------------------------------------------------------***************************-----------------------------------------------------