package cInnerClass;

/*

Defining a thread by extending Thread class.

Anonymous inner class approach.( When we have to run job only one 1 time)


Since the job is temporary here needed only one time hence we went with the anonymous inner class 
concept.
*/


class ThreadDemo2	
{
    public static void main(String[] args)
    {
        Thread t = new Thread()
        {
            public void run() // Here running this job is temporary we wont be needing it after one time. Hence instead of
                              // creating a class at top level we go with anonymous inner class approach.
                              // Here the usage of the class is just for instant purpose that is once usage is done it wont be needed anymore.
            {
                for(int i =0;i<=10; i++)
                {
                    System.out.println("Child thread");
                }
            }
        };
   
        t.start();
    
        
        for(int i=0;i<10;i++)
        {
            System.out.println("main thread");
        }
        
    }
}

/*
run:
main thread
main thread
main thread
main thread
main thread
main thread
main thread
main thread
main thread
main thread
Child thread
Child thread
Child thread
Child thread
Child thread
Child thread
Child thread
Child thread
Child thread
Child thread
Child thread
BUILD SUCCESSFUL (total time: 0 seconds)

*/
