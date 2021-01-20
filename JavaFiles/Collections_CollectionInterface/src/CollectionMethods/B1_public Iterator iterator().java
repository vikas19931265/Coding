/*method 12: public Iterator iterator()
                   ->This will return an iterator object.  */


package CollectionMethods;
import java.util.*;

class I_iterator {
    
     public static void main(String[] args)
     {
        ArrayList array6= new ArrayList();
        array6.add(new Student());
        array6.add(new Student());
        
        Iterator itrs= array6.iterator();
        
        while(itrs.hasNext())
        {
        System.out.println(itrs.next()); //
        }
     }
}


/*
run:
CollectionMethods.Student@6bc7c054
CollectionMethods.Student@232204a1
BUILD SUCCESSFUL (total time: 0 seconds)



*/

//---------------------------------------------------------------------**************************---------------------------------