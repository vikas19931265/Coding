/*

Full example of Generics in Java
===================================

*/


package Generics;

import java.util.*;

class Generics
{
    
    public static void main(String[] args)
    {
        
        ArrayList<String> l = new ArrayList();
        
        l.add("vikas");
        
        l.add("sachin");
        
        l.add("dravid");
        
       // l.add(32); Trying to add integer type will give us compile time error.
        
       //If you want to get the element at the index position 1 then typcasting wont be required when using get() method
       
       String s =l.get(1); // get() method return type is object, but we did not do any kind of typecasting here.
       
       
       Iterator<String> itr = l.iterator();
        
        while(itr.hasNext())
        {
            
            System.out.println(itr.next());
        }
        
    }
    
}


/*
run:
vikas
sachin
dravid
BUILD SUCCESSFUL (total time: 0 seconds)

*/