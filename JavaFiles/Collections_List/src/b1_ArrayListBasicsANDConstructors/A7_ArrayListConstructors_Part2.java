/*
    ArrayList Constructors
========================================================================

1) ArrayList l = new ArrayList()
        
            This will create an empty arrayList object with default initial capacity
            of 10.

            Once arrayList reaches its max capacity then a new ArrayList Object will be 
            created with 

                    New capactiy = (CurrentCapacity * 3/2)+1;  ( 150 percent more then current capacity +1)

            If our array list is of 1000 consider then performace will be down by this approach
            as huge number of arrays will be created and multiple copy/paste operations will occur 
            reducing the performance of the array dramatically.



2) ArrayList l = new ArrayList(int initialCapacity);

            This will create an arrayList with specified initial capacity. Go with this 
            approach if size is huge.



3) ArrayList l = new ArrayList(Collection c);

          This will create an equivalent ArrayList object for the given collection.  

            


*/
package b1_ArrayListBasicsANDConstructors;

import java.util.*;

 class ArrayListDemo
 {
    
        public static void main(String[] args)
        {
            ArrayList l = new ArrayList();
            l.add("A"); // Added a string object
            l.add(10);  // Added integer object
            l.add("A"); // added duplicate string object in arrayList
            l.add(null); // Adding null is possible in arrayList
            
            System.out.println(l);
            
            l.remove(2); // removing element from index position 2
            
            System.out.println(l);
            
            l.add(2, "M");// Adding M at index position 2
            l.add("N"); // Adding N at next position
            
            System.out.println(l);
        }



}

//---------------------------------------------------------------------**********************----------------------------------