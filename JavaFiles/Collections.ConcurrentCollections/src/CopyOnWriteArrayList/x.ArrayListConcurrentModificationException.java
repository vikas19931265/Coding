
/*

ArrayList: ConcurrentModificationException.


In ArrayList after getting the iterator if we are performing any update in the ArrayList
then we will get ConcurrentModificationException.

So if you do like
          Iterator itr = l.iterator();
          l.add("D";

          Then you will get ConcurrentModificationException.

But once the iterator finishes iterating and then if you try to add the element then
that will be perfectly fine and we will not get any error.


*/

package concurrentcollections;

import java.util.concurrent.CopyOnWriteArrayList;

import java.util.Iterator;

import java.util.ArrayList;

class Test101
{
    
    public static void main(String[] args)
    {
        ArrayList l = new ArrayList();
        
        l.add("A");
        
        l.add("B");
        
        l.add("C");
        
        Iterator itr = l.iterator();
        
        l.add("D"); //We cannot do this as iteration is not yet over and we are trying to insert an
                      // an element to the ArrayList.
        
        while(itr.hasNext())
        {
            
            String s =(String)itr.next();
            
            System.out.println(s);
        }
         
        /*
        l.add("D");
        
       If we try to add the element after iterating then that is completely fine and we will not
        get any error.
        
        */
         
    
        System.out.println(l);
    
    }
}

/*
run:
Exception in thread "main" java.util.ConcurrentModificationException
	at java.util.ArrayList$Itr.checkForComodification(ArrayList.java:909)
	at java.util.ArrayList$Itr.next(ArrayList.java:859)
	at concurrentcollections.Test101.main(NewClass22.java:49)
/home/vikas/.cache/netbeans/8.2/executor-snippets/run.xml:53: Java returned: 1
BUILD FAILED (total time: 0 seconds)


*/

