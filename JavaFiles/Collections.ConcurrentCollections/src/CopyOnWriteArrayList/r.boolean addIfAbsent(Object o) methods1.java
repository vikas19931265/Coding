package concurrentcollections;

import java.util.concurrent.CopyOnWriteArrayList;

/*
method1

boolean addIfAbsent(Object o)

        The element will be added if and only if the list doesnot contain
this element


*/

class addIfAbsent
{
    
    public static void main(String[] args)
    {
        
        CopyOnWriteArrayList l = new CopyOnWriteArrayList();
    
        l.add("A");
        
        l.add("A");
        
        l.addIfAbsent("B");
        
        l.addIfAbsent(("B"));
    
        System.out.println(l); // [A, A, B]
    
    
    }
}

/*
run:
[A, A, B]
BUILD SUCCESSFUL (total time: 0 seconds)

*/

//-------------------------------------------------------------------***************************------------------------------------------------