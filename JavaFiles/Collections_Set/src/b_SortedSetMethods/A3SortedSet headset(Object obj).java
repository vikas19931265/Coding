/*

SortedSet headset(Object obj)

    returns elements less then obj

*/
package b_SortedSetMethods;



import java.util.*;

 class HeadSet {
    

 public static void main(String[] args)
 {
     
     TreeSet s = new TreeSet();
     
     s.add(10);
     
     s.add(20);
     
     s.add(30);
     
     System.out.println(s.headSet(30));
             
             }
 
}

/*
run:
[10, 20]
BUILD SUCCESSFUL (total time: 0 seconds)

*/

//----------------------------------------------------------------********************************-------------------------------------------