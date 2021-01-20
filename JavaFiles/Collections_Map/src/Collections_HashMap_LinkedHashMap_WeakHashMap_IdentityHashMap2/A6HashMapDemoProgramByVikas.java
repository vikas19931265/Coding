package Collections_HashMap_LinkedHashMap_WeakHashMap_IdentityHashMap2;


// HashMap demo program by Vikas

import java.util.*;

 class HashMapProgram
{
    
    public static void main(String[] args)
    {
        
        HashMap m = new HashMap();
        
        m.put(1, "Vikas");
        
        m.put(2, "Sachin");
        
        m.put(3, "Dravid");
        
        
        // To get the key values
        
            Set s = m.keySet();
        
            /*
            
            Here the return type of the KeySet is Set because Set cannot
            take any duplicate elements.
            */        
        
        System.out.println(s);
        
        
        // To get Values of of KeySet
        
            Collection c = m.values();
            
            System.out.println(c);
        
        // To iterate over the elements in the HashSet
        
            Set s1 = m.entrySet();
            
            Iterator itr= s1.iterator();
            
            while(itr.hasNext())
            {
                
               
               Map.Entry m1=  (Map.Entry) itr.next();
               
                if(m1.getKey().equals(1))
                {
                    
                    System.out.println(m1.getValue());
                    
                    
                }
                
            }
        
        
    }
    
    
}

/*
$java -Xmx128M -Xms16M HashMapProgram
[1, 2, 3]
[Vikas, Sachin, Dravid]
Vikas
*/
