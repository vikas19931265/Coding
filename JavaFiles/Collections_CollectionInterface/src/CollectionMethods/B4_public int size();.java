
 /* method 17: public int size();
                   -> This will return the size of the list.

   [note]                

    size is the number of elements present in the list and capacity is the number of 
    elements which the List can hold. If we are creating a list without inserting any
    elements into it then the size of the List will be 0.



*/

package CollectionMethods;
import java.util.*;

class L_size {
    
     public static void main(String[] args)
     {
         ArrayList a = new ArrayList();
         a.add(10);
         
         System.out.println(a.size()); //1
     
     }
    



}

//---------------------------------------------------------------------**************************---------------------------------