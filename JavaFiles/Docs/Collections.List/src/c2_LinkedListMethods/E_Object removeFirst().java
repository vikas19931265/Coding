/*

Object removeFirst()

        It is used to remove the first element of the LinkedList and returns the element which is removed.

        
 */
package c2_LinkedListMethods;

import java.util.LinkedList;

class LinkedList5 {

    public static void main(String[] args) {

        LinkedList a = new LinkedList();

        a.add(1);
        a.add(2);
        a.add(3);

        System.out.println(a.removeFirst());// This will remove the first element of the Linked List.

        System.out.println(a);

    }

}

/*
run:
1
[2, 3]
BUILD SUCCESSFUL (total time: 0 seconds)


*/
