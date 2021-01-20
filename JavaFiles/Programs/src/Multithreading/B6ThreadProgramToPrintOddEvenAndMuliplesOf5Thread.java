/*
Thread program to print threads printing odd even and multiples of 5 numbers
*/
package Multithreading;
class MyThread1s extends Thread
{
    ThreadProgramming obj;
    String status = "1";
    MyThread1s(ThreadProgramming obj)
    {
        this.obj = obj;
    }
    public void run()
    {
        obj.numberGenerator(status);
    }
}
class MyThread2 extends Thread
{
    ThreadProgramming obj;
    String status = "2";
    MyThread2(ThreadProgramming obj)
    {
        this.obj = obj;
    }
    public void run()
    {
        obj.numberGenerator(status);
    }
}
class MyThread3s extends Thread
{
    ThreadProgramming obj;
    String status = "3";
    MyThread3s(ThreadProgramming obj)
    {
        this.obj = obj;
    }
    public void run()
    {
        obj.numberGenerator(status);
    }
}
class ThreadProgramming
{
    public static void main(String[] args)
    {
        ThreadProgramming obj = new ThreadProgramming();
        MyThread1s t1 = new MyThread1s(obj);
        t1.start();
        MyThread2 t2 = new MyThread2(obj);
        t2.start();
        MyThread3s t3 = new MyThread3s(obj);
        t3.start();
    }
    public synchronized void numberGenerator(String status)
    {
        if (status.equals("1"))
        {
            for (int i = 0; i < 11; i++)
            {
                if (i % 2 != 0 && i % 5 != 0)
                {
                    System.out.println(Thread.currentThread().getName() + " " + i);
                }
            }
        } else
        {
            if (status.equals("2"))
            {
                for (int i = 0; i < 11; i++)
                {
                    if (i == 0)
                    {
                        System.out.println(Thread.currentThread().getName() + " " + i);
                        continue;
                    }
                    if (i % 2 == 0 && i % 5 != 0)
                    {
                        System.out.println(Thread.currentThread().getName() + " " + i);
                    }
                }
            } else
            {
                if (status.equals("3"))
                {
                    for (int i = 0; i < 11; i++)
                    {
                        if (i % 5 == 0 && i % 3 != 0)
                        {
                            System.out.println(Thread.currentThread().getName() + " " + i);
                        }
                    }
                }
            }
        }
    }
}
/*
run:
Thread-0 1
Thread-0 3
Thread-0 7
Thread-0 9
Thread-2 5
Thread-2 10
Thread-1 0
Thread-1 2
Thread-1 4
Thread-1 6
Thread-1 8
BUILD SUCCESSFUL (total time: 0 seconds)
*/