package eDeclaringClassesOrInterfacesInEachOtherRules;

/*

CASE 3:

      interface inside interface
--------------------------------

We can declare interface inside an interface

Example

    A map is a group of key value pairs and each key value pair is called as an Entry. Without existing Map object 
    there is no chance of existing Entry object hence interface entry is defined inside the Map interface.


            interface Map
            {
            
                interface Entry
                    {
                        ...
                    }       
                }       


-------------
|-----------|-
|----entry--|-
|-----------|-
|-----------|-


*/

import java.util.*;
        
class InterfaceInInterface
{
    public static void main(String[] args)
    {
       
        Map m2= new HashMap(); // Without existing Map class object in our class HashMap we cannot get access to EntrySet
        
        System.out.println(m2.getClass().getName());//java.util.HashMap
        
        HashMap m = new HashMap();
        m.put(1,"vikas");
        m.put(2,"Sachin");
        m.put(3, "Dravid");
        
        Set s =m.entrySet(); //Implemented class of object returned after calling entrySet method i java.util.HashMap$EntrySet
        
        
        /*
        
        See here a wonderful usage of interface inside interface
        
        elements are stored inside entrySet, and EntrySet is inner class to Map , hence in order to 
        access the elements inside the entry set we have to use the outer class here in our case HashMap
        reference
        
                    m.entrySet() ; // we used outerclass reference to get the innter class object.
        
        */
        System.out.println(s.getClass().getName()); //java.util.HashMap$EntrySet
        
        Iterator itr = s.iterator();
        
        while(itr.hasNext())
        {
            System.out.println(itr.next());
        }
        
        
    }
    
}

/*
run:
java.util.HashMap$EntrySet
1=vikas
2=Sachin
3=Dravid
BUILD SUCCESSFUL (total time: 0 seconds)

*/
