/* HashMap
==================================================================================

1. The underline data structure for HashMap is Hashtable.

2. Insertion order is not preserved and it is based on hashcode of the keys.

3. Duplicate keys are not allowed but values can be duplicated.

4. Heterogeneous Objects are allowed for both the key and value.

5. Null is allowed for key( but only once null insertion can be made).

6. Null is allowed for values( any number of times).

7. HashMap implements Serilizable and Cloneable interfaces but not RandomAccess.

8. HashMap is the best choice if our frequent operation is "Search" operation.


HashMap constructors.
============================================================================


1. HashMap m = new HashMap();

    This will create an empty hashmap object with default intitial capacity
    of 16 and fill ratio of 0.75.


2. HashMap m = new HashMap(int initialcapacity);

    This will create an empty hasmap object with specified intial capacity and
default fill ratio(0.75)


3. HashMap m = new HashMap(int initialcapacity, float fillratio).

    
4. HashMap m = new HashMap(Map m);


*/

//------------------------------------------------------------------*****************************-------------------------------------------------------

