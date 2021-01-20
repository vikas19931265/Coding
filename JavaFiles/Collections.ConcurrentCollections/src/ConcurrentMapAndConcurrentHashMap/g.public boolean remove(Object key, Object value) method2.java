/*

public boolean remove(Object key, Object value)

    Removes the entry only if the key is associated with the specified value.
*/
package concurrentcollections;


import java.util.concurrent.ConcurrentHashMap;

class Test12
{
    
    public static void main(String[] args)
    {
        ConcurrentHashMap m = new ConcurrentHashMap();
        
        m.put(101,"Durga");
        
       m.remove(101,"Ravi"); // Value not matched with the key hence not removed.
        
        System.out.println(m);// 101=Durga
        
       m.remove(101,"Durga"); // Key and value are matched .
        
        System.out.println(m); // {}
        
    }
}

/*
run:
{101=Durga}
{}
BUILD SUCCESSFUL (total time: 0 seconds)

*/

//-----------------------------------------------------------**************************************------------------------------------