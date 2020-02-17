
package Multithreading;

class MyDriver
{
    public static void main(String[] args)
    {
        final Display d = new Display();
        new Thread()
        {
            public void run()
            {
                d.display();

            }
        }.start();

        new Thread()
        {
            public void run()
            {
                d.display();

            }
        }.start();


    }
}

class Display2
{
    public synchronized void display()
    {
        for(int i=0; i<=10 ; i++)
        {
            System.out.println(Thread.currentThread().getName() + " "+ i);
        }
    }
}

/*
run:
Thread-0  1
Thread-0  2
Thread-0  3
Thread-0  4
Thread-0  5
Thread-0  6
Thread-0  7
Thread-0  8
Thread-0  9
Thread-0  10
Thread-1  1
Thread-1  2
Thread-1  3
Thread-1  4
Thread-1  5
Thread-1  6
Thread-1  7
Thread-1  8
Thread-1  9
Thread-1  10
BUILD SUCCESSFUL (total time: 4 seconds)

*/