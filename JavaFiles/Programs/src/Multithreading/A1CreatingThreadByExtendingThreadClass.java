// Thread creation by extending thread class

package Multithreading;


class MyThread extends Thread
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
        MyThread t = new MyThread();
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
1Second Thread
2Second Thread
0First Thread
3Second Thread
1First Thread
4Second Thread
2First Thread
5Second Thread
3First Thread
6Second Thread
4First Thread
7Second Thread
5First Thread
8Second Thread
6First Thread
9Second Thread
7First Thread
10Second Thread
8First Thread
9First Thread
10First Thread
BUILD SUCCESSFUL (total time: 0 seconds)

*/