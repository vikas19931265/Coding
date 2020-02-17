/* Write a program to insert StringBuffer objects into the TreeSet where 
 sorting order is alphabetical order.


[note]


If we are depending on natural sorting order then the objects should be homogenous and comparable
otherwise we will get run time exception saying ClassCastException.



If we are defining our own sorting by comparator, then Objects need not be comparable and homogenous 
that is we can add heterogenous non comparable objects also.


*/
package c_SortingTechniques_Comparable_Comparator;

import java.util.*;

class TreeSetDemo10 

{
    public static void main(String[] args)
    {
        TreeSet t = new TreeSet(new MyComparator3());
         
        
        t.add(new StringBuffer("A"));
        t.add(new StringBuffer("Z"));
        t.add(new StringBuffer("K"));
        t.add(new StringBuffer("L"));
        
        System.out.println(t);
    }



}

class MyComparator3 implements Comparator
{
    public int compare(Object obj1 , Object obj2)
    {
        String s1= obj1.toString();
        String s2= obj2.toString();
        
       return s1.compareTo(s2);
    }
}

/*

o/p

run:
[A, K, L, Z]
BUILD SUCCESSFUL (total time: 0 seconds)

*/

//------------------------------------------------------------***********************************---------------------------------------------------