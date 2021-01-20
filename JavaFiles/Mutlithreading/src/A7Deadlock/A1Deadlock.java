package A7Deadlock;

    /*

what is Deadlock?
==============================

If two threads are waiting for each other for ever , such type of infinite waiting is called as Deadlock.

synchronized keyword is the only reason for the deadlock  situation , hence while using synchronized keyword we have to 
take very special care.

There are no resolution techniques for deadlock situation but several prevention techniques are available.



In the below program , if we remove at least one synchronized keyword then the program will not enter into the deadlock situation.
hence synchronized keyword is the only reason for the deadlock situation due to this while using synchronized keyword we have to take
special care.




*/



class A

{
    public synchronized void d1(B b)
    {
        
        System.out.println("Thread 1 starts execution of d1 method");
    

    
    
        System.out.println("Thread1 trying to call B's last method");
        
        b.last();
    
    }
    
    
    public synchronized void last()
    {
        
        System.out.println("Inside A, this is last() method");
        
    }
    
}



class B
{
    
    public synchronized void d2(A a)
    {
        
        System.out.println("Thread2 starts execution of d2 method");
        
    


    try
    {
        
        Thread.sleep(5000);//This sleep method will
        
    }

    catch(InterruptedException e)
    {
        
        
    }

    System.out.println("Thread2 trying to call A's last() method");
    
    a.last();

}
    

public synchronized void last()
{
    
    
    System.out.println("Inside B, last() method");
    
}


}



class Deadlock extends Thread
{
    
    A a = new A(); // note, to keep operation on one object, if different objects are there then
                   // deadlock operation may not be performed.
    
    B b = new B();
    
    public void m1()
    {
        
        this.start();
        
        a.d1(b); // main thread
    
    
    }
    
    public void run()
    {
        
        b.d2(a);// child thread
    }
    
    
    public static void main(String[] args)
    {
        
        
        Deadlock t = new Deadlock();
        
        t.m1();
        
    }
    
    
}


/*
run:
Thread 1 starts execution of d1 method
Thread2 starts execution of d2 method
Thread1 trying to call B's last method
Thread2 trying to call A's last() method

cursor blinking: program gone to deadlock.



order of execution

1. 2 threads exist in the program one is main thread, and the other one is deadlock thread.

2. main thread calls m1() method , which will start the deadlock thread.

3. Now either main thread, or child thread will be picked by the scheduler to execute, mostly main thread is picked.

4.Assuming here main thread is picked first.

5.  a.d1(b); // main thread is calling d1 method and passing b object.

6. Hence main thread has the lock of A class object.

7. Now child thread executes run() method. In the run() method it is calling  b.d2(a);// child thread
   hence child thread gets the lock of B class object.

8. So far hence A class object is locked by main thread and B class object is locked by the child thread.

9. So now any thread trying to execute these methods now have to go into the waiting state.

10. main thread and child thread both are going to sleep after printing " thread1 and thread 2 starts to execute"

11. Now the main thread is trying to call last() method of B class. But last() method is synchronized and already the lock
    of B class object is held by Deadlock thread. Hence it goes into the waiting state.

12. Similarly child thread is trying to execute A class last() method. But A class object is held by the main thread hence
   the deadlock thread also goes into the waiting state.

13. Now both of the threads will enter into the waiting state infinitely.






*/