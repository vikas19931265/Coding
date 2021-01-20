
package Multithreading;
class Customer extends Thread
{   static int customerId=0;
    public void run()
    {
        ThreadLocal pg= new ThreadLocal()
        {
            @Override
            protected Integer initialValue()
            {
               return  ++customerId;
            }
        };
    System.out.println(Thread.currentThread().getName()+ " " +pg.get());
    }
}
class DriverPgm
{
    public static void main(String[] args)
    {
        Customer c1= new Customer();
        c1.start();
        Customer c2= new Customer();
        c2.start();
        Customer c3= new Customer();
        c3.start();
        Customer c4= new Customer();
        c4.start();
    }
}
/*
run:
Thread-0 1
Thread-1 2
Thread-2 3
Thread-3 4
BUILD SUCCESSFUL (total time: 0 seconds)
*/