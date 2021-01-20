// Write a program to insert String objects into the treeSet where all elements should
// inserted according to reverse of the alphabetical orders.


package c_SortingTechniques_Comparable_Comparator;

import java.util.*;

class TreeSetDemo2 {
    
     public static void main(String[] args)
     {
         TreeSet t = new TreeSet(new MyComparator());
         
         t.add("Roja");
         
         t.add("ShobhaRani");
         
         t.add("RajaKumari");
         
         t.add("GangaBhavani");
         
         t.add("Ramulamma");
     
         System.out.println(t);
     
     }
 
 }


class MyComparator implements Comparator
{
    @Override
  
    public int compare(Object obj1, Object obj2) // compare method accepts two parameters
    {
        String s1= obj1.toString();
        
        String s2=(String)obj2;
        
        return s2.compareTo(s1);
    }
}

/*
o/p


run:
[ShobhaRani, Roja, Ramulamma, RajaKumari, GangaBhavani]
BUILD SUCCESSFUL (total time: 0 seconds)




*/
//------------------------------------------------------------***********************************----------------------------------------------