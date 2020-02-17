/*

If a thread wants to wait until the execution of another thread then we can call the join method
on the thread. But please note that the join method has to be called upon the object.

 */
package New;

class MyThread extends Thread {

    public static void main(String[] args) throws Exception {
        MyThread t = new MyThread();
        t.start();
        t.join();
        for (int i = 0; i <= 10; i++) {
           
            System.out.println(Thread.currentThread().getName() + " seetha thread");
        }
    }

    public void run() {
        try {
            for (int i = 0; i <= 10; i++) {
                
                System.out.println(Thread.currentThread().getName() + " rama thread");
                Thread.sleep(10);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

    }
}

/*
run:
Thread-0 rama thread
Thread-0 rama thread
Thread-0 rama thread
Thread-0 rama thread
Thread-0 rama thread
Thread-0 rama thread
Thread-0 rama thread
Thread-0 rama thread
Thread-0 rama thread
Thread-0 rama thread
Thread-0 rama thread
main seetha thread
main seetha thread
main seetha thread
main seetha thread
main seetha thread
main seetha thread
main seetha thread
main seetha thread
main seetha thread
main seetha thread
main seetha thread
BUILD SUCCESSFUL (total time: 0 seconds)

*/