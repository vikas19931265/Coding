// Using Reentrant lock in place of synchronized


package A1Locks;

import java.util.concurrent.locks.*;



class Display
{
    
    ReentrantLock l = new ReentrantLock(); // Created one Reentrant lock
    
    public  void wish(String name)
    {
        
      l.lock();//----> line 1
      /*
      
      1. When Dhoni thread will try to access the wish method it will lock the object 
          "l"
      
      2. After the completion of dhoni thread (l.unlock()) only the lock will be release
         from "l".
      
      3. Once the lock on "l" is released by the dhoni thread, then only yuvraj thread can 
         start. Hence only one thread can execute this wish() method at at a time. Hence
         we will get the regular output.
      
      
      4. If we comment lock and unlock lines then the threads will be executed simultaneously
         and we will get irregular output.
      
      5. If we are not commenting lines 1 and 2 then the threads will be executed  one by one and we 
         will get regular output.
      */
        
        
        
        for(int i=0;i<10;i++)
        {
            
            System.out.print("Good Morning");
            
            try
            {
                
                Thread.sleep(2000); 
                
            }
            
            catch(InterruptedException e)
            {
                
            }
            
        
            System.out.println(name);
        
        
        
        }
        
        
    l.unlock();//---> line 2.
    
    }
    
    
}


class MyThread1 extends Thread
{
    Display d;
    String name;
    
    MyThread1( Display d, String name)
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
        
        MyThread1 t1= new MyThread1(d,"dhoni"); // both the threads holding the same object
        
        MyThread1 t2= new MyThread1(d,"yuvraj");
        
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

//-------------------------------------------------------------******************************----------------------------------------------