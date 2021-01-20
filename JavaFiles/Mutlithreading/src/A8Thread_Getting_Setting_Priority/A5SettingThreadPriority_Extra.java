/*

Setting thread priority
====================================

If we are commenting setting priority line , then both main and child threads will have the same priority
5 and hence we cannot expect execution order and the exact output.

 t.setPriority(10);

If we are not commenting this line then main thread will have the priority 5 and child thread will have priority 10 hence
Child thread will get the chance first followed by main thread. In this case output is "Child thread 10 times followed by main thread
10 times".


Some platforms will not provide proper support for Thread priorities.


*/




package A8Thread_Getting_Setting_Priority;


 class MyThread2 extends Thread{
    
    public void run()
    {
        
        for(int i=0;i<10;i++)
        {
            System.out.println("Child");
            
        }
    }
 
 }


class ThreadPriorityDemo
{
    public static void main(String[] args)
    {
        
        MyThread2 t= new MyThread2();
        
        t.setPriority(10);// Here if we don't give priority then both main thread and child thread will have same priority of 5
                          // In that case Scheduler will decide as to which thread to run first.
                          // But if we specify the priority of thread here then that particular thread will be chosen by scheduler based on priority.
                          // But this support is not present in Windows System. We have to drop a mail to Microsoft requesting a patch or else our
                          // output will change and wont be fixed.
                          // set thread priority before starting of the thread.  
        
        t.start();
                          
        for(int i=0;i<=10;i++)
        {
            
            System.out.println("main Thread");
            
        }
        
        
        
    }
}
 
 
/*
run:
main Thread
main Thread
main Thread
main Thread
main Thread
main Thread
main Thread
main Thread
main Thread
main Thread
main Thread
Child
Child
Child
Child
Child
Child
Child
Child
Child
Child
BUILD SUCCESSFUL (total time: 0 seconds)



this output is not fixed, we need to get patch from windows as this is not supported in many of the operating system.
*/

////----------------------------------------------------------------------**************---------------------------------------------------