//Deadlock by join method

package Multithreading;


class MyThread5 
{
    public static void main(String[] args) throws InterruptedException
    {
        Thread.currentThread().join();
    }
}

/*
run:
BUILD STOPPED (total time: 24 seconds)

*/