// Yield method

package Multithreading;


class MyThread3 implements Runnable
{
    public void run() //----------------------------1st thread
    {
        for(int i=0; i<=10; i++)
        {
            Thread.currentThread().setPriority(2);
            
            System.out.println(i+ "First Thread"+Thread.currentThread().getName()+Thread.currentThread().getPriority()); // This section executed by Thrad-0
        
            Thread.yield();
        }
    }

    public static void main(String[] args) //----------Another Thread
    {
        Thread t = new Thread(new MyThread3());
        
        t.start();
        
        for(int i =0; i<=10;i++)
        {
            System.out.println(i+"Second Thread"+Thread.currentThread().getName()+Thread.currentThread().getPriority());
        }
    }
    
}

/*
run:
0First ThreadThread-0
1First ThreadThread-0
0Second Threadmain
2First ThreadThread-0
3First ThreadThread-0
4First ThreadThread-0
5First ThreadThread-0
6First ThreadThread-0
7First ThreadThread-0
8First ThreadThread-0
1Second Threadmain
9First ThreadThread-0
2Second Threadmain
10First ThreadThread-0
3Second Threadmain
4Second Threadmain
5Second Threadmain
6Second Threadmain
7Second Threadmain
8Second Threadmain
9Second Threadmain
10Second Threadmain
BUILD SUCCESSFUL (total time: 0 seconds)


*/