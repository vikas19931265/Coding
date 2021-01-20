package A3InterThreadCommunication;

class DriverThread {

    public static void main(String[] args) throws InterruptedException {

        MyThread2 t = new MyThread2(); // Child thread is created 

        t.start(); // child thread is started, now the program contains 2 threads, main and child thread

        synchronized (t) {

            t.wait();// wait method called on child thread inside main thread hence main thread goes to the
                     // waiting state.

            for (int i = 0; i <= 10; i++) {

                System.out.println("main Thread" + i);

            }

        }

    }

}

class MyThread2 extends Thread {

    public void run() {

        synchronized (this) { // current object will always be the child thread, as only one child thread exist in the program
                              // hence if child thread gets the chance then child thread output will be printed and no thread
                              // can interfere until operation is performed as its a synchronized block.
                              // If main thread gets the chance first then , as wait() method is called inside main hence again child thread
                              // only will get the chance. Once the execution of the child thread completes it calls the notify method and inform 
                              // the main thread.
            
            
     /*
                              
     note
                              
        if program contains 2 child threads , then which thread will be called first is up to the scheduler to decide.                      
                              
     */       
                              
                for (int i = 0; i <= 10; i++) {
              
                
                System.out.println("Child Thread" + i);

            }

            

            this.notify();
        }

    }

}


/*
run:
Child Thread0
Child Thread1
Child Thread2
Child Thread3
Child Thread4
Child Thread5
Child Thread6
Child Thread7
Child Thread8
Child Thread9
Child Thread10
main Thread0
main Thread1
main Thread2
main Thread3
main Thread4
main Thread5
main Thread6
main Thread7
main Thread8
main Thread9
main Thread10
BUILD SUCCESSFUL (total time: 0 seconds)





 */