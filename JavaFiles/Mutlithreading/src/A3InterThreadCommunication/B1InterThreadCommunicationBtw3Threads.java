
/*

Interthread communication between three threads.

some issue with this program

run:
0...Thread2
1...Thread2
2...Thread2
3...Thread2
4...Thread2
5...Thread2
6...Thread2
7...Thread2
8...Thread2
9...Thread2
10...Thread2
0...Thread1
1...Thread1
2...Thread1
3...Thread1
4...Thread1
5...Thread1
6...Thread1
7...Thread1
8...Thread1
9...Thread1
10...Thread1
My thread 2 goes for waiting
0...Thread3
1...Thread3
2...Thread3
3...Thread3
4...Thread3
5...Thread3
6...Thread3
7...Thread3
8...Thread3
9...Thread3
10...Thread3
BUILD SUCCESSFUL (total time: 0 seconds)


 */
package A3InterThreadCommunication;

class GenNumber {

    static int result;

    static GenNumber g = new GenNumber();

    public static void Number() {
        for (int i = 0; i <= 10; i++) {

            System.out.println(i + "..." + Thread.currentThread().getName());

        }
    }

}

class MyThread extends Thread {

    MyThread(String s) {
        super(s);
    }

    public void run() {

        synchronized (GenNumber.g) {
            GenNumber.g.Number();

            GenNumber.g.notifyAll();

        }

    }
}

class MyThread1 extends Thread {

    MyThread1(String s) {
        super(s);
    }

    public void run() {
        synchronized (GenNumber.g) // to call wait method on an object, it is mandatary to get the lock first.
        {
           try{
            GenNumber.g.wait(100);
             } catch(InterruptedException e){}
            GenNumber.g.Number();

            GenNumber.g.notifyAll();

        }
    }
}

class MyThread21 extends Thread {

    MyThread21(String s) {
        super(s);
    }

    public void run() {
        synchronized (GenNumber.g) {
            try {

                GenNumber.g.wait(100);// if this thread get to execute ,first then we are forcing it to wait.

                System.out.println("My thread 2 goes for waiting");

                GenNumber.g.Number();

            } catch (InterruptedException e) {

            }
        }
    }
}

class Driverss {

    public static void main(String[] args) {
        MyThread t1 = new MyThread("Thread1");

        t1.start();

        MyThread1 t2 = new MyThread1("Thread2");

        t2.start();

        MyThread21 t3 = new MyThread21("Thread3");

        t3.start();
    }
}

/*
run:
0...Thread1
1...Thread1
2...Thread1
3...Thread1
4...Thread1
5...Thread1
6...Thread1
7...Thread1
8...Thread1
9...Thread1
10...Thread1
0...Thread2
1...Thread2
2...Thread2
3...Thread2
4...Thread2
5...Thread2
6...Thread2
7...Thread2
8...Thread2
9...Thread2
10...Thread2
My thread 2 goes for waiting
0...Thread3
1...Thread3
2...Thread3
3...Thread3
4...Thread3
5...Thread3
6...Thread3
7...Thread3
8...Thread3
9...Thread3
10...Thread3
BUILD SUCCESSFUL (total time: 0 seconds)



At times we may get the output as 

0...Thread1
1...Thread1
2...Thread1
3...Thread1
4...Thread1
5...Thread1
6...Thread1
7...Thread1
8...Thread1
9...Thread1
10...Thread1
0...Thread2
1...Thread2
2...Thread2
3...Thread2
4...Thread2
5...Thread2
6...Thread2
7...Thread2
8...Thread2
9...Thread2
10...Thread2


and then complete pgm goes to waiting

This is because if main thread does not complete first and Thread3
gets the chance to execute then it is calling wait method. Now since
other threads would not have started hence there is no notification for thread3 to to
receive hence the complete program goes to the blocked state.

To fix this give parameters in wait method like wait(10) so that 
thread waits for specific amount of time and if no response comes
then it can continue to execute and program does not get blocked.
*/
