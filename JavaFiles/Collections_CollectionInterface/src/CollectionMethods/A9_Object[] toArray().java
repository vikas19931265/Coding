

/* method 3:  Object[] toArray()
       -> This will convert the arrayList into an array. This will be useful as an  
          array always provides better performance then the arrayList.*/




package CollectionMethods;
import java.util.*;

 class H_toArray {
    
 public static void main(String[] args)
 {
       
     ArrayList array3 = new ArrayList();
     array3.add(10);
     array3.add(20);
     array3.add(new Student());
     array3.add("vikas");
     
     Object[] array1= array3.toArray();// converting arrayList to array. Here the reference is of Object type
                                       // hence any type of element can be stored inside the array.
           
           for(Object a: array1)
           {    int i=0;
               
                    System.out.println(a); /* [10,20] */
                                                     
                       
                i++;       
           }
 }
 }

//---------------------------------------------------------------------**************************---------------------------------