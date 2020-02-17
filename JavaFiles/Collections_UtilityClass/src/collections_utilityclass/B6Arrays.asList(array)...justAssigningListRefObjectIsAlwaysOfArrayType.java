/*

Conversion of ArrayToList.[ just assigning List reference, but the actual object is always Array]
=====================================================================================================



        public static List asList(Object[] a)


Strictly speaking this method will not create an independent list object. For the existing array
we are getting List view.



        String[] s ={"A","Z","B"};

        List l = Arrays.asList(s);

                    
                            --------
           ----->String[] s |A|Z|B |      
           ----->List l     --------    

           Only one object is there. If we make change using string reference then change
           will be reflected in List.

      By using Array reference if we perform any change then automatically that change will be reflected
      to the List. Similarly by using List reference if we perform any change then that change will be reflected
      automatically to the array.


***note

Point1:
===============

By using List reference we cannot perform any operation which changes the size of Array, otherwise we will get Runtime
Exception saying UnsupportedOperation Exception.


l.add("M);--------
                |-----> RE: UnsupportedOperationException
l.remove("N");----

l.set(1,"N");----> This is valid.


Point2
==================

By using List reference we are not allowed to replace with heterogeneous objects otherwise we 
will get Runtime exception saying ArrayStoreException.

l.set(1, newInteger(10));  // RuntimeException ArrayStoreException.



*/
package collections_utilityclass;

import java.util.*;
class ArraysAsArrayListDemo {
    

    public static void main(String[] args)
    {
        
        String[] s ={ "A","Z","B"};
        
        List l =Arrays.asList(s);
        
        System.out.println(l);//[A, Z, B]
        
        s[0]="K";
        
        System.out.println(l);//[K, Z, B]
        
        l.set(1,"L");
        
        for(String s1: s)
        {
            System.out.println(s1);
            /*
            K
            L
            B
        
            */
            }
    
        /*
        l.add("durga");  // changing the size of the array..UnsupportedException
        
        l.remove(2);  // changing the size of array...UnsupportedOperationException
        
        l.set(1, new Integer(10)); replacing with heterogeneous objects. Runtime Exception ArraystoreException.   
    
        
  Runtime Exception ArraystoreException.   
        
        */

}


}

/*
run:
[A, Z, B]
[K, Z, B]
K
L
B
BUILD SUCCESSFUL (total time: 0 seconds)

*/

//----------------------------------------------------------------------*******************-----------------------------------------