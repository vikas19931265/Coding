package A7Deadlock;


//Deadlock program revised.

class A
{

    public  synchronized void  m1(B b)
    {

        System.out.println("A class method is executing");

        try
        {
            Thread.sleep(1000); // When sleep method is called on this thread, any other      thread
                                // will get the chance to execute.
        }

        /*
        note

        Don't confuse that since this method is synchronized hence first this method call will execute
        on the thread then other thread will get the chance to execute. This is true for any call made
        on this method for this object.

        So even though when our thread is in waiting state if any other thread is trying to execute
        the method on the same object then that thread will go in the waiting state.

        But in above case two threads are not trying to access the same object.

        As soon as we are calling the sleep method other waiting thread( child or main) will get
        the chance to execute.


        */


        catch(InterruptedException e)
        {

        }


        System.out.println("A class trying to class B class method");

        b.last();


    }

    public synchronized void last()
    {

    }



}


class B
{
    public synchronized void m2(A a)
    {

          System.out.println("B class method is executing");


        try
        {
            Thread.sleep(1000);
        }


        catch(InterruptedException e)
        {

        }


       System.out.println("B class trying to class A class method");

        a.last();

    }



    public synchronized void last()
    {

    }

}


class Deadlock extends Thread
{

  static   A a = new A();

  static   B b = new B();


    public void run()
    {
        a.m1(b);
    }


    public static void main(String[] args)
    {

        Deadlock d = new Deadlock();
        d.start();

        b.m2(a);


    }



}

/*
run:
B class method is executing
A class method is executing
A class trying to class B class method
B class trying to class A class method
BUILD STOPPED (total time: 10 seconds)

*/