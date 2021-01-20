/*
Object push(Object o)

    To Insert an object into the stack

*/
package e1_StackSpecificMethods;

import java.util.*;

 class push {
    
public static void main(String[] args)
{
    Stack s = new Stack();
    
    s.push(10);
    
    s.push(20);
    
    Iterator itr = s.iterator();
    
    while(itr.hasNext())
    {
        System.out.println(itr.next());
    }
    
}
 
 
 }

/*
run:
10
20
BUILD SUCCESSFUL (total time: 0 seconds)


*/

//--------------------------------------------------------------------*********************-----------------------------------