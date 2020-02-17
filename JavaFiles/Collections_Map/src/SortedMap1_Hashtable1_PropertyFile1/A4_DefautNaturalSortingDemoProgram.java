
//Demo program for Default natural sorting order.

package SortedMap1_Hashtable1_PropertyFile1;

import java.util.*;

class TreeMapDemo3 {
    
    public static void main(String[] args)
    {
        TreeMap m = new TreeMap();
        
        m.put(100, "ZZZ");
        
        m.put(103,"YYYY");
        
        m.put(102, "AAAA");
        
        m.put(106, "CCCC");
        
       // m.put(null, "C"); // null pointer exception.
    
       // m.put("FFFF","XXXX"); //Class cast exception as "FFFF" will make the TreeSet heterogeneous
    
        System.out.println(m);
        
    }


}


/*
run:
{100=ZZZ, 102=AAAA, 103=YYYY, 106=CCCC}
BUILD SUCCESSFUL (total time: 0 seconds)


Default Sorting order output.

*/

//-----------------------------------------------------------**************************************----------------------------------