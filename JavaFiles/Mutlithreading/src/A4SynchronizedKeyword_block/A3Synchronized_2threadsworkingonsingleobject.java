
/*

synchronized method- two threads working on single object. 
*/

package A4SynchronizedKeyword_block;


class Display
{
    
    public synchronized void wish(String name)
    {
        
    /*
        
     1. if we are not declaring  wish method as synchronized then both the threads will be executed simultaneously and hence
        we will get irregular output.
        
        run:
        Good MorningGood Morningdhoni
        Good Morningyuvraj
        Good Morningdhoni
        Good Morningyuvraj
        Good Morningdhoni
        Good Morningyuvraj
        Good Morningdhoni
        Good Morningyuvraj
        Good Morningdhoni
        Good Morningyuvraj
        Good Morningdhoni
        Good Morningyuvraj
        Good Morningdhoni
        Good Morningyuvraj
        Good Morningdhoni
        Good Morningyuvraj
        Good Morningdhoni
        Good Morningyuvraj
        Good Morningdhoni
        yuvraj
        BUILD SUCCESSFUL (total time: 20 seconds)

        
     2.   If we declare wish method as synchronized then at a time only one thread is allowed to execute wish() method on the given display
          object hence we will get regular output.
        
        
        
     */
        
        
        
        
        
        for(int i=0;i<10;i++)
        {
            
            System.out.print("Good Morning");
            
            try
            {
                
                Thread.sleep(2000); // Everytime thread goes to sleep, another waiting thread will get the chance.
                
            }
            
            catch(InterruptedException e)
            {
                
            }
            
        
            System.out.println(name);
        
        
        
        }
        
        
    
    
    }
    
    
}


class MyThread extends Thread
{
    Display d;
    String name;
    
    MyThread( Display d, String name)
    {
        
        this.d=d;
        this.name=name;
        
    }
    
    public void run()
    {
        d.wish(name);
    }
    
}




class SynchronizedDemo
{
    
    public static void main(String[] args)
    {
        Display d = new Display();
        
        MyThread t1= new MyThread(d,"dhoni"); // both the threads holding the same object
        
        MyThread t2= new MyThread(d,"yuvraj");
        
        t1.start();
        
        t2.start();
    }
}

/*
run:
Good Morningdhoni
Good Morningdhoni
Good Morningdhoni
Good Morningdhoni
Good Morningdhoni
Good Morningdhoni
Good Morningdhoni
Good Morningdhoni
Good Morningdhoni
Good Morningdhoni
Good Morningyuvraj
Good Morningyuvraj
Good Morningyuvraj
Good Morningyuvraj
Good Morningyuvraj
Good Morningyuvraj
Good Morningyuvraj
Good Morningyuvraj
Good Morningyuvraj
Good Morningyuvraj
BUILD SUCCESSFUL (total time: 40 seconds)
*/