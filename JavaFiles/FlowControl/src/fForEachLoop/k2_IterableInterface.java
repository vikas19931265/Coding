/*


Iterable interface.
-------------

    for(eachItem x : target)

    {
          // target can be Array/Collection and target has to be Iterable object                  

    }


The target element in for-each loop should be Iterable object.

An object is said to be iterable if and only if corresponding class implements 
java.lang.Iterable interface.

Iterable interface was introduced in 1.5 java version and it contains only one method
that is iterator method.


            public Iterator iterator();

All array related classes and collection implemented classes already implements Iterable 
interface. Being a programmer we are not required to do anything.

*/

import java.util.*;


class sSample
{
    public static void main(String[] args)
    {
        
        ArrayList a = new ArrayList();
    
        a.add(10);
        
        a.add(20);
        
        Iterator itr= a.iterator();
        
        System.out.println(itr.getClass().getName());
    
    
        
    
    
    }
}

