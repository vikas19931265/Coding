/*

CopyOnWriteArrayList demo program


*/
package concurrentcollections;

import java.util.concurrent.CopyOnWriteArrayList;

import java.util.*;

class MyThread5 extends Thread {
    
static CopyOnWriteArrayList l = new CopyOnWriteArrayList();

public void run()
{
    
    try
    {
          System.out.println("Child thread updating list");
        
         l.add("C");
    
         Thread.sleep(2000);
    }
        
     
    

    catch(InterruptedException e)
    {
      

    }

}  

public static void main(String[] args) throws InterruptedException 
{
    
    l.add("A");
    
    l.add("B");
    
    MyThread5 t = new MyThread5();
    
     t.start();
    
    Iterator itr= l.iterator();
    
   
    
    while( itr.hasNext())
    {
        
        String s1= (String) itr.next();
        
        System.out.println("Main thread iterating list and the current objects is " +s1);
        
        Thread.sleep(3000);
    }
    

    System.out.println(l);

}




}


/*

run:
Child thread updating list
Main thread iterating list and the current objects is A
Main thread iterating list and the current objects is B
[A, B, C]
BUILD SUCCESSFUL (total time: 6 seconds)


If we replace CopyOnWriteArrayList with normal ArrayList then we will get ConcurrentModification
runtime exception.


run:
Child thread updating list
Main thread iterating list and the current objects is A
Exception in thread "main" java.util.ConcurrentModificationException
	at java.util.ArrayList$Itr.checkForComodification(ArrayList.java:909)
	at java.util.ArrayList$Itr.next(ArrayList.java:859)
	at concurrentcollections.MyThread5.main(NewClass18.java:53)
/home/vikas/.cache/netbeans/8.2/executor-snippets/run.xml:53: Java returned: 1
BUILD FAILED (total time: 3 seconds)

*/

//----------------------------------------------------------------*******************************------------------------------------------------