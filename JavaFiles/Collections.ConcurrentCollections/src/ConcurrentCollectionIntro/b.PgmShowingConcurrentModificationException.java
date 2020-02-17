//ConcurrentModificationException

package ConcurrentCollectionIntro;

import java.util.ArrayList;

import java.util.Iterator;

class Test
{
    
    public static void main(String[] args)
    {
        
        ArrayList al = new ArrayList();
        
        al.add("A");
        
        al.add("B");
        
        al.add("C");
        
        Iterator itr= al.iterator();
        
        while(itr.hasNext())
        {
            String s =(String) itr.next();
            
            System.out.println(s);
            
            al.add("D");
            
            /*
           
            
            This will give us ConcurrentModification runtime exception as while 
            we are iterating over a collection object  we are not allowed to make any modification
            to the collection object in case of the Traditional Collections. This problem 
            is taken care in the ConcurrentCollections.
            
            run:
A
Exception in thread "main" java.util.ConcurrentModificationException
	at java.util.ArrayList$Itr.checkForComodification(ArrayList.java:909)
	at java.util.ArrayList$Itr.next(ArrayList.java:859)
	at concurrentcollections.Test.main(NewClass1.java:27)
/home/vikas/.cache/netbeans/8.2/executor-snippets/run.xml:53: Java returned: 1
BUILD FAILED (total time: 0 seconds)

            */
            
            
        }
    }
}

  //------------------------------------------------------------***********************************----------------------------------------