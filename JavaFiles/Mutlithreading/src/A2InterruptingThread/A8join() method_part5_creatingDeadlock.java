/*
Case 4:

If a thread calls join() method on the same itself then the program will be stuck . 
This is something like a deadlock situation.

In this case thread has to wait for an infinite amount of time.


*/
package A2InterruptingThread;


 class Test {
    

 public static void main(String[] args) throws InterruptedException
 {
     
     Thread.currentThread().join(); // This will cause a deadlock kind of situation. program will not proceed further.
     
     
 }
 
 }