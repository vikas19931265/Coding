/*  Overriding run()
================================================================================

If we are not overriding run() method then Thread class run method will be executed.
which has empty implementation hence we will not get any output.

[note]
    It is highly recommended to override the run() method otherwise don't go for 
    multithreading concept.

*/


package A1MultithreadingBasics;


class myThreads extends Thread{
    
      //not overriding run() method here, this will lead to call of run()
      // method of the thread class which has empty implementation.


}


class ThreadDemoss

{
    public static void main(String[] args)
    {
        
        myThreads t = new myThreads();
        t.start();
    }
    
} 

/*
run:
BUILD SUCCESSFUL (total time: 0 seconds)



*/

//----------------------------------------------------------------------**************---------------------------------------------------