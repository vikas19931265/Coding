
package test;

import java.util.*;
 
class IteratorExample {
    
     public static void main(String[] args)
     {
         
        List list = new ArrayList();
         
        list.add("vikas");
        
        Students s = new Students();
        
        list.add(s);
        
       
        
        for(Object l : list)
        {
            if( l instanceof Students)
            {
                
                Students s1= (Students)l;
                
                System.out.println(s1.name);
            }
            
            
            else
            {
            
                System.out.println( (l) );
        
            }
            }
        
        
        /*Iterator itr = list.iterator();
        
        System.out.println(itr.next());
        
        System.out.println(itr.next());
        
        System.out.println(itr.next());
        */
        
         
     }
 
 
 
 
 
}


class Students
{
    
    String name="dravid";
    
}
