package cInnerClass;

/*

Anonymous inner class that implements interface

Defining a thread by implementing Runnable interface.
-------------------------------------------------------

Normal class approach

 */

class MyRunnalbe implements Runnable {

    public void run() {
        for (int i = 0; i < 10; i++) {
            System.out.println("Child thread");
        }
    }
}

class ThreadDemo5 {

    public static void main(String[] args) {
        Thread t = new Thread(new MyRunnalbe());

        t.start();

        for (int i = 0; i < 10; i++) {
            System.out.println("Main thread");
        }

    }
}


/*
run:
Main thread
Main thread
Main thread
Main thread
Main thread
Main thread
Main thread
Main thread
Child thread
Child thread
Child thread
Child thread
Child thread
Child thread
Child thread
Child thread
Child thread
Child thread
Main thread
Main thread
BUILD SUCCESSFUL (total time: 0 seconds)

*/