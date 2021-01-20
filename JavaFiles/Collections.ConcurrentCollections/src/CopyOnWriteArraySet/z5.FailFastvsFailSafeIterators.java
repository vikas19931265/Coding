/*

Fail Fast vs Fail Safe iterators.

Fail Fast iterators:

        While one thread is iterating Collection if other thread is trying to perform any structural modification
  to the underlying collection object then immediately iterator will fails by raising ConcurrentModificationException. Such
 type of iterators are called as Fail fast iterators.

*/
package concurrentcollections;

import java.util.ArrayList;

import java.util.Iterator;


class Iterators
{
    public static void main(String[] args)
    {
        
        ArrayList l = new ArrayList();
        
        l.add("A");
        
        l.add("B");
        
        Iterator itr= l.iterator(); // We got iterator object and it has not yet started iterating.
                                    // In between its start to its end if any update is made then we wil get 
                                    // ConcurrentModificationException
                                    
        while(itr.hasNext())
        {
            
            String s= (String)itr.next();
            
            System.out.println(s); //A
            
            l.add("C");
        }
        
      
        
    }
}

/*
run:
A
Exception in thread "main" java.util.ConcurrentModificationException
	at java.util.ArrayList$Itr.checkForComodification(ArrayList.java:909)
	at java.util.ArrayList$Itr.next(ArrayList.java:859)
	at concurrentcollections.Iterators.main(NewClass28.java:37)
/home/vikas/.cache/netbeans/8.2/executor-snippets/run.xml:53: Java returned: 1
BUILD FAILED (total time: 0 seconds)

*/

//-----------------------------------------------------------***********************************------------------------------------------