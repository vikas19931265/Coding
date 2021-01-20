// Customized sorting order.

package c_SortingTechniques_Comparable_Comparator;

import java.util.Comparator;
import java.util.TreeSet;
import java.util.*;

class TreeSetDemo4 {
    
    public static void main(String[] args)
    {
        TreeSet t = new TreeSet( new MyComparators9()); 
      
        
        t.add(10);
        t.add(0);
        t.add(15);
        t.add(5);
        t.add(20);
        t.add(20);
      
        
        
        System.out.println(t);
    }


}

class MyComparators9 implements Comparator
{
    public int compare( Object obj1, Object obj2) // obj2 is already present object
    {
        Integer I1= (Integer)obj1;
        
        Integer I2=( Integer)obj2;
        
      /*
        
        return I1.compareTo( I2);
        
                Default natural sorting order(Ascending order) [20,15,10,5,0]
        
        return -I1.compareTo(I2);
        
                Descending order [ 20,15,10,5,0]
        
        reutrn I2.compareto(I1);
        
                Descending order [20,15.10.5.0]
        
        
        return -I2.compareTo(I1);
        
                Ascending order [0,5,10,15,20]
        
        return +1[ Insertion order] [10,0,15,5,20,20]
        
        
        return -1 [ Reverse of Insertion order] [ 20,20,5,15,0,10]
        
        
        return 0 [Only first element will be inserted and all remaining duplicates][10]
      */
        
        if(I1< I2)
        {
            return +1;
        }
    
        else if(I1>I2)
        {
            return -1;
        }
    
    
        else 
        {
            return 0;
        }
    
    }
}


/*
run:
[20, 15, 10, 5, 0]
BUILD SUCCESSFUL (total time: 0 seconds)

*/


//----------------------------------------------------------------*****************************---------------------------------------