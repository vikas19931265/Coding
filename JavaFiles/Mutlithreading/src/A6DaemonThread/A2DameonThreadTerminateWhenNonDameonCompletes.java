/*

Whenever last non Daemon thread terminates , automatically all daemon threads will be terminated irrespective of there position

*/


package A6DaemonThread;


class MyThreads extends Thread {

    public void run()
    {
        for(int i=0; i<10;i++)
        {

            System.out.println("Child Thread");

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


 class DaemonThreadDemo
 {
     public static void main(String[] args)
     {

         MyThreads t = new MyThreads();

         t.setDaemon(true);// If we comment this line then both child and parent thread will be executed until there end.

        /*

         If we comment this line , then both main and child threads are non daemon threads and hence both the
         threads will be executed until there completion.

         If we are not commenting line 1 then main thread is non daemon thread and chlid thread is daemon.
         Hence whenever main thread terminates then automatically child thread will also be terminated.


         In this case output is

         run:
        End of main thread
        Child Thread
        BUILD SUCCESSFUL (total time: 0 seconds)

        or

        End of main thread

        or

        child Thread
        End of main thread.

         */



         t.start();

         System.out.println("End of main thread");


     }

 }


/*

if the main thread is non daemon and child is also non daemon

run:
Child Thread
End of main thread
Child Thread
Child Thread
Child Thread
Child Thread
Child Thread
Child Thread
Child Thread
Child Thread
Child Thread
BUILD SUCCESSFUL (total time: 20 seconds)



if main is non daemon and child is deamon then one once the non daemon is completed
daemon will also be killed , further execution will not take place.


run:
End of main thread
Child Thread
BUILD SUCCESSFUL (total time: 0 seconds)


*/