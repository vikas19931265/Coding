package SortedMap1_Hashtable1_PropertyFile1;

/*

TreeMap
============================================================


1. The underline data structure for TreeMap is RED-BLACK TREE.

2. Insertion order is not preserved and it is based upon some sorting order
   of keys.

3. Duplicate keys are not allowed but values can be duplicated.

4. If we are depending upon default natural sorting order then the keys should be 
   homogeneous and comparable in nature otherwise we will get RunTime Exception saying
   ClassCastException.

5. If we are defining our own sorting by the use of Comparator then keys need not be 
   homogeneous and comparable. We can take heterogeneous non comparable objects also.

6. Whether we are depending upon default natural sorting order or the customized sorting 
   order there are no restrictions for the values. We can take heterogeneous non comparable
   objects also.


Null Acceptance
========================

1. For non empty TreeMap if we are trying to insert an entry with the null key then
   will get RunTimeException saying NullPointerException.

2. For empty treemap as the first entry with the null key is allowed. But after inserting
   the entry if we are trying to insert any other entry then we will get RunTimeException
    saying NullPointerException.

note
=======================

The above Null Acceptance rules are applicable until 1.6 version only. From 1.7 version onwards null
is not allowed for key.

This is not a restriction for values, as we can use null any number of times. There is no such 
restriction whether is it is 1.6 version or 1.7 version.


*/

//---------------------------------------------------------------****************************-----------------------------------------------