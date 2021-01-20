
package Multithreading;
class MyThreading1 extends Thread {
    int status;
    static int minValue = 1;
    static Object lock = new Object();
    MyThreading1(int status) {
        this.status = status;
    }
    public void run() {
        //System.out.println("Currently executing thrad " + Thread.currentThread().getName());
        synchronized (lock) {
            //System.out.println("Currently executing thrad getting lock " + Thread.currentThread().getName() + " status value " + status);
            //System.out.println("first :status value " + status + " min value is " + minValue);
            if (status == minValue) {
                //System.out.println("status value " + status + " min value is " + minValue);
                for (int i = 1; i < 11; i++) {
                    System.out.println(Thread.currentThread().getName() + "  " + i);
                }
                minValue++;
                lock.notifyAll();
                //System.out.println("min value now is " + minValue);
            } else {
                try {
                    lock.wait(20); // thread will wake up after wait and do the below operations
                    // System.out.println(Thread.currentThread().getName() + "woke up" + " status value " + status + " and minValue " + minValue);
                    if (status == minValue) {
                        for (int i = 1; i < 11; i++) {
                            System.out.println(Thread.currentThread().getName() + " " + i);
                        }
                        minValue++;
                    } else {
                        lock.wait(20); // thread will wake up after the wait and then do the below operations.
                        for (int i = 1; i < 11; i++) {
                            System.out.println(Thread.currentThread().getName() + " " + i);
                        }
                    }
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        }
    }
}
class MultithreadingCommunication {
    public static void main(String[] args) {
        MyThreading1 t1 = new MyThreading1(1);
        MyThreading1 t2 = new MyThreading1(2);
        MyThreading1 t3 = new MyThreading1(3);
        t1.start();
        t2.start();
        t3.start();
    }
}
/*
run:
Thread-0  1
Thread-0  2
Thread-0  3
Thread-0  4
Thread-0  5
Thread-0  6
Thread-0  7
Thread-0  8
Thread-0  9
Thread-0  10
Thread-1  1
Thread-1  2
Thread-1  3
Thread-1  4
Thread-1  5
Thread-1  6
Thread-1  7
Thread-1  8
Thread-1  9
Thread-1  10
Thread-2 1
Thread-2 2
Thread-2 3
Thread-2 4
Thread-2 5
Thread-2 6
Thread-2 7
Thread-2 8
Thread-2 9
Thread-2 10
BUILD SUCCESSFUL (total time: 0 seconds)
*/