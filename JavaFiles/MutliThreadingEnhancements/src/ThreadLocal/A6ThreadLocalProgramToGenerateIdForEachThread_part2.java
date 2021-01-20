
// ThreadLocal Demo program by Vikas

package ThreadLocal;



class MyThread extends Thread
{
    
       static int id;
       
        MyThread(String s)
        {
            super(s);
        }
    
    static  ThreadLocal t = new ThreadLocal()
    {
        // Overriding initial value method by creating anonymous inner class.
        
        protected Integer initialValue()
        {
            return id++;
        }
    };
    
 
        public void run()
        {
            System.out.println(Thread.currentThread().getName()+"..."+ t.get()); // When we call get method on threadlocal object
                                                                                // which ever thread is currently in run will get its value from the initialValue
                                                                                // method called.
        }
    
    
}




class Driver
{
    
    public static void main(String[] args)
    {
        
        MyThread t1= new MyThread("Thread 1");
        
        MyThread t2= new MyThread("Thread 2");
        
        MyThread t3= new MyThread("Thread 3");
        
        t1.start();
        
        t2.start();
        
        t3.start();
    }
    
    
}

/*
run:
Thread 1...0
Thread 3...2
Thread 2...1
BUILD SUCCESSFUL (total time: 0 seconds)

*/

//-----------------------------------------------------------------****************************-----------------------------------------------------