
/*
How to get synchronized version of the ArrayList object.


By default ArrayList is Non Synchronized , but we can get Synchronized version of 
ArrayList object by using synchronizedList() method of Collections class.



    public static List synchronizedList( List l);


    ArrayList l = new ArrayList();

    List l1 = Collections.synchronizedList( l );

    l------> non Synchronized

    l1------> synchronized
    

Similar to ArrayList we can get synchronized version of Set and Map objects by using
the following methods of Collections class.


    public static Set synchronizedSet(Set s);

    public static Map synchronizedSet(Map m



*/
package b1_ArrayListBasicsANDConstructors;

import java.util.*;


class SynchronizedArrayList
{
    
    public static void main(String[] args)
    {
        
        ArrayList a = new ArrayList();
        
        a.add(1);
        a.add("vikas");
        
        List l= Collections.synchronizedList(a); // This will convert the arrayList into Synchronized ArrayList.
        
       
        HashSet s = new HashSet();
        
        s.addAll(a);
        
        Set t= Collections.synchronizedSet(s);// This will convert Set classes Synchronized.
        
        
        HashMap m = new HashMap();
        
        m.put(1,"vikas");
        
        m.put(2, "Ravi");
        
        Map m1 = Collections.synchronizedMap(m);// This will Convert Map classes Synchronized.
        
        
    
    
    }
}
