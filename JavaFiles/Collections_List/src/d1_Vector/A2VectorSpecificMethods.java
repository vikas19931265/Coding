/* Vector specific methods.( legacy class in java 1.0)

To Add object

add(Object o)--->Collection/ArrayList
add(int index, Object o)---->List interface
addElement(Object o)------>Vector


To Remove Objects.

remove(Object o)------>Collection
removeElement(Object o)---->Vector
remove(int index)-------->List
removeElementAt(int index)---->Vector
clear()--->collection
removeAllElements()--->Vector


To Get object

Object get(int index)------>List
Object elementAt(int index)---Vector
Object firstElement()------>Vector
Object lastElement()------->Vector


Other methods.

int size();
int capactiy(); // this method available only in vector not in arraylist
Enumeration elements();


*/
package d1_Vector;

import java.util.LinkedList;
import java.util.Vector;

/**
 *
 * @author VIKAS GAUTAM
 */
 class Demo1
{
    public static void main(String[] args)
    {
        Vector v = new Vector();
        System.out.println(v.capacity()); //10
        for(int i=1; i<=10; i++)
        {
            v.add(i); // we can use v.addElementAt(i) as well.
        }
                
        System.out.println(v.capacity());//10
        v.addElement("A");
        System.out.println(v.capacity());//20
        System.out.println(v); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, A]
     
   /*
    o/p
        
        run:
10
10
20
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, A]
BUILD SUCCESSFUL (total time: 0 seconds)

        
        
    */  
      
          
    
    }
}

//---------------------------------------------------------------------********************-----------------------------