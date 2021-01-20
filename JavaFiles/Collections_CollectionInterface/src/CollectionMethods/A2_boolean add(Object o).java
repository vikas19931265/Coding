/*
  method 1:boolean add(Object o)
                   -> {is used to insert an element in this collection.}
                    Adding Heterogeneous elements to ArrayList*/



package CollectionMethods;
import java.util.*;

 class Add {
    
     public static void main(String[] args)
     
     {
         ArrayList arrayList= new ArrayList();
         Student s = new Student();
         LinkedList m = new LinkedList();
         m.add(60);
         m.add("linkedList");
        
   
         
         arrayList.add("vikas");
         arrayList.add(10);
         arrayList.add(20);
         arrayList.add(s);
         System.out.println(arrayList);//[vikas, 10, 20, CollectionMethods.Student@6bc7c054]
         
     }
     
 }


class Student
{
    String name="vikas";
}


//---------------------------------------------------------------------**************************---------------------------------