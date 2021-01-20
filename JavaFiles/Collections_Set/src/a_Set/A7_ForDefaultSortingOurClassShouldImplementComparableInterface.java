//FOR DEFAULT SORTING OUR CLASS SHOULD IMPLEMENT COMPARABLE INTERFACE.

/*
1. If we are depending upon default natural sorting order, then compulsory the object
   should be homogeneous and comparable otherwise we will get run time exception saying


    Runtime error: ClassCastException.

2. An object is said to be comparable if and only if corresponding class implements comparable
   interface.

3. String class and all the wrapper classes already implement Comparable interface. But
   StringBuffer class does not implement Comparable interface. Hence we got classCastException
   in the below example.
    


*/

package a_Set;

import java.util.*;


class TreeSetDemo2 {
    
     public static void main(String [] args)
     {
        TreeSet t = new TreeSet(); // default sorting constructor
        
        t.add(new StringBuffer("A")); // StringBuffer does not implement comparable interface.
        t.add(new StringBuffer("Z"));
        t.add(new  StringBuffer("L"));
        
        t.add(new StringBuffer("B"));
        
        System.out.println(t);
        
     }
 
 
 
 }

/*
Here we will get run time exception saying ClassCastException

*/

//----------------------------------------------------------***************************************--------------------------------------------