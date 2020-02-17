
package Multithreading;
class MyThread1b implements Runnable {
    String status;
    static int i=0;
    Object lock= new Object();
    MyThread1b(String status)
    {
        this.status=status;
    }
    public void run()
    {
        while(i<11)
        {
            synchronized(lock)
            {
              if(i%5==0 && i%3!=0 )
             {
                 if(this.status.equals("3"))
                 {
                     System.out.println(Thread.currentThread().getName() + " " +i );
                      i++;
                      lock.notifyAll();
                 }
                 else
                 {
                     try
                     {
                        lock.wait(20);
                     }
                     catch(InterruptedException e)
                     {
                         e.printStackTrace();
                     }
                 }
             }
            else if(i%2!=0 && i%5!=0)
             {
                 if(this.status.equals("1"))
                 {
                     System.out.println( Thread.currentThread().getName() + " " +i );
                     i++;
                     lock.notifyAll();
                 }
                 else
                 {
                     try
                    {
                        lock.wait(20);
                     }
                     catch(InterruptedException e)
                     {
                         e.printStackTrace();
                     }
                 }
             }
             else if(i%2==0)
             {
                 if(this.status.equals("2"))
                 {
                     System.out.println( Thread.currentThread().getName() + " " +i );
                      i++;
                      lock.notifyAll();
                 }
                 else
                 {
                     try
                     {
                        lock.wait(20);
                     }
                     catch(InterruptedException e)
                     {
                         e.printStackTrace();
                     }
                 }
             }
            }
        }
    }
}
class ThreadProgramming1a {
    public static void main(String[] args)
    {
        MyThread1b t1= new MyThread1b("1");  // odd
        MyThread1b t2= new MyThread1b("2"); // even
        MyThread1b t3= new MyThread1b("3"); // multiple of 5
        Thread t4= new Thread(t1);
         Thread t5= new Thread(t2);
          Thread t6= new Thread(t3);
          t4.start();
          t5.start();
          t6.start();
    }
}
/*
run:
Thread-1 0
Thread-0 1
Thread-1 2
Thread-0 3
Thread-1 4
Thread-2 5
Thread-1 6
Thread-0 7
Thread-1 8
Thread-0 9
Thread-2 10
BUILD SUCCESSFUL (total time: 0 seconds)
*/