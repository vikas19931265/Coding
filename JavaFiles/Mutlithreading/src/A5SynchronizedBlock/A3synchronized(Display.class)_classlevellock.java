/*

Class level lock
=====================================================

Lock concept is applicable only for object types and class types, but not for primitive types.
Hence we cannot pass primitive type as argument to synchronized block otherwise we will get
compile time error saying unexpected found it required reference.


example

     int x=10;

     synchronized(x)
    {
        --
        --
    }


This is invalid.

*/

package A5SynchronizedBlock;


 class Display1 {
    

 public void wish(String name)
 {
     
     //;;;;;; 1 lakh lines of code
     
     synchronized(Display1.class) // class level lock . To execute wish method thread has to obtain class level.
     {
         
         for(int i=0; i<10;i++)
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
     
     // 1 lakh lines of code



 }
 
 
 
 }


class MyThread1 extends Thread
{
    
    Display1 d;
    String name;
    
    MyThread1(Display1 d, String name)
    {
        this.d=d;
        this.name=name;
    }
    
    
    public void run()
    {
        d.wish(name);
    }
    

 }


class SynchronizedDemo1
{
    
    public static void main(String[] args)
    {
        Display1 d = new Display1(); // Created two objects.
        Display1 d1= new Display1();
  
        
        MyThread1 t1= new MyThread1(d, "Dhoni");
        MyThread1 t2= new MyThread1(d1,"Yuvraj");
        
        t1.start();
        t2.start();
    }
    
}






