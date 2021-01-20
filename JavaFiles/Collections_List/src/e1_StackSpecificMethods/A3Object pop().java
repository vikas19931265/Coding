/*

Object pop()

    To remove and return top of the stack

*/
package e1_StackSpecificMethods;

import java.util.*;

 class pop {
    
public static void main(String[] args)
{
    Stack s = new Stack();
    
    s.push(10);
    
    s.push(20);
    
    Iterator itr = s.iterator();
    
    System.out.println("-----Before Pop-----");
    
    while(itr.hasNext())
    {
        System.out.println(itr.next());
    }
    
     
    s.pop(); // changed the internal structure of stack, now we cannot iterate on same reference any more.
    
    /*
    System.out.println("----After pop------");
    
      while(itr.hasNext())
    {
        System.out.println(itr.next());
    }

   If we try to print the values inside the stack after pop operation
   then we will get ConcurrentModificationException. This is because
   we changed the internal structure of the stack on which the iterator 
   was iterating by using pop() operation.
    
    And then again we are trying to iterate over the same iterator.
    Hence we will get the run time error. To fix this we can create 
    a new iterator.
    
    
    */

     Iterator itr1 = s.iterator();

      while(itr1.hasNext())
    {
        System.out.println(itr1.next());
    }

}
 }
 
/*
run:
-----Before Pop-----
10
20
10
BUILD SUCCESSFUL (total time: 0 seconds)


*/

//---------------------------------------------------------------------*******************-------------------------------------------