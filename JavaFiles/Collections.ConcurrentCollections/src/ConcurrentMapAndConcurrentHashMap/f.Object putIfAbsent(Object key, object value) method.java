/*

ConcurrentMap(interface) defines 3 specific methods.
------------------------------------------------


1. Object putIfAbsent(Object key, object value)


        To add entry to the map , if and only if the specified key is not available.
If the specified key is available then don't add the element.



put vs putIfAbsent


put()
------
If the key is Already available , then the old value will be replaced with the new value
and returns the old value.


putIfAbsent()
------------------

If the key is already present then Entry will not be added and return old associated value. 
If the key is not available then only the entry will be added.



*/
package concurrentcollections;

import java.util.concurrent.ConcurrentHashMap;

class Test11
{
    
    public static void main(String[] args)
    {
        ConcurrentHashMap m = new ConcurrentHashMap();
        
        m.put(101,"Durga");
        
        m.put(101,"Ravi");
        
        System.out.println(m);// 101=Ravi...normal put has replaced durga with ravi
        
        m.putIfAbsent(101, "Siva");
        
        System.out.println(m); // 101=Ravi...putIfAbsent can only insert if the key is not present.
    }
}

/*
run:
{101=Ravi}
{101=Ravi}
BUILD SUCCESSFUL (total time: 0 seconds)

*/

//---------------------------------------------------------------******************************----------------------------------------