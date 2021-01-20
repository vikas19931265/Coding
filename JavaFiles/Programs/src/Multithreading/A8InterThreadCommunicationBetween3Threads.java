package Multithreading;

class NumberGenerator {

    static NumberGenerator numGen = new NumberGenerator();

    private NumberGenerator() {

    }

    public static NumberGenerator getNumberGenerator() {
        return numGen;
    }

    public void generateNumbers() {
        for (int i = 1; i <= 10; i++) {
            System.out.println(Thread.currentThread().getName() + " " + i);
        }
    }

}

class Thread1 extends Thread {

    NumberGenerator g;

    Thread1(String s) {
        super(s);
    }

    public void recevieGenObject(NumberGenerator g) {
        this.g = g;
        System.out.println(g);
    }

    @Override
    public void run() {
        synchronized (g) {
            System.out.println("-------Starting Thread 1--------------------------");
            g.generateNumbers();
            g.notifyAll();

        }
    }

}

class Thread2 extends Thread {

    NumberGenerator g;

    Thread2(String s) {
        super(s);
    }

    public void recevieGenObject(NumberGenerator g) {
        this.g = g;
        System.out.println(g);
    }

    public void run() {
        synchronized (g) {
            try {
                g.wait();

                System.out.println(Thread.currentThread().getName() + " is notified ");

                g.generateNumbers();

            } catch (InterruptedException e) {

            }

            g.notifyAll();

        }

    }

}

class Thread3 extends Thread {

    NumberGenerator g;

    Thread3(String s) {
        super(s);
    }

    public void recevieGenObject(NumberGenerator g) {
        this.g = g;
        System.out.println(g);
    }

    public void run() {

        synchronized (g) {
            try {
                g.wait();

                System.out.println(Thread.currentThread().getName() + " is notified ");

                g.generateNumbers();

            } catch (InterruptedException e) {

            }

            g.notifyAll();

        }

    }

}

class Driver {

    public static void main(String[] args) {
        Thread1 t1 = new Thread1("Thread1");
        Thread2 t2 = new Thread2("Thread2");
        Thread3 t3 = new Thread3("Thread3");
        NumberGenerator g = NumberGenerator.getNumberGenerator();
        t1.recevieGenObject(g);
        t2.recevieGenObject(g);
        t3.recevieGenObject(g);
        t3.start();
        t2.start();
        t1.start();

    }
}


/*
run:
Multithreading.NumberGenerator@4aa298b7
Multithreading.NumberGenerator@4aa298b7
Multithreading.NumberGenerator@4aa298b7
-------Starting Thread 1--------------------------
Thread1 1
Thread1 2
Thread1 3
Thread1 4
Thread1 5
Thread1 6
Thread1 7
Thread1 8
Thread1 9
Thread1 10
Thread2 is notified 
Thread2 1
Thread2 2
Thread2 3
Thread2 4
Thread2 5
Thread2 6
Thread2 7
Thread2 8
Thread2 9
Thread2 10
Thread3 is notified 
Thread3 1
Thread3 2
Thread3 3
Thread3 4
Thread3 5
Thread3 6
Thread3 7
Thread3 8
Thread3 9
Thread3 10
BUILD SUCCESSFUL (total time: 0 seconds)

*/