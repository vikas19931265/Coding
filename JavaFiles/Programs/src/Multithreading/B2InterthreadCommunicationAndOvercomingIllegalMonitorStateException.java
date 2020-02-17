package Multithreading;

class NumberGenerators
{

    public void genNumber()
    {
        for (int i = 0; i <= 10; i++)
        {
            System.out.println(Thread.currentThread().getName() + " " + i);
        }
    }
}

class MyThreads1 extends Thread
{

    NumberGenerators g;

    MyThreads1(NumberGenerators g)
    {
        this.g = g;
    }

    public void run()
    {
        try
        {

            synchronized (g)
            {
                g.wait();
                g.genNumber();
            }
        } catch (Exception e)
        {

        }
    }
}

class MyThreads2 extends Thread
{
    NumberGenerators g;

    MyThreads2(NumberGenerators g)
    {
        this.g = g;
    }

    @Override
    public void run()
    {

        g.genNumber();

        synchronized (g)
        {
            g.notify();  // Mythread2 must own 'g' object monitor in order to call the notify method.
                        // otherwise we will get illegelmonitorstateexception

        }
    }

}

class DriversT
{

    public static void main(String[] args)
    {
        NumberGenerators g = new NumberGenerators();
        MyThreads1 t1 = new MyThreads1(g);
        t1.start();
        MyThreads2 t2 = new MyThreads2(g);
        t2.start();

    }
}
/*
run:
Thread-1 0
Thread-1 1
Thread-1 2
Thread-1 3
Thread-1 4
Thread-1 5
Thread-1 6
Thread-1 7
Thread-1 8
Thread-1 9
Thread-1 10
Thread-0 0
Thread-0 1
Thread-0 2
Thread-0 3
Thread-0 4
Thread-0 5
Thread-0 6
Thread-0 7
Thread-0 8
Thread-0 9
Thread-0 10
BUILD SUCCESSFUL (total time: 0 seconds)

*/