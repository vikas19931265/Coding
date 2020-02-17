
/* Solving problem of HashMap using ConcurrentHashmap  */

package ConcurrentMapAndConcurrentHashMap;

import java.util.concurrent.ConcurrentHashMap;
import java.util.Iterator;
import java.util.*;

class MyThread1 extends Thread {

    static ConcurrentHashMap l = new ConcurrentHashMap();
    
    

    public void run() {
        
        
      try
      {
        
        System.out.println("Child thread executing");
        
        l.put(4,"D");

        Thread.sleep(2000);
    
      }
      
      catch(InterruptedException e )
      {
          
      }
      
      }

    public static void main(String[] args) throws Exception {

        l.put(1,"A");

        l.put(2,"B");

        l.put(3,"C");

        MyThread1 t = new MyThread1();
        
        Set s = l.keySet();
        
        Iterator itr1= s.iterator();

        
        t.start(); // while iterator has been started by main thread we are trying to add element.
        
        System.out.println("Main Thread iteration starts");
        
        while (itr1.hasNext()) {

            Integer s1 = (Integer) itr1.next();

            System.out.println("main thread iterating list and current object is " + l.get(s1));

            Thread.sleep(3000);
        
           
        
        }

        System.out.println(l);
    }

}


/*
run:
Main Thread iteration starts
Child thread executing
main thread iterating list and current object is A
main thread iterating list and current object is B
main thread iterating list and current object is C
main thread iterating list and current object is D
{1=A, 2=B, 3=C, 4=D}
BUILD SUCCESSFUL (total time: 12 seconds)

*/