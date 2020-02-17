/*
void addLast(Object o)

       It is used to insert the given element at the end of a list.
*/



package c2_LinkedListMethods;

import java.util.*; 

class Linkedlist2 {
    
public static void main(String[] args)
{
    
    LinkedList a = new LinkedList();
    
         a.add(1);
         a.add(2);
         a.add(3);
         
         a.addLast("Vikas"); // This will insert the element a the last place ,shifting all the
                              // rest of the elements to the left.
         
         System.out.println(a);
 
} 

}

/*
run:
[1, 2, 3, Vikas]
BUILD SUCCESSFUL (total time: 0 seconds)


*/

//---------------------------------------------------------------------**********************---------------------------------------