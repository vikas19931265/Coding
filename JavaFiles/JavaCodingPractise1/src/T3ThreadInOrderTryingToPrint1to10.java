/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package New;

class Threading extends Thread {

    int value;
    static int minValue = 1;
    static Object lock = new Object();

    Threading(int value) {
        this.value = value;
    }

    public void run() {
        synchronized (lock) {
            if (this.value == minValue) {
                for (int i = 0; i <= 10; i++) {
                    System.out.println(Thread.currentThread().getName() + " " + i);
                }
                minValue++;
                lock.notifyAll();
            } else {
                try {
                    lock.wait(100);
                    if (this.value == minValue) {
                        for (int i = 0; i <= 10; i++) {
                            System.out.println(Thread.currentThread().getName() + " " + i);
                        }
                    minValue++;
                    lock.notifyAll();
                    }
                    else
                    {
                        lock.wait(100);
                        if(this.value==minValue)
                        {
                            for (int i = 0; i <= 10; i++) {
                            System.out.println(Thread.currentThread().getName() + " " + i);
                        }
                        minValue++;
                        lock.notifyAll();
                        }
                        
                        
                    }
                
                
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        }

    }
}

class DriverPgming {

    public static void main(String[] args) {
        Threading t1 = new Threading(1);
        Threading t2 = new Threading(2);
        Threading t3 = new Threading(3);

        t1.start();
        t2.start();
        t3.start();

    }
}
