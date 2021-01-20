/*
public void add(Object o);

    

*/
package f3_ListIteratorMethods;

import java.util.*;
 
class Add {
    
     public static void main(String[] args)
     {
         
         ArrayList a = new ArrayList();
         
         a.add("Ravi");
         
         a.add("Gautam");
     
     
     ListIterator itr= a.listIterator();
     
     while(itr.hasNext())
     {
         
         String s = (String) itr.next();
         
         if(s.equals("Ravi"))  
         {
             itr.add("Vikas");  //Vikas will be added after Ravi.
             
         }
     }
     
     
     System.out.println(a);
     
     
     }
 
 
 
 }

/*
run:
[Ravi, Vikas, Gautam]
BUILD SUCCESSFUL (total time: 0 seconds)

*/

//----------------------------------------------------------------**********************************------------------------------------------------