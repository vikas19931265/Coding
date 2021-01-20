package SortedMap1_Hashtable1_PropertyFile1;

/*

Inserting Heterogeneous elements inside the Hashtable


note:

    Null is not allowed in the Hashtable as in case of both the keys as well as the values.

*/


import java.util.*;

 class Hashtablesss1
{
    
    public static void main(String[] args)
    {
        
        Hashtable h = new Hashtable();
        
    //    h.put(1, null); //NullPointerException: null is not allowed in the case of the Hashtable.
        
        h.put(1, "Vikas");
        
        h.put(2, "Dravid");
        
       
    // We can insert heterogneous elements in the case of the Hashtable which is not allowed in Map
       
        h.put("x", "Bhajji");
        
        System.out.println(h); //{x=Bhajji, 2=Dravid, 1=Vikas}
        
            
        
    }
    
    
    
}
