//join example

package Multithreading;


class MyThread4 extends Thread
{
    public void run()
    {
        for(int i =0; i<10; i++)
        {
            System.out.println("Ram Thread");

            try
            {
                Thread.sleep(200);
            }

            catch(InterruptedException e)
            {
                e.printStackTrace();
            }

        }
    }

    public static void main(String[] args) throws InterruptedException
    {
        MyThread4 t= new MyThread4();
                  
        t.join();

        for(int i =0; i<10; i++)
        {
            System.out.println("Seeta Thread");
        }
    }

}

/*
run:
Ram Thread
Ram Thread
Ram Thread
Ram Thread
Ram Thread
Ram Thread
Ram Thread
Ram Thread
Ram Thread
Ram Thread
Seeta Thread
Seeta Thread
Seeta Thread
Seeta Thread
Seeta Thread
Seeta Thread
Seeta Thread
Seeta Thread
Seeta Thread
Seeta Thread
BUILD SUCCESSFUL (total time: 2 seconds)

*/