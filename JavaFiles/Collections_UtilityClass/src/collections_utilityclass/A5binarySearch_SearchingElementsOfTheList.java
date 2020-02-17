package collections_utilityclass;

// Searching elements of the List.( binarySearch)
//========================================================================


/*

1. Collections class defines the following binarySearchMethods.

   i. public static int binarySearch(List l, Object target)

         If the list is sorted according to default natural sorting order then we have to use this
         method.



  ii. public static int binarySearch(List l, Object target, Comparator c)

         We have to use this method if the list is sorted according to Customized sorting order.



Conclusions.
====================================

1.The above search internally will use binarySearch algorithm.

2. Successful search will return index and unsuccessful search will return the Insertion point.

3. Insertion point is the location where we can place target element in the sorted list.

4. ***Before calling binary search method , compulsory the list should be sorted in nature otherwise we will get
   unpredictable results.

5. If the list is sorted according to the Comparator then at the time of the search operation also we have to pass the
   same comparator object otherwise we will get unpredictable results.

*/


//---------------------------------------------------------------****************************----------------------------------