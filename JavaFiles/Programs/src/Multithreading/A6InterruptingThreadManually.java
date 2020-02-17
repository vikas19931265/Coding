// Interrupting the thread manually.


package Multithreading;


class MyThread6 extends Thread
{
    public void run()
    {
        for(int i =0; i<=10; i++)
        {
            try
            {
                Thread.sleep(200);
            }
        
            catch(InterruptedException e)
            {
                e.printStackTrace();
                System.out.println("Thread is interrupted");
            }
            
        }
    }

    public static void main(String[] args) throws InterruptedException
    {
        MyThread6 t = new MyThread6();
        t.start();
        t.interrupt();
    
    }


}


/*
run:
Thread is interrupted
java.lang.InterruptedException: sleep interrupted
	at java.lang.Thread.sleep(Native Method)
	at Multithreading.MyThread6.run(A6InterruptingThreadManually.java:17)

*/