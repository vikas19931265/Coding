// Demo program to sort based on Customized sorting order

package collections_utilityclass;

import java.util.*;

class CollectionsSortDemo2
{
    
    public static void main(String[] args)
    {
        
        ArrayList l = new ArrayList();
        
        l.add("Z");
        
        l.add("A");
        
        l.add("K");
        
        l.add("L");
        
        System.out.println("Before Sorting"+l);
        
       
        Collections.sort(l, new MyComparator());
        
        System.out.println("After Sorting"+l);
    
    
    
    }
}


class MyComparator implements Comparator
{

    @Override
    public int compare(Object obj1, Object obj2) {
        
   String s1= obj1.toString();
   
   String s2=obj2.toString();
   
   return - s1.compareTo(s2);
    
    
    
    
    }
    
    
}

/*
run:
Before Sorting[Z, A, K, L]
After Sorting[Z, L, K, A]
BUILD SUCCESSFUL (total time: 0 seconds)


*/