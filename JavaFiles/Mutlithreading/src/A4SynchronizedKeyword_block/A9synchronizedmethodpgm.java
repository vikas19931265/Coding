
/*

program on synchronized method.



       t1--------->-        -----------------  . diplayn();  
                            |d(display Object |    
       t2------------>      |                 |. diplayc();  
                            ------------------



Thread t1 and t2 trying to access the same object calling different methods.

t1 tying to call displayn() and t2 trying to call displayc();

*/



package A4SynchronizedKeyword_block;


class Display3
        
{
    public synchronized void displayn() // This method is synchronized hence a thread trying to access this method
                                       // has to acquire the object lock first. If thread1 is executing fist then this thread will
                                       // start working on the object. No other thread can interfere with displayn() method here
                                       // on the same object as this method is declared as synchronized method.
    {
        
        for(int i=1; i<=10 ;i++)
        {
            
            System.out.println(i);
            
            
            try
            {
                
                Thread.sleep(2000);
                
            }
        
            catch(InterruptedException e)
            {
                
            }
        }
        
    }
    
        public  synchronized void displayc() // This method is going to be called by thread2. If thread1 is executing displayc() method
                                             // then this thread has to wait until thread1 completes. Hence the point is that 2 threads t1 and t2
                                             // are working on the same object having synchronized method hence only one thread can access a synchronized
                                             // method at a time, hence we will get the regular output.
        {
            
            for(int i=65; i<=75; i++)
            {
                
                System.out.print((char)i);
                
                try
                {
                    
                    Thread.sleep(2000);
                
                }
                
                catch(InterruptedException e)
                {
                
                
                }
                
                
                
            }
            
        }
        
        }
        
   

class MyThread1 extends Thread
{
    
    Display3 d;
    
    MyThread1(Display3 d)
    {
        this.d=d;
        
        
     }
    
    public void run()
    {
        
        d.displayn();
    }
    
    
    
}

/*

[note]

Here either thread1 or thread2 is going to be executed first, this decision is in hands of 
the thread scheduler.


*/    
  
class MyThread2 extends Thread
{
    
    Display3 d;
    
    MyThread2(Display3 d)
    {
        
        this.d=d;
        
        
    }
    
    public void run()
    {
        
       
        /*
        display method is declared as synchronized hence thread will acquire the object level lock
        and will not allow any other thread to execute any synchronized method of the same class.
        
        But since there are two methods in this case , its upto the thread scheduler to decide that which
        method will run first and which method will run next.
        
        
        */
        
        d.displayc(); 
    }
    
}


class SynchronizedDemo1
{
    
    public static void main(String[] args)
    {
        
        Display3 d = new Display3(); // Created one display object
        
        MyThread1 t1= new MyThread1(d); // All threads accepting single display object as parameter
        
        MyThread2 t2= new MyThread2(d);
        
        t1.start(); // started both the threds
        
        t2.start();
    
    
    }
    
    
}

/*
run:
1
2
3
4
5
6
7
8
9
10
ABCDEFGHIJKBUILD SUCCESSFUL (total time: 42 seconds)




*/







