/* Arrays Utility Class.
==========================================================

Arrays class is a utility class to define several utility methods for Array Objects.




1. Sorting Elements of Array
===========================================================


Arrays class defines the following sort() methods to sort elements of primitive and object type arrays.


1. public static void sort( primitive[] p)---> sort based on Default natural sorting

        To sort according to natural sorting order.


2. public static void sort(Object[] o)--->sort based on Default natural sorting

        To sort according to natural sorting order.


for primitive types we cannot sort using comparator as compare method take objects.


***3. public static void sort( Object[] o, Comparator c);

    To sort according to Customized sorting order.





NOTE

    We can sort primitive Arrays only based upon Default natural sorting order whereas we can sort Object
    arrays either based upon default natural sorting order or based upon Customized sorting order.




*/
package collections_utilityclass;

import java.util.Arrays;

import java.util.Comparator;

class ArraySortDemo {
    
    public static void main(String[] args)
    {
        
        int [] a ={ 10, 5, 20, 11, 6};
        
        System.out.println("Primitive Array Before Sorting");// 10  5  20  11  6
    
    
        for(int a1: a)
        {
            
            System.out.print("  "+a1);
        }
    
        System.out.println();
        
        Arrays.sort(a);
        
        System.out.println("Primitive Arrays After Sorting");// 5 6 10 11 20
        
        System.out.println();
        
        for(int a1: a)
        {
            
            System.out.print(" "+ a1);
        }
    
    
        System.out.println();
        
        String[] s = {"A","Z","B"};
        
        System.out.println("Object Array Before Sorting"); // A Z B
        
       
        
        for(String s1: s)
        {
            
            System.out.print(" " +s1);
        }
    
        System.out.println();
        
        System.out.println("Object Array After Sorting");// Z B A 
        
       
        System.out.println();
        
        Arrays.sort(s, new  MyComparator2());//****IMPORTANT
    
    
        for(String s1: s)
        {
            
            System.out.print (" " + s1);
        }
    
    
    }



}


class MyComparator2 implements Comparator
{
    
    public int compare(Object obj1, Object obj2)
    {
        
        String s1= obj1.toString();
        
        String s2=obj2.toString();
        
        return s2.compareTo(s1);
    }
    
}

/*

run:
Primitive Array Before Sorting
  10  5  20  11  6
Primitive Arrays After Sorting

 5 6 10 11 20
Object Array Before Sorting
 A Z B
Object Array After Sorting

 Z B A

BUILD SUCCESSFUL (total time: 0 seconds)

*/


//------------------------------------------------------------------*************************--------------------------------------------------