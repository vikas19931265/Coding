// Concurrent Modification Exception Demo program by vikas 

package concurrentcollections;

import java.util.*;


class ConcurrentModification
{
    
  static  ArrayList l = new ArrayList();
    
  public static void main(String[] args)
  {
      
      l.add("A");
      l.add("B");
      l.add("C");
      
      Iterator itr1= l.iterator(); // we have opened the iterator
      
      MyThreads t = new MyThreads();
      
      t.start();
      
      while(itr1.hasNext()) // started iterating
      {
         
          System.out.println("Main Thread started");
          
          System.out.println(itr1.next());
          
          try
          {
          
              Thread.sleep(5000);
      
          }
          
          catch(InterruptedException e)
          {
              
          }
                  
          
          }
  
  
  }


}



class MyThreads extends Thread
{
    public void run()
    {
       System.out.println("Child thread started");
        
        ConcurrentModification.l.add("C");
        
        try
        {
            Thread.sleep(5000);
        }
    
        catch(InterruptedException e)
        {
            
        }
    
    
    }
}


/*
run:
Main Thread started
Child thread started
A
Main Thread started
Exception in thread "main" java.util.ConcurrentModificationException
	at java.util.ArrayList$Itr.checkForComodification(ArrayList.java:909)
	at java.util.ArrayList$Itr.next(ArrayList.java:859)
	at concurrentcollections.ConcurrentModification.main(NewClass.java:34)
/home/vikas/.cache/netbeans/8.2/executor-snippets/run.xml:53: Java returned: 1
BUILD FAILED (total time: 5 seconds)

*/