/*
boolean addAll(int index,Collection c)

    It is used to insert all elements of c into the invoking list at the index
    passed in the index.

    This will insert the Collection c into the specified index location. The existing
    elements will move to the right.

*/

package a2_ListInterface_Methods;
import java.util.*;

 class B_addAll {
    
     public static void main(String[] args)
     {
         ArrayList a = new ArrayList();
         a.add("vikas");
         a.add("sachin");
         a.add("dravid");
         
         LinkedList b = new LinkedList();
         b.add("Brett lee");
         b.add("Ricky Ponting");
         
         a.addAll(0,b); // Add b Collection into a at the specified location that is 0.
         
         System.out.println(a);
         
     }
  }

/*
run:
[Brett lee, Ricky Ponting, vikas, sachin, dravid]
BUILD SUCCESSFUL (total time: 0 seconds)




*/
