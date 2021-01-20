
//Example 1: Collections search demo based on default sorting.

/*


l----> Z   A    M       K       a




        -1     -2       -3      -4     -5 -->insertion point 

l----->A        K       M       Z       a
    
       0       1        2       3       4----> index  



Collections.binarySearch(l,"Z")-->3

Collections.binarySearch(l,"J");--->-2( insertionpoint)

*/



package collections_utilityclass;

import java.util.*;

class CollectionsSearchDemo {
    
public static void main(String[] args)
{
    
    ArrayList l = new ArrayList();
    
    l.add("Z");
    
    l.add("A");
    
    l.add("M");
    
    l.add("K");
    
    l.add("a");
    
    
    System.out.println(l);//[Z, A, M, K, a]
    
    Collections.sort(l);
    
    /*
    
    If we are calling binarySearch method without sorting then will get unpredicatble result.
    
    */

    System.out.println(l);//[A, K, M, Z, a]
    
    System.out.println(Collections.binarySearch(l, "Z"));//3
    
    System.out.println(Collections.binarySearch(l, "J"));//-2...2 is the insertion point where the target element that is J
                                                         // can be inserted.   
}



}


/*
run:
[Z, A, M, K, a]
[A, K, M, Z, a]
3
-2
BUILD SUCCESSFUL (total time: 0 seconds)

*/