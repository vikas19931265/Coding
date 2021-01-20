 /*method 5: boolean remove(Object o)
                ->to remove an object from the list.*/
        
package CollectionMethods;
import java.util.*;

class C_remove {
    
    public static void main(String[] args)
    {
                             
        ArrayList arrayList2= new ArrayList();
        
        arrayList2.add(10);
        arrayList2.add("A");// A added 2 times
        arrayList2.add("A");
        
        arrayList2.remove("A");// This will remove the first "A" which is encountered in the collection.
        
        System.out.println(arrayList2);
    }


}
/*
run:
[10]
BUILD SUCCESSFUL (total time: 0 seconds)


*/

//---------------------------------------------------------------------**************************---------------------------------