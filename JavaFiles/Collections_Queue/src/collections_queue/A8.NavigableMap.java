/*

NavigableMap
===========================================================


1. NavigableMap is the child interface of the SortedMap.

2. It defines several methods for Navigation purposes.


        Map(I)
            \
            SortedMap(I)
                |
             NavigableMap(I)
                |
             Treemap   
             
 3. Navigable Map defines the following methods. These methods are similar to 
    NavigableMap

        floorKey(e)
        lowerKey(e)
        ceilingKey(e)
        higherKey(e)
        pollFirstEntry()
        pollLastEntry()
        descendingMap()


*/
package collections_queue;

import java.util.*;

class NavigableMapDemo {
    
    public static void main(String[] args)
    {
        
        TreeMap<String, String> t = new TreeMap<String, String>();
        
        t.put("b", "banana");
        
        t.put("c", "cat");
        
        t.put("a","apple");
        
        t.put("d", "dog");
        
        t.put("g", "gun");
        
        System.out.println(t);//{a=apple, b=banana, c=cat, d=dog, g=gun}
        
        System.out.println(t.ceilingKey("c"));//c
        
        System.out.println(t.higherKey("e"));//g
        
        System.out.println(t.floorKey("e"));//d
        
        System.out.println(t.lowerKey("e"));//d
        
        System.out.println(t.pollFirstEntry());//a=apple
        
        System.out.println(t.pollLastEntry());//g=gun
        
        System.out.println(t.descendingMap());//{d=dog, c=cat, b=banana}
        
        System.out.println(t);//{b=banana, c=cat, d=dog}
    }



}

/*
run:
{a=apple, b=banana, c=cat, d=dog, g=gun}
c
g
d
d
a=apple
g=gun
{d=dog, c=cat, b=banana}
{b=banana, c=cat, d=dog}
BUILD SUCCESSFUL (total time: 0 seconds)

*/