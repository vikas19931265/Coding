/*

Every class in java has a unique lock which nothing but class level lock.

If a thread wants to execute a static synchronized method then the thread requires to have 
a class level lock.

Once thread gets the class level lock then it is allowed to execute any static synchronized method 
of that particular class.

Once method execution completes then automatically thread will release the lock.



In below program we will get the regular output.

*/
package A4SynchronizedKeyword_block;


class Display2
{
    
    public static synchronized void wish(String name)
    {
        
    /*
        
     1. We will get the regular output here as if a thread wants to execute this method
        then it has to first acquire the class level lock
        meaning no other thread will be able to to use this method. It does not matter whether
        thread try to use this method in one object or another object.
        
     2. In order to use this method class level lock has to be acquired. Once the lock is obtained
        then the method will get executed and after the execution of the method the lock will be released.
        
        
     3. Till the time this lock is available with a particular thread, no thread will be available to execute
        this method.
        
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
        
        
    
    
    }
    
    
}


class MyThreads2 extends Thread
{
    Display2  d;
    String name;
    
    MyThreads2( Display2 d, String name)
    {
        
        this.d=d;
        this.name=name;
        
    }
    
    public void run()
    {
        d.wish(name);
    }
    
}




class SynchronizedDemos2
{
    
    public static void main(String[] args)
    {
        
        
        
        
        
        Display2 d1 = new Display2();
        
        Display2 d2 = new Display2();
        
       /*
        
        note
        
        Here we have created 2 threads which are working on 2 different object. Both the objects
        are calling static synchronized method.
        
        Here static synchronized method is a class level method. If a thread gets lock of this method
        then no other thread will be available to execute this method until the execution completes.
        
        In this case we get regular output of the program as "static synchronized" is a class level method
        and not an object level method.
        
        
        
        */
        
        
        MyThreads2 t1= new MyThreads2(d1,"dhoni");
        
        MyThreads2 t2= new MyThreads2(d2,"yuvraj");
        
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