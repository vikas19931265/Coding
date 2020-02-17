
/*

       t1--------->-        -----------------  . wish
                            |d(display Object |    
       t2------------>      |                 |. wish
                            ------------------


Both threads trying to accesss same object for some part of method code, hence whichever part of code will be accessed by both
the threads is declared as static.

Here only one current object.

*/


package A5SynchronizedBlock;


 class Display {
    

 public void wish(String name)
 {
     
     //;;;;;; 1 lakh lines of code
     
     synchronized(this)
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
     
     // 1 lak lines of code



 }
 
 
 
 }


class MyThread extends Thread
{
    
    Display d;
    String name;
    
    MyThread(Display d, String name)
    {
        this.d=d;
        this.name=name;
    }
    
    
    public void run()
    {
        d.wish(name);
    }
    

 }


class SynchronizedDemo
{
    
    public static void main(String[] args)
    {
        Display d = new Display();
        /*
        
        Case 2: When 2 objects accessed by 2 different threads
        
        Display d1 = new Display(); case 2 if we declare 2 display object
        
        MyThread t1= new MyThread(d, "dhoni');
        
        MyThread t2= new MyTherad(d1, "yuvraj");
        
        
        
       t1--------->-        -----------------  . wish
                            |d(display Object |    
                            |. wish           |  
                            ------------------

        
                             -----------------  
                            |d(display Object |    
       t2------------>      |                 |. wish
                            ------------------
        
        
        Here both threads will acquire locks on different display object hence they will execute
        simultaneously and we will get irregular output.
        
        
        */
        
        
        MyThread t1= new MyThread(d, "Dhoni");
        MyThread t2= new MyThread(d,"Yuvraj");
        
        t1.start();
        t2.start();
    }
    
}

/*
run:
Good MorningDhoni
Good MorningDhoni
Good MorningDhoni
Good MorningDhoni
Good MorningDhoni
Good MorningDhoni
Good MorningDhoni
Good MorningDhoni
Good MorningDhoni
Good MorningDhoni
Good MorningYuvraj
Good MorningYuvraj
Good MorningYuvraj
Good MorningYuvraj
Good MorningYuvraj
Good MorningYuvraj
Good MorningYuvraj
Good MorningYuvraj
Good MorningYuvraj
Good MorningYuvraj
BUILD SUCCESSFUL (total time: 40 seconds)




*/