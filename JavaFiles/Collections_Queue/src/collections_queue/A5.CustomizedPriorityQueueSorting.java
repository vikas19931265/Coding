//Customized Priority Queue Sorting.

package collections_queue;

import java.util.*;
 class PriorityQueueDemo2{
    
     public static void main(String[] args)
     {
         
       PriorityQueue q = new PriorityQueue(15, new MyComparator());  
     
       q.offer("A");
       q.offer("Z");
     q.offer("L");
     q.offer("B");
     
     
     System.out.println(q);
     
     }
}


class MyComparator implements Comparator
{
    public int compare(Object obj1, Object obj2)
    {
        String s1=(String)obj1;

        String s2=obj2.toString();
        
        return s2.compareTo(s1);
    }
}

/*
run:
[Z, B, L, A]
BUILD SUCCESSFUL (total time: 0 seconds)

*/

//----------------------------------------------------------****************************************----------------------------------