/* public boolean retainAll(Collection c)
                    is used to delete all the elements of invoking collection 
                    except the specified collection.
                    
                    This method will delete all the elements from the list except the elements which are
                    also present inside the collection c.
      
      Example ArrayList1( 1, 2,3 )...ArrayList2(1)
      
      Here if we call retainAll method on ArrayList1 then all elements will be deleted except 1
      which is also present in the ArrayList2.*/




package CollectionMethods;

import java.util.*;

class E_retainAll {
    
public static void main(String[] args)
{
    ArrayList array3 = new ArrayList();
    array3.add(1);
    array3.add(15);
      
    LinkedList l3= new LinkedList();
    l3.add(1);
    l3.add(2);
    l3.add(3);
    
    array3.addAll(l3);
    
    System.out.println(array3);//[1, 1, 2, 3]]
    
    array3.retainAll(l3);
      
    System.out.println("After retaining"+array3);//After retaining[1, 1, 2, 3]



}

}

/*
run:
[1, 15, 1, 2, 3]
After retaining[1, 1, 2, 3]
BUILD SUCCESSFUL (total time: 0 seconds)


*/

//---------------------------------------------------------------------**************************---------------------------------