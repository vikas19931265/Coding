/*

Synchronized keyword

*/
package Multithreading;


class Display
{
    public synchronized void display() 
    {
        for(int i =1; i<=10; i++)
        {
            try
            {
                Thread.sleep(200);
                System.out.println(Thread.currentThread().getName()+ "  "+ i);
            }
            
            catch(InterruptedException e ){}
    
        
        }
    }   

}

class ThreadMy1 extends Thread
{
    Display d ;
    
    public void getDisplayObject(Display d)
    {
        this.d=d;
    }

    public void run()
    {
        d.display(); // one thread using d object having synchronized method hence no other thread can use same d object synchronized methods
    }
}

class ThreadMy2 extends Thread
{
    Display d ;
    
    public void getDisplayObject(Display d)
    {
        this.d=d;
    }

    public void run()
    {
        d.display();
    }
}

class Driver2
{
    public static void main(String[] args)
    {
        Display d = new Display();
        
        ThreadMy1 t1 = new ThreadMy1();
        ThreadMy2 t2 = new ThreadMy2();
        
        t1.getDisplayObject(d);
        t2.getDisplayObject(d);
        
        t1.start();
        t2.start();
        
        
    }
}

/*
run:
Thread-0  1
Thread-0  2
Thread-0  3
Thread-0  4
Thread-0  5
Thread-0  6
Thread-0  7
Thread-0  8
Thread-0  9
Thread-0  10
Thread-1  1
Thread-1  2
Thread-1  3
Thread-1  4
Thread-1  5
Thread-1  6
Thread-1  7
Thread-1  8
Thread-1  9
Thread-1  10
BUILD SUCCESSFUL (total time: 4 seconds)

*/