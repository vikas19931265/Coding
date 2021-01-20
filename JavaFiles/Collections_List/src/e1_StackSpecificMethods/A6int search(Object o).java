/*

int search(Object o)

    Returns offest if the element is present oterwise returns -1.


offset      index
    |       |
    |-------|
 1  |C      |2   
    |-------|
 2  |B      |1
    |-------|
 3  |A      |0
    |       |
    ---------
*/
package e1_StackSpecificMethods;



import java.util.*; 

class Search {
    
public static void main(String[] args)
{
    Stack s = new Stack();
    
    s.push(10);
    
    s.push(20);
    
    System.out.println(s.search(10));
    
    System.out.println(s.search("A"));
}

}

/*
run:
2
BUILD SUCCESSFUL (total time: 0 seconds)

*/

//-------------------------------------------------------------------*************************------------------------------------