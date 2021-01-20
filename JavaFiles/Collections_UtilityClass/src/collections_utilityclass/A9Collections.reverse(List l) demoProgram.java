/*

Reversing elements of the list.
=======================================================


Collections class defines the following reverse methods to reverse elements of the list.

    public static void reverse(List l);

*/
package collections_utilityclass;

import java.util.*;

class CollectionsReverseDemo {
    

    public static void main(String[] args)
    {
        
        
        ArrayList a = new ArrayList();
        
        a.add(15);
        
        a.add(0);
        
        a.add(20);
        
        a.add(10);
        
        a.add(5);
        
        System.out.println(a);
        
        Collections.reverse(a);
        
        System.out.println(a);
        
    }

}


/*
run:
[15, 0, 20, 10, 5]
[5, 10, 20, 0, 15]
BUILD SUCCESSFUL (total time: 0 seconds)

*/