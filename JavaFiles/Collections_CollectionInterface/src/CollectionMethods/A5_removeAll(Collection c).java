/*:boolean removeAll(Collection c)
            -> to remove all elements of Collection c

[note]
    This method will remove all the elements from the list which are present in the Collection c
    given as the parameter*/


package CollectionMethods;

import java.util.*;

class D_removeAll {

  public static void main(String[] args)
    {
                             
        ArrayList arrayList2= new ArrayList();
        
        arrayList2.add(10);
        arrayList2.add("A");
        
        LinkedList l1= new LinkedList();
        l1.add("A");
        
        
        
        arrayList2.removeAll(l1);
        
        System.out.println(arrayList2);
    }


}
    
//---------------------------------------------------------------------**************************---------------------------------