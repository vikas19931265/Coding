/*

boolean empty()

        returns true if the stack is empty.

*/
package e1_StackSpecificMethods;

import java.util.*; 

class empty {
    
public static void main(String[] args)
{
    Stack s = new Stack();
    
    s.push(10);
    
    s.push(20);
    
    System.out.println(s.empty());
    
}

}

/*
run:
false
BUILD SUCCESSFUL (total time: 0 seconds)

*/

//------------------------------------------------------------------*************************--------------------------------