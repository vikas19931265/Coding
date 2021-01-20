package cInnerClass;

/*

Anonymous inner class:

inner class implemening an interface.
---------------------------------------

 */

class ThreadDemo50 {

    public static void main(String[] args) {

        Runnable r = new Runnable() {
            
            public void run() // We creted an inner class here whose object will be used just for instant use
            {                 // After using it , it wont be used again.    
                for (int i = 0; i < 10; i++) {
                    System.out.println("Child thread");
                }
            }
        };

        Thread t = new Thread(r);

        t.start();

        for (int i = 0; i < 10; i++) {
            System.out.println("Main therad");
        }

    }
}

/*
run:
Main therad
Main therad
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
Main therad
Main therad
Main therad
Main therad
Main therad
Main therad
Main therad
Main therad
BUILD SUCCESSFUL (total time: 0 seconds)

*/