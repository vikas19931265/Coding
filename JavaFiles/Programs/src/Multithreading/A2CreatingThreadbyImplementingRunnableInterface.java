// Thread creation by implementing runnable interface

package Multithreading;


class MyThread1 implements Runnable
{
    public void run() //----------------------------1st thread
    {
        for(int i=0; i<=10; i++)
        {
            System.out.println(i+ "First Thread");
        
        }
    }

    public static void main(String[] args) //----------Another Thread
    {
        Thread t = new Thread(new MyThread1());
        t.start();
        
        for(int i =0; i<=10;i++)
        {
            System.out.println(i+"Second Thread");
        }
    }
    
}

/*
run:
0Second Thread
0First Thread
1Second Thread
1First Thread
2Second Thread
3Second Thread
4Second Thread
5Second Thread
6Second Thread
7Second Thread
8Second Thread
9Second Thread
10Second Thread
2First Thread
3First Thread
4First Thread
5First Thread
6First Thread
7First Thread
8First Thread
9First Thread
10First Thread
BUILD SUCCESSFUL (total time: 0 seconds)

*/