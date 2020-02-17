//Program to generate a separate customer id for each and every thread using single thread local object.

/*

In this program for every customer thread a separate customer id will be maintained by the ThreadLocal object.


note
-----------

    protected T initialValue() {
        // compiled code
    }

This is the declaration of initialValue method inside the Thread class. Here the return
type is generic hence we can add any type of return value here.


*/
package ThreadLocal;

class CustomerThread extends Thread
{
    
    static Integer custId=0;
    
    private static ThreadLocal t1 = new ThreadLocal()
    {
        @Override
        protected Integer initialValue() // overridding the initialValue method using inner class concept.
        {
            return ++custId;
        }
        
    };


    CustomerThread(String name)
    {
        super(name);
    }


    public void run()
    {
        System.out.println(Thread.currentThread().getName()+"....."+ t1.get());
    }

}


class ThreadLocalDemo2
{
    
    public static void main(String[] args)
    {
        
        CustomerThread c1 = new CustomerThread("Customer Thread1");
        
        CustomerThread c2 = new CustomerThread("Customer Thread2");
        
        CustomerThread c3 = new CustomerThread("Customer Thread3");
        
        CustomerThread c4 = new CustomerThread("Customer Thread4");
        
        c1.start();
        
        c2.start();
        
        c3.start();
        
        c4.start();
    }
}


/*
run:
Customer Thread1.....1
Customer Thread4.....4
Customer Thread3.....3
Customer Thread2.....2
BUILD SUCCESSFUL (total time: 0 seconds)

*/
/*

Flow of execution
--------------------

1.First we created 4 customer threads and started them.

2. When we started the threads run() method was called.

3. Inside the run method code is

             public void run()
    {
        System.out.println(Thread.currentThread().getName()+"....."+ t1.get());
    }

4. Hence we are getting the thread name and calling get() method on ThreadLocal object.

5. When we call get() method on ThreadLocal object then internally initialValue() method is called.

6. We have overridden this initialValue method

             @Override
        protected Integer initialValue()
        {
            return ++custId;
        }
        
7. This method will make the ThreadLocal object to store initialValue for all those 4 threads.

8. So by doing this with the help of just one threadlocal object we are able to  maintain initialvalue
   for number of threads.

9. If we did not had this concept then we have to declare number of variables and put the initial value.
   If number of threads lets say is 1crore then this will be hectic as we have to declare 1cr variables 
   instead of that this concept is good.

*/