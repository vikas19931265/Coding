    /*  Object clone()
                
        ->It is used to return a shallow copy of an ArrayList. */
       
      
package CollectionMethods;

import java.util.*;
      
 class Clone {
    
     public static void main(String[] args)
     {
         
         ArrayList arrayList = new ArrayList();
         arrayList.add("vikas");
         arrayList.add("Sachin");
         
         Object o  =arrayList.clone();
         System.out.println(((ArrayList) o).get(0));//typecasted object to ArrayList type as Object reference cant be used 
                                                // to get the element at the specified position from the ArrayList.
     
     
     }
 
 }

/*

run:
vikas
BUILD SUCCESSFUL (total time: 0 seconds)


*/

//---------------------------------------------------------------------**************************---------------------------------