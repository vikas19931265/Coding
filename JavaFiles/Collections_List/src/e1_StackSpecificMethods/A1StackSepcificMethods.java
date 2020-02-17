/* Stack specific methods.(LIFO)

Object push(Object o)

    to insert an object into stack.

Object pop()

    to remove and return top of stack.

Object peek()

    to return top of stack without removal.

boolean empty()

    returns true if the stack is empty.

int search(Object o)

    return offset( element from top) if element is available or else return -1.



*/
package e1_StackSpecificMethods;

import java.util.Stack;

 class StackDemo
{
    public static void main(String[] args)
    {
        Stack s = new Stack();
        s.push("A");
        s.push("B");
        s.push("C");
        
        System.out.println(s);
        System.out.println(s.search("A"));
        System.out.println(s.search("Z"));
        
    }
}

/*
o/p
run:
[A, B, C]
3
-1
BUILD SUCCESSFUL (total time: 1 second)



*/


//----------------------------------------------------------------------********************-------------------------------------