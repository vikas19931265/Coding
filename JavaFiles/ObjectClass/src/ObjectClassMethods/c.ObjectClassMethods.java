/*

Object class defines the following 11 methods
--------------------------------------------------

1. public String toString()

2. public native int hashCode()

3. public boolean equals(Object o)

4. protected native Object clone() throws CloneNotSupportedException

5. protected void finalize() throws Throwable

6. public final Class getClass()

7. public final void wait() throws InterruptedException

8. public final native void wait(long ms) throws InterrutpedException

9. public final void wait( long ms, int ns) throws InterruptedException

10. public naative final void notify()

11. public native final void notifyAll()


[note]

    Strictly speaking object class contains 12 methods. The extra method is registerNatives()

         private static native void() registerNatives();

This method is internally required for the Object class and is not available to the child classes hence
we are not required to consider this method.


*/
package javalanggpackage;


