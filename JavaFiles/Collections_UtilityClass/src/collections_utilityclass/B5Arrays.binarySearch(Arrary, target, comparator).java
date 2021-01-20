
/*

Searching elements of the Array.
============================================


Array class defines the following binary search methods.

1. public static int binarySearch(primitve[] p, primitive target)

2. public static int binarySearch(Object[] a , Object target)

3. public static int binarySearch(Object[] a , Object target, Comparator c)


Note

All rules of Arrays classs binarySearch are exaclty same as Collection class binarySearch methods.


search in primitive array.

10   5     20       11      6


           -1      -2   -3      -4      -5      -6  

a--------> 5      6     10      11      20

           0       1    2       3       4 


Arrays.binarySearch( a, 6);  //1

Arrays.binarySearch(a, 14); /-5


----------------sort----------------------------


A       Z       B


            -1     -2      -3       -4  

s----->     A       Z      B

            0       1      2 



Arrays.binarySearch(s,"Z")//2

Arrays.binarySearch(s,"S")//-3 insertionpoint.


---------customized sorting-----------------------


        A       Z           B

        

       -1       -2          -3 

s---> Z         B           A

       0        1           2
    
binarySearch(s,"Z",new myComparator4());  //0

binarySearch(s, "S" , new MyComparator4()); // -2


binarySearch(s,"N"); //unpredictable result.


*/
package collections_utilityclass;

import java.util.*;

import static java.util.Arrays.*; // static import ...no need to write Arrays.binarySearch()

class ArraysSearchDemo {
    
public static void main(String[] args)
{
    
    int[] a ={10,5,20,11,6};
    
    Arrays.sort(a); // sort by natural order
    
    System.out.println(Arrays.binarySearch(a, 6));//1
    
    System.out.println(Arrays.binarySearch(a, 14));//-5
    
    String[] s ={"A","Z","B"};
    
    Arrays.sort(s);
    
    System.out.println(binarySearch(s,"Z"));//2
    
    System.out.println(binarySearch(s,"S"));//-3


    Arrays.sort(s, new MyComparator4());
    
    System.out.println(binarySearch(s,"Z",new MyComparator4())); //0
    
    System.out.println(binarySearch(s,"S", new MyComparator4())); //-2
    
    System.out.println(binarySearch(s,"N"));// unpredictable result

}
 
 
 }


class MyComparator4 implements Comparator
{
    
    public int compare(Object o1, Object o2)
    {
        String s1= o1.toString();
        
        String s2=o2.toString();
        
        return s2.compareTo(s1);
    }
}