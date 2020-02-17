package Collections_HashMap_LinkedHashMap_WeakHashMap_IdentityHashMap2;

/*

Demonstrating Map methods
----------------------------


*/

import java.util.*;

 class HashMapMethods
{
    
    public static void main(String[] args)
    {
        
        HashMap m = new HashMap();
        
        //-m.put()------to put elements inside the HashMap-------
        
        m.put(1,"Vikas");
        
        m.put(2, "Sachin");
        
        m.put(3, "Dravid");
        
        m.put(4, "Yuvraj");
        
        //---m.putAll()---to put all elements of another HashMap-----
        
        
        HashMap m1 = new HashMap();
        
        m.put(5, "Bhajji");
        
        m.put(6, "Dravid");
        
        m.putAll(m1);
        
        System.out.println(m);//{1=Vikas, 2=Sachin, 3=Dravid, 4=Yuvraj, 5=Bhajji, 6                      =Dravid}
        
        
        // -m.get()---to get value associated with the particular key------
        
        System.out.println(m.get(6));//Dravid
        
        
        // --m.remove()----to remove a key-------
        
        m.remove(6);
        
        System.out.println(m); //{1=Vikas, 2=Sachin, 3=Dravid, 4=Yuvraj, 5=Bhajji}
        
    
        //--m.containsKey()---- to check if the collection contains key-----
        
        System.out.println(m.containsKey(5)); // true
        
        //--m.containsValue()----to check if the collection contains value-----
        
        System.out.println(m.containsValue("Sachin")); // true
        
        
        //--m.isEmpty()----to check if the collection is empty or not-----
        
        System.out.println(m.isEmpty()); //false
        
        
        //-m.size()---to find out the size of the Set-------
        
        System.out.println(m.size());//5
        
    }
    
    
}
