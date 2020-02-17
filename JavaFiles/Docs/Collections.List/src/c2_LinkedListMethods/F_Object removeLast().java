/*

Object removeLast()

        It is used to remove the last element of the LinkedList and returns the element which is removed.

        
 */
package c2_LinkedListMethods;

import java.util.LinkedList;

class LinkedList6 {

    public static void main(String[] args) {

        LinkedList a = new LinkedList();

        a.add(1);
        a.add(2);
        a.add(3);

        System.out.println(a.removeLast());// This will remove the last element of the Linked List.

        System.out.println(a);

    }

}

/*
run:
3
[1, 2]
BUILD SUCCESSFUL (total time: 0 seconds)

*/
