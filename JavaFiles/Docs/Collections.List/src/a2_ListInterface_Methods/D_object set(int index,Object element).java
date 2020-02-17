/*
    object set(int index,Object element)
    
It is used to assign element to the location specified by index within the invoking list.

This is like a replace() method.

*/

package a2_ListInterface_Methods;

import java.util.*;

class D_set {
    
public static void main(String[] args)
{
    
         ArrayList a = new ArrayList();
         a.add("vikas");
         a.add("sachin");
         a.add("dravid");
         
         a.set(0,"Dhoni"); // This will replace the value held at index 0 with dhoni.
         
         System.out.println(a);
         
         System.out.println(a.set(0, "Ravi")); // a.set() method will return the object getting replaced. Here in this
                                               // case will be Dhoni.
}
 
 
 
 
 }

/*
run:
[Dhoni, sachin, dravid]
BUILD SUCCESSFUL (total time: 0 seconds)


*/