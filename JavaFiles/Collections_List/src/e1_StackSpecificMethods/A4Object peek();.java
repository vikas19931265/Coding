/*
Object peek();

    To return top of the stack without removing it.

*/

package e1_StackSpecificMethods;

import java.util.*; 

class Peek {
    
public static void main(String[] args)
{
    Stack s = new Stack();
    
    s.push(10);
    
    s.push(20);
    
    System.out.println(s.peek());
    
}

}
 
/*
run:
20
BUILD SUCCESSFUL (total time: 0 seconds)

*/

//----------------------------------------------------------------------********************---------------------------------------------