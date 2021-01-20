
package f3_ListIteratorMethods;

import java.util.*;

class NewClass {
    
  public static void main(String[] args)
  {
      
      ArrayList a = new ArrayList();
      
      a.add("vikas");
      
      a.add("ravi");
      
    System.out.println("Before Setting"+ a);
      
      ListIterator itr = a.listIterator();
      
      while(itr.hasNext())
      {
             String s   =(String) itr.next();
          
             if(s.equals("ravi"))
             {
                 itr.set("gautam");
                 
             }
      
      }

 
  
   
  System.out.println("After Setting" +a);
  
  }

 
 
 }


/*
run:
Before Setting[vikas, ravi]
After Setting[vikas, gautam]
BUILD SUCCESSFUL (total time: 0 seconds)

*/


//-----------------------------------------------------------------------*************************----------------------------------------------------