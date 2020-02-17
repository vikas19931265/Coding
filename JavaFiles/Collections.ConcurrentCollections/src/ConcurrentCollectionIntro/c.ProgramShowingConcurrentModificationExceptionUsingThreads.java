package ConcurrentCollectionIntro;

import java.util.*;

class MyThread extends Thread {

    static ArrayList l = new ArrayList();

    public void run() {
        
        
      try
      {
        
        System.out.println("Child thread executing");
        
        l.add("D");

        Thread.sleep(2000);
    
      }
      
      catch(InterruptedException e )
      {
          
      }
      
      }

    public static void main(String[] args) throws Exception {

        l.add("A");

        l.add("B");

        l.add("C");

        MyThread t = new MyThread();
        
        

        Iterator itr = l.iterator();
        
        t.start(); // while iterator has been started by main thread we are trying to add element.
        
        System.out.println("Main Thread iteration starts");
        
        while (itr.hasNext()) {

            String s1 = (String) itr.next();

            System.out.println("main thread iterating list and current object is " + s1);

            Thread.sleep(3000);
        
           
        
        }

        System.out.println(l);
    }

}


/*
run:
Main Thread iteration starts
Exception in thread "main" java.util.ConcurrentModificationException
Child thread executing
	at java.util.ArrayList$Itr.checkForComodification(ArrayList.java:909)
	at java.util.ArrayList$Itr.next(ArrayList.java:859)
	at concurrentcollections.MyThread.main(NewClass2.java:50)
/home/vikas/.cache/netbeans/8.2/executor-snippets/run.xml:53: Java returned: 1
BUILD FAILED (total time: 2 seconds)
     

*/