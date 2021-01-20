
/* 

Overloading run() method
================================================================================


1. Overloading of run() method is always possible but thread class start() method can invoke no
   argument run() method only. 

2. The other overloaded method we have to call explicitly like a normal method call.


*/

package A1MultithreadingBasics;


 class myThread extends Thread{
    
        public void run()
        {
            System.out.println("no - arg run");
            
        }

        public void run( int i) // overloading run method.
        {
            
            System.out.println(" int - arg run");
        }


}


class ThreadDemos

{
    public static void main(String[] args)
    {
        
        myThread t = new myThread();
        t.start();
    }
    
} 

/*

o/p
run:
no - arg run
BUILD SUCCESSFUL (total time: 0 seconds)


*/

//----------------------------------------------------------------------**************---------------------------------------------------