/*

Remove Duplicate elements from Array Using Collections

*/
package Collections;

import java.util.*;

class RemoveDuplicateElements
{
    
    public static void main(String[] args)
    {
        ArrayList l = new ArrayList();
        
        l.add(1);
        l.add(2);
        l.add(1);
        l.add(2);
        
        HashSet s = new HashSet(l);
        System.out.println(s);
        
        
    }
    
    
}

/*
run:
[1, 2]
BUILD SUCCESSFUL (total time: 0 seconds)

*/