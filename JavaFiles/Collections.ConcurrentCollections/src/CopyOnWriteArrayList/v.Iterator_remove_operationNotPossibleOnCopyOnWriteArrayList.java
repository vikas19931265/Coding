/*

Iterator of CopyOnWriteArrayList cant perform remove operation. If we are trying
to perform the remove operation then we will get UnsupportedOperationException


Reason
-------

Every update operation in the case of CopyOnWriteArrayList is performed on differnt objects. Hence After getting iterator
if we are trying to perform any modification to the list then that wont reflect to the iterator.

Here iterator will be working on one object and remove will be done in different object this will be contradictory and this is 
the reason why we get UnsupportedOperationException.

*/
package concurrentcollections;

import java.util.ArrayList;
import java.util.concurrent.CopyOnWriteArrayList;

import java.util.Iterator;

class CopyOnWriteArrayListRemove
{
    
    public static void main(String[] args)
    {
        
        CopyOnWriteArrayList l = new CopyOnWriteArrayList();
        
        l.add("A");
        
        l.add("B");
        
        l.add("C");
        
        l.add("D");
        
        System.out.println(l); // A , B , C ,D
        
        Iterator itr = l.iterator();
        
        while(itr.hasNext())
        {
            String s =(String) itr.next();
            
            if(s.equals("D"))
            {
                itr.remove(); // We cannot perform remove operation  while iteratnig on Collection object
                                // in case of CopyOnWriteArrayList.
            }
        }
    
        System.out.println(l);
    
    
    }
}


/*
run:
[A, B, C, D]
Exception in thread "main" java.lang.UnsupportedOperationException
	at java.util.concurrent.CopyOnWriteArrayList$COWIterator.remove(CopyOnWriteArrayList.java:1178)
	at concurrentcollections.Test10.main(NewClass20.java:40)
/home/vikas/.cache/netbeans/8.2/executor-snippets/run.xml:53: Java returned: 1
BUILD FAILED (total time: 0 seconds)


*/


/*

If we replace above program with normal ArrayList then such error will not occur.
*/

class NormalArrayList
{
    
    public static void main(String[] args)
    {
        
        ArrayList l = new ArrayList();
        
        
        l.add("A");
        
        l.add("B");
        
        l.add("C");
        
        l.add("D");
        
        System.out.println(l); // A , B , C ,D
        
        Iterator itr = l.iterator();
        
        while(itr.hasNext())
        {
            String s =(String) itr.next();
            
            if(s.equals("D"))
            {
                itr.remove(); // We  can  perform remove operation  while iterating on Collection object as 
                              // we are always working on same original object.  
            }
        }
    
        System.out.println(l);
    
    
    }
}

/*

run:
[A, B, C, D]
[A, B, C]
BUILD SUCCESSFUL (total time: 0 seconds)

*/

//-----------------------------------------------------------***********************************-----------------------------------------