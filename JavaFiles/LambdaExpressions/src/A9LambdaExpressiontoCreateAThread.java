
/*
Java Lambda Expression to create a thread
 */

class Driver9
{

    public static void main(String[] args) throws Exception
    {
        Runnable r = () ->
        {
            for (int i = 0; i <= 10; i++)
            {
                System.out.println("Child thread is running " + i);
                try
                {
                    Thread.sleep(1000);
                } catch (InterruptedException e)
                {
                }
            }
        };
        Thread t = new Thread(r);
        t.start();
        for (int i = 0; i <= 10; i++)
        {
            System.out.println("Parent thread is running" + i);
            Thread.sleep(1000);
        }
    }
}

/*
Parent thread is running0
Child thread is running 0
Parent thread is running1
Child thread is running 1
Parent thread is running2
Child thread is running 2
Parent thread is running3
Child thread is running 3
Parent thread is running4
Child thread is running 4
Child thread is running 5
Parent thread is running5
Child thread is running 6
Parent thread is running6
Child thread is running 7
Parent thread is running7
Child thread is running 8
Parent thread is running8
Child thread is running 9
Parent thread is running9
Child thread is running 10
Parent thread is running10

Completed with exit code: 0

 */
