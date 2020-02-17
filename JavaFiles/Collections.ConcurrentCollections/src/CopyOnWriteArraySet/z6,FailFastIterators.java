/*

Fail Safe Iterators

While one thread iterating if other threads are allowed to perform any strucutral chagnes to the underlying
collection then such type of iterators are called as Fail safe iterators.


Fail Safe iterators will not raise any ConcurrentModificationException because every update operation will be 
performed on separate cloned copy.

*/
package concurrentcollections;

import java.util.*;

import java.util.concurrent.CopyOnWriteArraySet;

class Iterators2
{
    public static void main(String[] args)
    {
        
        CopyOnWriteArraySet l = new CopyOnWriteArraySet();
        
        l.add("A");
        
        l.add("B");
        
        Iterator itr= l.iterator(); // We got iterator object and it has not yet started iterating.
                                    // In between its start to its end if any update is made then we wil get 
                                    // ConcurrentModificationException. To fix this we have to go for Concurrent class.
                                    
        while(itr.hasNext())
        {
            
            String s= (String)itr.next();
            
            System.out.println(s); //A
            
            l.add("C");
        }
        
      
        
    }
}

/*
run:
A
B
BUILD SUCCESSFUL (total time: 0 seconds)

*/