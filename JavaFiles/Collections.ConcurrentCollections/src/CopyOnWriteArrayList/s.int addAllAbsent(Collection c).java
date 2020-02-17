/*

method 2:

int addAllAbsent(Collection c)

        This method will add only those elemets from group which are not 
already present in the collection.


*/
package concurrentcollections;

import java.util.*;

import java.util.concurrent.CopyOnWriteArrayList;

 class addAllAbsent {
    
     public static void main(String[] args)
     {
         
         ArrayList l = new ArrayList();
         
         l.add("A");
         
         l.add("B");
         
         CopyOnWriteArrayList l1= new CopyOnWriteArrayList();
         
         l1.add("A");
         
         l1.add("C");
         
         System.out.println(l1); //[A,C]
         
         l1.addAll(l1);
         
         System.out.println(l1); //[A, C, A ,B]...All elements are added to the collection without checking.
         
     
     
     
         ArrayList l2= new ArrayList();
         
         l2.add("A");
         
         l2.add("D");
         
         l1.addAllAbsent(l2);
         
         System.out.println(l1); //[A, C, A, B, D] ...D is the only element inserted as it was not already present in the collection.
     
     }
 
 
 
 }

//------------------------------------------------------------------****************************--------------------------------------------