package Collections_HashMap_LinkedHashMap_WeakHashMap_IdentityHashMap2;

/*

Demonstrating the usage of the garbage collector in the case of WeakHashMap
===============================================================================

*/

import java.util.*;

 class WeakHashs
{
    
    public static void main(String[] args) throws Exception
    {
        
        WeakHashMap m1= new WeakHashMap();
        
        Temp t = new Temp();
        
        m1.put(t, "Vikas");
        
        t=null;
        
        System.gc();
        /*
            This will start a new thread which is responsible to clear
            all the unreferenced variables. But in order to let this
            thread start we must make the main thread sleep hence
            we have given the below line that is Thread.sleep(1000);*/
        
        
         Thread.sleep(1000);
        
        
    }
    
    
}



class Temp1
{
    
    public void finalize()
    {
        
        System.out.println("Garbage collector is successful in destroying me");
        
    }
    
    
    
    
}


/*
$javac WeakHash.java
Note: WeakHash.java uses unchecked or unsafe operations.
Note: Recompile with -Xlint:unchecked for details.
$java -Xmx128M -Xms16M WeakHash
Garbage collector is successful in destroying me

*/
