/*

Internal implementation of Cursors.
===============================================================================

*/
package f1_Cursors;

import java.util.Enumeration;
import java.util.Iterator;
import java.util.Vector;

 class CursorsDemo
{
    public static void main(String[] args)
    {
        Vector v = new Vector();
        Enumeration e = v.elements(); // Here we are not creating any object of enumeration( interface)...
                                      // Interface reference is pointing to implemented class Object here.  
        Iterator itr = v.iterator();
        System.out.println(e.getClass().getName());
        System.out.println(itr.getClass().getName());
        
    }
}

/*
run:
java.util.Vector$1
java.util.Vector$Itr
BUILD SUCCESSFUL (total time: 0 seconds)

*/

//---------------------------------------------------------------------******************--------------------------------------