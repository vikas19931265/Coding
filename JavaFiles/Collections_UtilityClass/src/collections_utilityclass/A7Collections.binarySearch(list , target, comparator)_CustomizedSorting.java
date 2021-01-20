/* Collections binarySearchDemo based on customized sorting.



l------>  15     0    20      10    5



      -1     -2     -3    -4   -5---->insertionpoint            

l---->20    15     10     5    0

       0     1      2      3    4----->index        



Collections.binarySearch(l, 10 , newMyComparator); //2


Collections.binarySearch(l, 13 , newMyComparator); //-3


Collections.binarySearch(l, 17); //unpredictable result


Collections.binarySearch(l, 17 , newMyComparator); //2






*/
package collections_utilityclass;

import java.util.*;


class CollectionsSearchDemo1 {
    

    public static void main(String[] args)
    {
        
        ArrayList l = new ArrayList();
        
        l.add(15);
        
        l.add(0);
        
        l.add(20);
        
        l.add(10);
        
        l.add(5);
        
        
        System.out.println(l); //[15, 0, 20, 10, 5]
        
        Collections.sort(l, new MyComparator1());
        
        System.out.println(l); //[20, 15, 10, 5, 0]
        
        System.out.println(Collections.binarySearch(l, 10 , new MyComparator1()));//2
        
        System.out.println(Collections.binarySearch(l, 13 , new MyComparator1()));//-3
         
        System.out.println(Collections.binarySearch(l, 17 , new MyComparator1()));//2
    
    
    }


}

class MyComparator1 implements Comparator
{
    
    public int compare(Object obj1, Object obj2)
    {
        
        Integer i1= (Integer)obj1;
        
        Integer i2=(Integer)obj2;
        
        return i2.compareTo(i1);
    }
}

/*

run:
[15, 0, 20, 10, 5]
[20, 15, 10, 5, 0]
2
-3
-2
BUILD SUCCESSFUL (total time: 0 seconds)

*/