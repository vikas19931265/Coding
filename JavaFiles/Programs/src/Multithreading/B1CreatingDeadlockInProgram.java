package Multithreading;

/*
Creating deadlock in the program
==========================================

1. Firstly both the threads will execute on their own copy of objects. Driver1 Thread
   will work on the A object and the main thread will work on the B object. Both of them 
   have locks of A and B object.
   
2. Now we call sleep on Driver1 Thread therefore control goes to the main thread 
   and in main thread also sleep is called. Both the methods are synchornized and
   therefore they have to be completed first before any other thread can request 
   for another synchronized resource.
   
3. Now Driver1 thread is trying to call B class synchoronized method on which already
   main thread is working and hence it goes to waiting and same thing is also done by
   the main thread and hence therefore both of them goes into the waiting state.

*/



 class A
{
    public synchronized void m1(B b)
    {
        try
        {
            Thread.sleep(200);
        
            b.last();// b object already locked by main thread hence Driver1 thread in waiting
        }
    
        catch(InterruptedException e){}
        
        
    }
    
    public  synchronized void last()
    {
        
    }
}


class B
{
    public  synchronized void m1(A a )
    {
        try
        {
            Thread.sleep(200);
        
            a.last();// a object locked by Driver1 thread hence the main thread goes into the waiting state.
            
        }
   
        catch(InterruptedException e){}
    }
    
    public  synchronized  void last()
    {
        
    }
    
    
}



 class Driver1 extends Thread
{
    static A a = new A();
    static B b = new B();
    
    public void run()
    {
        a.m1(b); // a object locked by Driver1 thread---step 1
    }
    
    public static void main(String[] args)
    {
        Driver1 d = new Driver1();
        d.start();
        b.m1(a); // b object locked by main thread---> step 2
    }
    
    
    
}