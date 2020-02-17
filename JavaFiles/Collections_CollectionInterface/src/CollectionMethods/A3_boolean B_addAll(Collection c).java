/*
  method 2:boolean B_addAll(Collection c)
         ->This will add the elements at the end of ArrayList in the order they come.
       
        [note]: if we use add() here for collection addition instead of B_addAll method then the 
                 elements will just be appended but not added.*/




package CollectionMethods;
import java.util.*;

class B_addAll {

    
    public static void main(String[] args)
    {
    
        LinkedList t = new LinkedList();
        t.add(10);
        t.add(20);
        
        
        ArrayList  l= new ArrayList();
        l.add(40);
        l.addAll(t);// added linked list collection.
        System.out.println("array"+l); //array[40, 10, 20]
        Iterator itr=l.iterator();
        while(itr.hasNext())
        {
            
            System.out.print(itr.next());   }              /*gautam
                                                             vikas
                                                              10
                                                              null
                                                           ArrayList.Student@6b7920
                                                            10,20*/
            
        }
    
}

/*

run:
array[40, 10, 20]
401020BUILD SUCCESSFUL (total time: 0 seconds)


*/

//---------------------------------------------------------------------**************************---------------------------------