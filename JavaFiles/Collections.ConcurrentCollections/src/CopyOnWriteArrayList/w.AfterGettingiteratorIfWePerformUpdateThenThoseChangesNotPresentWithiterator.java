
/*

After getting iterator if we perform any update operation to the CopyOnArrayList , then
those changes will not be available to the iterator.

We can see those changes when we print ArrayList object once the iteration ins completed.

*/

package concurrentcollections;

import java.util.concurrent.CopyOnWriteArrayList;

import java.util.Iterator;

import java.util.ArrayList;

class Test100
{
    
    public static void main(String[] args)
    {
        CopyOnWriteArrayList l = new CopyOnWriteArrayList();
        
        l.add("A");
        
        l.add("B");
        
        l.add("C");
        
        Iterator itr = l.iterator();
        
        l.add("D"); //When we add D, a new object is created.
                    // Now here for new update  a new copy of object with value A, B, C, D
                   // is created. But our iterator is pointing to old copy with values A, B , C only.
        
        while(itr.hasNext())
        {
            
            String s =(String)itr.next();
            
            System.out.println(s);
        }
        
    
        System.out.println("Printing values once iteration is complete "+ l);
    
    
    }
}

/*

run:
A
B
C
Printing values once iteration is complete [A, B, C, D]
BUILD SUCCESSFUL (total time: 0 seconds)


*/

//------------------------------------------------------------------******************************--------------------------------------------------------------