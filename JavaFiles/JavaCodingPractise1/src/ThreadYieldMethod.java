/*
yield() method will give the chance to waiting thread of the same priority.

*/
package New;

class MyThread1 extends Thread
{
    public static void main(String[] args)
    {
        new MyThread1().start();
        for(int i =0; i<=10; i++)
        {
            System.out.println(Thread.currentThread().getName()+" "+ i);
            Thread.yield();
        }
    }

    public void run()
    {
        for(int i =0; i<=10; i++)
        {
            System.out.println(Thread.currentThread().getName()+" "+ i);
        }
    }

}
