/*
Difference between == and .equals() method.
===================================================================


In general == operator is meant for the reference comparison(address comparison) whereas .equals() method
is meant for content comparison.

Example.

        Integer i1= new Integer(10);
        Integer i2= new Integer(10);

        System.out.println(i1==i2) // false.
        System.out.println(i1.equals(i2); // true.


I1------>object(10)

i2------>object (10);




IdentityHashMap.
===============================================

1. It is exaclty same as HashMap( including methods and constructors) except the following
   difference.


a. In the case of normal HashMap JVM will use .equals() method  to identify duplicate keys, which
   is meant for content comparison.

b. But in the case of IdenityHashMap JVM will use == operator to identify the duplicate keys which 
   is meant for the reference comparison( address comparison).


Example.

            HashMap m = new HasMap();
            Integer i1= new Integer(10);
            Integer i2= new Integer(10);
            m.put(I1,"pawan");
            m.put(I2, "Kalyan");
            
            System.out.println(m);
 
I1, I2 are duplicate keys I1 i1.equals(I2) returns true.


c. If we replace HashMap with Identity HashMap then i1 and i2 are not duplicate keys because
   I1==I2 returns false. In this case the output is {10=pawan, 10=kalyan}


*/
package Collections_HashMap_LinkedHashMap_WeakHashMap_IdentityHashMap2;


import java.util.*;


 class IdentiyHashMapss {
     
     public static void main(String[] args)
     {
         
            HashMap m = new HashMap();
            Integer i1= new Integer(10);
            Integer i2= new Integer(10);
            m.put(i1,"pawan");
            m.put(i2, "Kalyan");
            
            System.out.println(m);//{10=Kalyan}
            
            
            IdentityHashMap m12 = new IdentityHashMap();
            Integer i3= new Integer(10);
            Integer i4= new Integer(10);
            m12.put(i3,"pawan");
            m12.put(i4, "Kalyan");
            
            System.out.println(m12);//{10=Kalyan, 10=pawan}
     }
    
}
/*
run:
{10=Kalyan}
{10=Kalyan, 10=pawan}
BUILD SUCCESSFUL (total time: 0 seconds)

*/

//------------------------------------------------------------------******************************--------------------------------------------------