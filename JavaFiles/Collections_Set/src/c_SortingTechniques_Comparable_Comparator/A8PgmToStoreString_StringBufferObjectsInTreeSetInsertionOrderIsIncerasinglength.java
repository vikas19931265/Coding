/*

Write a program to insert String and StringBuffer objects into the TreeSet where
sorting order is increasing length order.

If two Objects have the same length then consider there alphabetical order.

*/


package c_SortingTechniques_Comparable_Comparator;

import java.util.Comparator;
import java.util.TreeSet;


 class TreeSetDemo11 {
    

 public static void main(String[] args)
 {
     TreeSet t = new TreeSet( new MyComparator4());
 
     t.add("A");
     t.add(new StringBuffer("ABC"));
     t.add(new StringBuffer("AA"));
     t.add("XX");
     t.add("ABCD");
     t.add("A");
 
     System.out.println(t);
 
 }
 
 }


class MyComparator4 implements Comparator
{
    public int compare(Object obj1 , Object obj2)
    {
        
        String s1= obj1.toString();
        
        String s2= obj2.toString();
        
        int l1=s1.length();
        
        int l2=s2.length();
        
        if(l1<l2)
        {
            return -1;
        }
   
        else if(l1>l2)
        {
            return 1;
            
        }
    
        else
        {
            return s1.compareTo(s2); // if length is same then store the elements in the alphabetical order.
        }
        
    }

}

/*

run:
[A, AA, XX, ABC, ABCD]
BUILD SUCCESSFUL (total time: 0 seconds)



*/

//-----------------------------------------------------------------****************************---------------------------------------------------------