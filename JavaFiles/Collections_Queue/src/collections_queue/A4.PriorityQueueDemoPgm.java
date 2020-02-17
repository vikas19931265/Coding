//Priority Queue Demo Program

package collections_queue;

import java.util.*;

class PriorityQueueDemo
{
    
    public static void main(String[] args)
    {
        PriorityQueue q = new PriorityQueue();
        
        System.out.println(q.peek()); //null
        
     //   System.out.println(q.element()) ;// RuntimeException: NoSuchElementException
    
    
        for(int i =0; i<=10;i++)
        {
            q.offer(i);
        }
    
    System.out.println(q);  // 0,1,2....10
    System.out.println(q.poll());//0
    System.out.println(q);//1,2,3,.....,10 ...Starting from 1 as 0 is removed by poll
    
        
    }
}

/*

note

Some platforms will not provide proper support for ThreadPriorities and PriorityQueues

run:
null
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
0
[1, 3, 2, 7, 4, 5, 6, 10, 8, 9]
BUILD SUCCESSFUL (total time: 0 seconds)

*/

//--------------------------------------------------------------***************************----------------------------------------------