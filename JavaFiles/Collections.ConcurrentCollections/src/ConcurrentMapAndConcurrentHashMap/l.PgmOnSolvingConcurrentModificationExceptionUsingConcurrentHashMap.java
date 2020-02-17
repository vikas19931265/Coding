
/*

Iterator iterates on Copy of ConcurrentHashMap object not on original HashMap 
object and that is the reason why we never get concurrent modification exception.

*/

package concurrentcollections;

import java.util.ArrayList;

import java.util.Iterator;

import java.util.concurrent.ConcurrentHashMap;

import java.util.Set;

class Test20
{
    
    public static void main(String[] args)
    {
        
        ConcurrentHashMap al = new ConcurrentHashMap();
        
        al.put(1,"A");
        
        al.put(2,"B");
        
        al.put(3,"C");
        
        Set s= al.keySet();
        
        Iterator itr= s.iterator();
        
        while(itr.hasNext())
        {
            Integer s2 =(Integer) itr.next();
            
            System.out.println(al.get(s2));
            
            al.put(4,"D");
            
            /*
            
            Here we can add 4 rth element even though we are iterating through the collections.
            */
           
            

            
            
        }
    }
}


/*
run:
A
B
C
D
BUILD SUCCESSFUL (total time: 0 seconds)

*/

/*

note

1.In the case of the ConcurrentHashMap iterator creates a Read Only Copy of map object and iterates over
  that copy of object. So if any changes occurs after iterating it will not affect the copy.

2.In above program if we replace ConcurrentHashmap with Hashmap then we will get ConcurrentModificationException.

3. While the main thread is iterating , if child thread makes some update then there is no guarantee that the 
   update is available to the iterator. Example if the iterator iterates from 1 to 5 and while cursor is at 3 if
   child thread makes the update at 4 then the update will be available to the iterator. But if the cursor is at 4 
   and child thread makes an update in 3rd place then that update will not be available to the cursor. This is because
   the iterator is always one directional cursor.

4. But at last if we will print the collection object then the update will be available to the iterator . But for 
   the current iterator there is not guarantee.


*/

//---------------------------------------------------------------***************************---------------------------------------