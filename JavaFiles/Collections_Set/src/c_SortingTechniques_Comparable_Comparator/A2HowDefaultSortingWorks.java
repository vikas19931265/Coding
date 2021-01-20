/* How Default Sorting works.
==================================================================================================

1. If we are depending upon default natural sorting order then while inserting objects into the TreeSet
JVM will call compareTo() method.


            obj1.compareTo(obj2)


obj1------> The object , which is to be inserted.

obj2-------> The object which is already inserted.



[note]

    If default natural sorting order not available or if we are not satisifed with 
default natural sorting order then we can go for customized sorting by using Comparator.


    /*****
    COMPARABLE MEANT FOR DEFAULT NATURAL SORTING ORDER.
        
                    whereas
    
    COMPARATOR MEANT FOR CUSTOMIZED SORTING ORDER.
    /*****

*/
package c_SortingTechniques_Comparable_Comparator;

import java.util.*;
 
class Sample1 {
    
     public static void main(String[] args)
     {
         TreeSet t = new TreeSet();
         
         t.add("K");// this will add first element inside the treeSet.
                    // Since this is the first object hence comparison will not happen
     
          /*
                    K
         
         
         
          */          
                    
     
         t.add("Z");
     /*
         Now we are trying to add "Z" into the TreeSet.
         Internally compareTo method will be called.
         
            z.compareTo(K); this will return positive value hence we need to store element Z
                            to the RIGHT of the node
         
     
                          K  
                           \ 
                            \
                             Z   
         
         
         */
         
         
            t.add("A");
            
          /*
            Now we are trying to add "A" , again internally compareTo method will be called
            which will make a comparison first with the main root node and if then any sub node exists.
            
            
             A.compareTo(K);; this will return negative value hence the element has to be stored
                               to the LEFT of the main node
            
            
                             K  
                            /  \ 
                           /    \
                          A      Z      
            
            
            
            
            */  
     
           t.add("A"); 
            
           /*
           Now we are trying to add "A" , again internally compareTo method will be called
           which will make a comparison first with the main root node and if then any sub node exists.
            
            
            A.compareTo(K); this will return negative value hence the element has to be stored
                               to the LEFt of the main node
           
           But an element already exists in the LEFT side that is "A".
           
           Now a comparison will be made with "A".
           
           
           A.compareTo(A); // Here since both the elements are same hence 0 will be returned.
           
           
           If there would have been a different element like
           
           A.compareTo(B) ;
           
           then A would have been compared with B and Positive would have been returned and element stored to the Right.
           
           
                              K  
                            /  \ 
                           /    \
                          A      Z      
                           \                ---> incase element to be inserted was "B".
                            \
                             B   
           
           */
            
     
      System.out.println(t);
     
     }
 
 
    
 
 }

/*

o/p

run:
[A, K, Z]
BUILD SUCCESSFUL (total time: 0 seconds)


*/

//------------------------------------------------------------------****************************--------------------------------------------------