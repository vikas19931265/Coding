/* SortedSet
===============================================================================

1. SortedSet is the child interface of Set(I) interface.

2. If we want to represent a group of individual objects according to some sorting order
   without duplicates then we should go for SortedSet.


3. SortedSet interface defines the following specific methods.

              WE CANNOT ADD HETEROGENEOUS ELEMENTS INSIDE THE TREESET.
    
Object first();

    returns first element of the SortedSet

Object last();

    returns last element of the SortedSet

SortedSet headset(Object obj)

    returns SortedSet whose elements are less than obj

SortedSet tailSet(Object obj)

    return SortedSet whose elements are >=obj

SortedSet subSet( Object obj1 , Object obj2)

    returns SortedSet whose elements are >=obj1 and < obj2


Comparator comparator()

    returns Comparator object that describe the underlying sorting technique.
If we are using default natural sorting order then we will get null.


[note]

Default Natural Sorting order for 
        
                Numbers-->Ascending order

                String--->Alphabetical order



example program

100
101
104
106
110
115
120


1.  first()--> 100
2.  last()--->120
3.  headSet(106)---->100,101,104
4.  tailSet(106)----->106,110,115,120
5.  subSet(101,115)---->101,104,106,110
6. comparator();

*/


package a_Set;

import java.util.*;
 
class SortedSetDemo {
    
     public static void main(String[] args)
     
     {
          TreeSet s = new TreeSet();
          s.add(100);
          s.add(101);
          s.add(104);
          s.add(106);
          s.add(110);
          s.add(115);
          s.add(120);
     
          // s.add("s"); we cannot add heterogeneous element
          SortedSet s1= s.headSet(106); // s1 points to implementation class(TreeSet) object
                                        // Here SortedSet implementation class which is TreeSet here will be returned.
          
         System.out.println(s.headSet(106));  //[100, 101, 104]
                                        
         System.out.println(s1.getClass().getName());//java.util.TreeSet
          
     }
}

/*
run:
[100, 101, 104]
java.util.TreeSet
BUILD SUCCESSFUL (total time: 0 seconds)

*/

//--------------------------------------------------------------------************************---------------------------------------