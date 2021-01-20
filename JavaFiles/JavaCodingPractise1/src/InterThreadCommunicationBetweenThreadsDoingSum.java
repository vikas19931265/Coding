/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package New;

class MyT1 extends Thread {

    public void run() {
        synchronized (Driver111.lock) {
            try{
            Driver111.lock.wait(100);
            }
            catch(InterruptedException e)
            {
                
            }
            double sum = 0;
            for (int i = 0; i <= 10; i++) {
                System.out.println(Thread.currentThread().getName()+ " " +i);
                sum=sum+i;
                try {
                    Thread.sleep(20);
                } catch (Exception e) {
                    e.printStackTrace();
                }
           
            }
             System.out.println("sum is " + sum);
        }
    }
}

class MyT2 extends Thread {

    public void run() {
        synchronized (Driver111.lock) {
            double sum = 0;
            for (int i = 10; i <= 20; i++) {
                System.out.println(Thread.currentThread().getName()+ " " +i);
                sum=sum+i;
                try {
                    Thread.sleep(20);
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
             System.out.println("sum is " + sum);
        Driver111.lock.notify();
        }
    }
}

class Driver111 {

    static Object lock = new Object();

    public static void main(String[] args) {

        MyT1 t = new MyT1();
        MyT2 t1 = new MyT2();
        t.start();
        t1.start();
    }
}
/*
run:
Thread-1 10
Thread-1 11
Thread-1 12
Thread-1 13
Thread-1 14
Thread-1 15
Thread-1 16
Thread-1 17
Thread-1 18
Thread-1 19
Thread-1 20
sum is 165.0
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
sum is 55.0
BUILD SUCCESSFUL (total time: 1 second)

*/