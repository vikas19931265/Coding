/*

Demo program to check.

1. Starting two threads simultaneously , operating on different objects of same class.

Result: Thread Scheduler will choose which thread to execute first. Output can be mixed.

    run:
Thread-0...1
Thread-1...1
Thread-0...2
Thread-1...2
Thread-1...3
Thread-0...3
Thread-1...4
Thread-0...4
Thread-1...5
Thread-1...6
Thread-0...5
Thread-0...6
Thread-1...7
Thread-0...7
Thread-1...8
Thread-0...8
Thread-1...9
Thread-1...10
Thread-0...9
Thread-0...10
BUILD SUCCESSFUL (total time: 0 seconds)


2, Starting two threads simultaneously , operating on same object will also give the 
  the mixed output. To ensusure that at at time only one thread access the object
  we have to make the method synchronized.

*/
package A4SynchronizedKeyword_block;


class MyThreadss extends Thread
{
     static  Printss p = new Printss(); // declared the variable static to ensure that both the threads operate on the 
                                        // same object of the Print class. If the variable was instance then both the threads
                                        // will have two different copies of the object and they will operate on that independently.
   
      public void run()
    {
      

         p.generateNumber();
        
    
    }
    



}

class Driver2
{
    public static void main(String[] args)
    {
        
        MyThreadss t = new MyThreadss();
        
        t.start();
        
        MyThreadss t1= new MyThreadss();
        
        t1.start();
    }
}


class Printss
{
    
 
    public  synchronized  void  generateNumber()
    {
        
        
        for(int i=1;i<=10;i++)
        {
            System.out.println(Thread.currentThread().getName()+"...."+ i);
        
       
        
        }
    
        
    
    }
   
}


/*
run:
Thread-0....1
Thread-0....2
Thread-0....3
Thread-0....4
Thread-0....5
Thread-0....6
Thread-0....7
Thread-0....8
Thread-0....9
Thread-0....10
Thread-1....1
Thread-1....2
Thread-1....3
Thread-1....4
Thread-1....5
Thread-1....6
Thread-1....7
Thread-1....8
Thread-1....9
Thread-1....10
BUILD SUCCESSFUL (total time: 0 seconds)

*/

//-----------------------------------------------------------***********************************--------------------------------