/*

Queue- 1.5 version Enhancements( Queue Interface)
====================================================================================

1. It is the child interface of Collection interface.



                   Collection(I)
    ----------------------------------------------               
    |                         |                   |            
    List                     Set               ->   Queue(I)                     
    ArrayList                                 |      PriorityQueue(class)
    LinkedList-------implements(from 1.5)-----       BlockingQueue
    Vector                                                  PriorityBlockingQueue
        Stack                                               LinkedBlockingQueue



2. If we want to represent a group of individual objects prior to processing then we should go for the 
   queue.

3. For example before sending sms message all mobile numbers we have to store in some kind of data structure
   
4. In which order we added the mobile numbers in the same order only messages should be delivered.

5. For this first in first out requirement that is Queue is the best choice.

6. Usually Queue follows first in first out order. But based upon our requirement we can implement 
  our own priority order also.

7. From 1.5 onwards LinkedList class also implements Queue Interface.

8. LinkedList based implementation of the queue always follows first in and first out order.

*/
package collections_queue;

/**
 *
 * @author vikas
 */
public class A1_CollectionsQueue {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
    }
    
}

//---------------------------------------------------------------******************************-----------------------------------