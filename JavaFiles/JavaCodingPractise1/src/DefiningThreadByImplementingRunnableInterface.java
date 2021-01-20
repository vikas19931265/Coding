
package New;

class ThreadByImplementingRunnableInterface implements Runnable
{
   public void run()
   {
       for(int i =0; i<=10; i++)
       {
           System.out.println(Thread.currentThread().getName()+ " " +i);
       }
   }
}

class Driver11
{
    public static void main(String[] args)
    {
        Thread t= new Thread(new ThreadByImplementingRunnableInterface());
        t.start();
    }
}

/*
run:
Thread-0 0
Thread-0 1
Thread-0 2
Thread-0 3
Thread-0 4
Thread-0 5
Thread-0 6
Thread-0 7
Thread-0 8
Thread-0 9
Thread-0 10
BUILD SUCCESSFUL (total time: 0 seconds)

*/
