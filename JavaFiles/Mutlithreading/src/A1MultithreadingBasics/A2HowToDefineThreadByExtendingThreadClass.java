
package A1MultithreadingBasics;

/*

How to define Thread??
=====================================================

We can define a thread in the following two ways.

i) by extending Thread class.

ii) by implementing runnable interface.(job)


By Extending thread class.
================================================================*/

class MyThread extends Thread // Defining a thread by extending Thread.
{

    public void run() // job of thread
    {

        for (int i = 0; i < 10; i++) {

            System.out.println("Child Thread");
        }
    }
}

class ThreadDemo {

    public static void main(String[] args) // main() method is not a thread, main thread is responsible to call main() method.
    {

        MyThread t = new MyThread(); // Thread substantiation.

        t.start(); // Execution of child Thread

        // Execution of main thread
        
        for (int i = 0; i < 10; i++) {           //------------

            System.out.println("Main thread");               // job of thread

        }                                       //------------

    }

}

/*
o/p
run:
Main thread
Main thread
Main thread
Main thread
Main thread
Main thread
Main thread
Main thread
Main thread
Main thread
Child Thread
Child Thread
Child Thread
Child Thread
Child Thread
Child Thread
Child Thread
Child Thread
Child Thread
Child Thread
BUILD SUCCESSFUL (total time: 0 seconds)


*/

//----------------------------------------------------------------------**************---------------------------------------------------