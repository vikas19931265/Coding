
// Interthread communication basic program.

package Multithreading;

class MyThread7 extends Thread
{
    public void run()
    {
        int sum=0;
        
       synchronized(this)
       {
        
        for(int i =0; i<=10;i++)
        {
            sum=sum+i;
            
            try
            {
                Thread.sleep(200);
            }
            
            catch(InterruptedException e)
            {
                
            }
        
        }
    
        System.out.println("Sum of numbers is "+ sum);
        
        this.notify();
        
       
       }
    }

    public static void main(String[] args) throws InterruptedException
    {
        MyThread7 t = new MyThread7();
        
        t.start();
        
        synchronized(t) // main thread gets lock of object "t"
        {
            t.wait(2000);
        }
    }



}

/*
run:
Sum of numbers is 55
BUILD SUCCESSFUL (total time: 2 seconds)

*/