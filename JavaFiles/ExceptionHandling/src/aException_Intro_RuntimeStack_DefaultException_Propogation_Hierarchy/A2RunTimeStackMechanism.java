/* Run time Stack Mechanism.


1. For every thread JVM will create a run time stack. Each and every method call
   performed by that thread will be stored in the corresponding stack.

2. Each entry in the stack is called as Stack Frame or Activation Record.

3. After completing every method call the corresponding entry from  the stack will be
   removed.

4. After completing all the method calls the stack will become empty and the empty stack
   will be destroyed by the JVM just before  terminating the thread.

note

    Don’t confuse between main thread and main method. Both of them are different terms.



|      |                    |       |
|      |                    |       |
|      |                    |       |
|      |                    |_______|
|______|                    |main()_|



1.Run time stack            2. main() method added to stack
for main thread

|______|                    |doMoreStuff()  |
|doStuf|                    |doStuff()      |-------> Each entry is called as Stack Frame/Activation Record.
|main()|                    |main()________ |


3.Add doStuff()                 4.Add doMoreStuff method to
  method to stack                 stack.



|______|                    |           |
|doStuf|                    |           |
|main()|                    |main()_____|


4. doMoreStuff() method         5.doStuff() method execution finish without
   execution completes             errors.
   without errors.




|      |
|      |
|      |
|      |
|______|

6. Finally stack becomes empty after main()
   completes and JVM destroys it.


*/
package aException_Intro_RuntimeStack_DefaultException_Propogation_Hierarchy;


 class Test {

     public static void main(String[] args) // main thread will be created , after which stack will be created inside
                                            // which all this methods will be kept.
                                            // main thread is going to call this particular method.
     {
         doStuff();
     }

     public static void doStuff()
     {
         doMoreStuff();
     }

     public static void doMoreStuff()
     {
         System.out.println("Hello");
     }



 }


/*
run:
Hello
BUILD SUCCESSFUL (total time: 0 seconds)



*/