package collections_queue;

/*
PriorityQueue.
=============================================================================

1. If we want to represent a group of individual objects prior to processing according to 
   some priority then we should go for the PriorityQueue.

2. The priority can be either default natural sorting order or customized sorting order defined
   by the comparator.

3. Insertion order is not preserved and it is based upon some priority.

4. Duplicate objects are not allowed.

5. If we are depending upon default natural sorting order compulsory the objects should be
   homogeneous and comparable otherwise we will get RuntimeException saying ClassCastException.

6. If we are defining our own sorting by comparator then Objects need not be homogeneous 
   and comparable.

7. Null is not allowed even as the first element also.


*/

/*

Constructors in PriorityQueue.
=================================================================

1. PriorityQueue q = new PriorityQueue();

     This will create an empty priorityQueue with default initial capacity of 11 and 
     all the objects will be inserted according to the Default Natural Sorting Order.

2. PriorityQueue q= new PriorityQueue(int initialCapacity)

    
3. PriorityQueue q = new PriorityQueue(int initialCapacity, Comparator C)

4. PriorityQueue q = new PriorityQueue(SortedSet s );    

5. PriorityQueue q = new PriorityQueue(Collection c);

*/

//------------------------------------------------------------**********************************----------------------------------------