/*
method 9: public boolean containsAll(Collection c)\
               >is used to search the specified collection in this collection.
      
1. Here this method will check if the arrayList contains all the elements which 
   are present in the another List passed as the collection or not.
 */


package CollectionMethods;

import java.util.*;

 class G_containsAll {
    
public static void main(String[] args)
{
    ArrayList a = new ArrayList();
    a.add(10);
    a.add(20);
    
    LinkedList b = new LinkedList();
    b.add(10);
    
    
    System.out.println(a.containsAll(b));// Here a contains 10 and 20 which contains all the 
                                         // elements which are present in b(10) also hence the output is true.
                                         // If b contained element 30 , then result will be false.   
                                         
    
}



}

//---------------------------------------------------------------------**************************---------------------------------