package New;

class MyThred extends Thread
{
    public void run()
    {
        for(int i=0; i<10; i++)
        {
            System.out.println(Thread.currentThread().getName()+" " +i);
        }
    }
    
    public static void main(String[] args)
    {
        MyThred t = new MyThred();
        t.start();
    }
}
/*
run:
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
BUILD SUCCESSFUL (total time: 0 seconds)

*/
