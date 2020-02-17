/*
object remove(int index)
    
It is used to remove the element at position index from the invoking list and
return the deleted element.

*/

package a2_ListInterface_Methods;

import java.util.*;

 class E_remove {
    

    public static void main(String[] args)
    {
        
    
         ArrayList a = new ArrayList();
         a.add("vikas");
         a.add("sachin");
         a.add("dravid");
         a.add("vikas");

         System.out.println(a.remove("vikas")); // If our Arrylist contains duplicate elements and we try to 
                                                // delete the duplicate element then the first element will getting deleted.
                                                // To remove the next element we have to throw the same query again.    
         
        
         System.out.println(a.remove(0));//This will remove the element from the 0th index and return the deleted element.
         
         System.out.println(a);
         

}}

/*
run:
true
sachin
[dravid, vikas]
BUILD SUCCESSFUL (total time: 0 seconds)



*/