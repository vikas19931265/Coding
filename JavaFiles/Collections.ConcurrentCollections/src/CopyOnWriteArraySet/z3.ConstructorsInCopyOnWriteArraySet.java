/*

Constructors in CopyOnWriteArraySet


1. CopyOnWriteArraySet s = new CopyOnWriteArraySet();

        Creates an empty CopyOnWriteArraySet object.

2. CopyOnWriteArraySet s = new CopyOnWriteArraySet(Collection c);

       Creates CopyOnWriteArraySetObject which is equivalent to given Collection object.



Methods:

    Whatever methods present in Collection and set interfaces are applicable to CopyOnWriteArraySet as well.
There are no new methods . AddIfAbsent() and addAllAbsent() are also not needed as by default set does not allow
duplicate elements to be inserted.


*/
package concurrentcollections;

import java.util.concurrent.CopyOnWriteArraySet;

class Test106
{
    public static void main(String[] args)
    {
        CopyOnWriteArraySet s = new CopyOnWriteArraySet();
        
        s.add("A");
        
        s.add("B");
        
        s.add("C");
        
        s.add(null);
        
        s.add(10);
        
        s.add("D");
    }
}


//--------------------------------------------------------------*****************************------------------------------------------------