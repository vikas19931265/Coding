
//Demo program using customized Sorting.

/*

Note:
        Sorting is always based upon the keys but not the values.

*/
package SortedMap1_Hashtable1_PropertyFile1;

import java.util.*;




class TreeMapDemo {
    
    public static void main(String[] args)
    {
        TreeMap t = new TreeMap(new MyComparator());
        
        t.put("XXX", 10);
        
        t.put("AAA", 20);
        
        t.put("ZZZ", 30);
        
        t.put("LLL", 40);
   
        System.out.println(t);
    
    }
}

class MyComparator implements Comparator
{
    public int compare(Object obj1, Object obj2)
    {
        String s1= obj1.toString();
        
        String s2= obj2.toString();
        
        return s2.compareTo(s1);
        
      }
}

/*
run:
{ZZZ=30, XXX=10, LLL=40, AAA=20}
BUILD SUCCESSFUL (total time: 0 seconds)

*/

//-----------------------------------------------------------------*******************************--------------------------------------------------