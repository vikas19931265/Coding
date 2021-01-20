/*

boolean replace( Object key ,Object oldvalue, Object newValue)

    If the key and value match then replace the old value with the new value or else do 
    not do the replacement.

*/
package concurrentcollections;



import java.util.concurrent.ConcurrentHashMap;

class Test13
{
    
    public static void main(String[] args)
    {
        ConcurrentHashMap m = new ConcurrentHashMap();
        
        m.put(101,"Durga");
        
        m.replace(101,"Ravi", "Siva");
        
        System.out.println(m); // 101=Durga, key and old value does not match with existing element in collection
        
    
        m.replace(101, "Durga", "Ravi"); // key and old value match with existing element inside the collection
    
    
        System.out.println(m); //101= Ravi ....values got replaced.
    
    
    }
    
    
    
}

/*
run:
{101=Durga}
{}
BUILD SUCCESSFUL (total time: 0 seconds)

*/