/* Iterator
================================================

1. We can apply iterator concept for any collection Object and hence it is a universal
   cursor.

2.By using iterator we can perform both read and remove operations.

3. We can create iterator Object by using iterator method of collection interface.

    public Iterator iterator();

example : Iterator itr= c. iterator();
        
        where c is Any Collection Object.



Methods of iterator.

1. public boolean hasNext();

2. public Object next();

3. public void remove();

*/
package f1_Cursors;

import java.util.ArrayList;
import java.util.Iterator;


 class IteratorDemo
{
    public static void main(String[] args)
    {
        ArrayList l = new ArrayList();
        
        for(int i=0; i<=10;i++)
        {
            l.add(i);
        }
    
    
        System.out.println(l);
        
        Iterator itr= l.iterator();
        
        while(itr.hasNext())
        {
            Integer i = (Integer)itr.next(); // next() return type is object, hence we are converting from object type to integer type.
        
            if(i%2==0)
            {
                System.out.println(i);
            }
            
            else
            {
                itr.remove(); // removing odd numbers from the ArrayList.
            }
               
        
        }
        
        System.out.println(l); // From the array list we have removed elements using iterator.
    
    }
}

/*
o/p
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
0
2
4
6
8
10
[0, 2, 4, 6, 8, 10]
BUILD SUCCESSFUL (total time: 0 seconds)



*/

/*
Limitations of Iterator
==========================================================


1. By using enumeration and iterator we can move only in the forward direction and we 
   cannot move in the backward direction. These are single direction cursors but not 
   bidirectional cursors.

2. By using iterator we can perform only read and remove operations and we cannot perform
   replacement and addition of new objects.

3. To overcome above limitations we should go for ListIterator.

*/

//------------------------------------------------------------------************************----------------------------