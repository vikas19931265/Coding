/*
       public boolean equals(Object element)
        
This method will compare the elements of two collections.

*/


package CollectionMethods;
import java.util.*;

class J_equals {
    
     public static void main(String[] args)
     {
    
    
     ArrayList array7= new ArrayList();
     
     array7.add(1);
     array7.add(2);
     
     //array7.add(4);
     
     ArrayList array8= new ArrayList();
     
     array8.add(1);
     array8.add(2);
     
     System.out.println(array7.equals(array8));// true. Result would be false if we alter the order of the elements.
     
     
     }

/*
     
note
----

Order is important when comparing the collection object, example in ArrayList if we store (1,2)
and in another arrayList if we store (2,1) then the Collections wont be equal to one another.     
     
*/

}
/*
run:
vikas
BUILD SUCCESSFUL (total time: 0 seconds
*/

//---------------------------------------------------------------------**************************---------------------------------