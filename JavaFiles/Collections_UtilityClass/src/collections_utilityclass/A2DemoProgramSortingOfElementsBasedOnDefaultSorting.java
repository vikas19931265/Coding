
// Demo program for Sorting elements of the list according to DefaultNaturalSorting order.

package collections_utilityclass;

import java.util.*;

class CollectionsSortDemo {
    

    public static void main(String[] args)
    {
        
        ArrayList l = new ArrayList();
        
        l.add("Z");
        
        l.add("A");
        
        l.add("K");
        
        l.add("N");
        
        //l.add(new Integer(10)); ClassCastException
        
       // l.add(null); //NullPointerException
        
        System.out.println("Before Sorting" + l);
        
        Collections.sort(l); // Sorting of elements will be done in the same object, no new object will be created.
        
        System.out.println("After sorting"+l);
        
                
                
    }



}

/*
run:
Before Sorting[Z, A, K, N]
After sorting[A, K, N, Z]
BUILD SUCCESSFUL (total time: 0 seconds)

*/