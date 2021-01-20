package Collections_HashMap_LinkedHashMap_WeakHashMap_IdentityHashMap2;


// Null allowed in HashMap

/*

1. Null is allowed in the case of HashMap but only once for the key.

2.If we are trying to insert the null value again , then we will not get 
  any kind of compile time error instead the previous null value corresponding 
  to a particular value will be replaced by the latest null key value pair.



*/

import java.util.*;

class NullInHashMap
{
    
    public static void main(String[] args)
    {
        
        HashMap m = new HashMap();
        
        m.put(1, "Vikas");
        
        m.put(2, "Sachin");
        
        m.put(3, "Dravid");
            
        m.put(null, "Ganguly");    
        
        m.put(null,"Yuvraj"); // Here null , Yuvraj will replace null Ganguly.

            Set s1 = m.entrySet();
            
            Iterator itr= s1.iterator();
            
            while(itr.hasNext())
            {
                
               
               Map.Entry m1=  (Map.Entry) itr.next();
               
               System.out.println(m1.getValue());
                    
           }
        
        
    }
    
    
}


/*
$java -Xmx128M -Xms16M HashMapProgram
Yuvraj
Vikas
Sachin
Dravid


*/
