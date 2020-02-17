
/*
At a time only one thread is executed. If you sleep a thread for the specified time,

the thread shecedular picks up another thread and so on. 

*/

package A2InterruptingThread;


 class Thread5  extends Thread{
    
     public void run() 
     {
         
         for(int i=0;i<=3;i++)
         {
             
             System.out.println(i);
             
             try{
                 
                 Thread.sleep(1000);//if t1 is running, it goes to sleep and let t2 execute and vice versa.
             }
             
             catch(InterruptedException e)
             {
                 
             }
             
         }
         
     }
     
     public static void main(String[] args)
     {
         
         Thread5 t1= new Thread5();
         
         Thread t2= new Thread5();
         
         t1.start(); // either t1 or t2 thread will be picked by the scheduler.
         
         t2.start();
         
         
     }
  }


/*
run:
0
0
1
1
2
2
3
3
BUILD SUCCESSFUL (total time: 4 seconds)



*/
