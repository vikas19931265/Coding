package A4SynchronizedKeyword_block;

/*

Demo program on usage of synchronized method.

1. If a method is declared as synchronized then only one thread can access it at a time.

2. If another thread is trying to access the method then the thread will go into the waiting state.

3. This logic is applicable only when more then one thread are trying to perform an operation on the same
   object.

[note]


    If method is synchronized and the thread sleeps in between and method is declared as synchronized
then in that case same thread will still continue to perform its operation unlike the situation when
thread sleeps another thread gets the chance to execute.

*/

 class Thread10 extends Thread
{
    
     Display11 d;
     
     
     Thread10(Display11 d)
     {
         this.d=d;
     }
     
    public void run()
   {
     
       d.display(); // both threads performing operation on same object method.
 
   }

 }

 class Display11
 {
     
     public synchronized void display()
     {
         
         for(int i=0;i<=10;i++)
         {
             
             System.out.println(i);
         
             try
             {
                 Thread.sleep(1000);
             }
         
             catch(InterruptedException e)
             {
                 
             }
         
         
         }
         
         
     }
 }
 
 class Drivers
{
    
    
    public static void main(String[] args)
    {
        
        Display11 d = new Display11();
        
        Thread10 d1 = new Thread10(d);  // both threads having access to same object.
        
        Thread10 d2= new Thread10(d);
        
        d1.start();
        
        d2.start();
      
        
        
        
    }
}

/*
run:
0
1
2
3
4
5
6
7
8
9
10
0
1
2
3
4
5
6
7
8
9
10
BUILD SUCCESSFUL (total time: 22 seconds)


*/