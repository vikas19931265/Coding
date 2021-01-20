/* WeakHashMap
=================================================================

 1. It is exactly same as HashMap except the following differences.

 a. In the case of the HashMap even though Object does not have any reference it is not available for 
    garbage collection if it is associated with the HashMap that is HashMap dominates garbage collector.

 b. But in the case of the WeakHashMap, if the object does not contain any references it is eligible for the
    garbage collection even though object associated with the weakhashmap that is garbage collector dominates
    WeakHashMap


In the below example temp object is not eligible for the garbage collection because it is associated 
with the HashMap. In this case the output is 

        {temp=durga}
        {temp=durga}



If we replace the HashMap with the WeakHashMap then the temp object is eligible for the gc. In this 
case the output is 
    
            {temp="durga"}
            Finalize Method Called
                {}
        


 */
package Collections_HashMap_LinkedHashMap_WeakHashMap_IdentityHashMap2;

import java.util.*;

class WeakHashMapDemo1 {

    public static void main(String[] args) throws Exception {
        HashMap m = new HashMap(); // created HashMap object

        Temp t = new Temp();// Created temp object.

        m.put(t, "durga"); // Inside HashMap we inserted t reference( value) and durga

        System.out.println(m);//{temp=durga}
        
        t = null; // removed reference of t object but this t is used in the HashMap
        System.gc();// called garbage collector. This will not be able to destroy object as its weaker then the HashMap. 
        // We have to use WeakHashMap to give power to the garbage collector to destroy the object in this case.

        Thread.sleep(5000);
        System.out.println(m); //{temp=durga}

        //------------------   WeakHashMap---------------------------------------------
        
        System.out.println("Weak Hash Map");

        WeakHashMap w = new WeakHashMap(); // created HashMap object

        Temp t1 = new Temp();// Created temp object.

        w.put(t1, "durga"); // Inside HashMap we inserted t reference( value) and durga

        System.out.println(w);//{temp=durga}
        
        t1 = null; // removed reference of t object but this t is used in the WeakHashMap

        System.gc();// called garbage collector. This will  able to destroy object as its Stronger then the WeakHashMap. 

        Thread.sleep(1000);

        System.out.println("element" + w); //element{} .. without key no value can be stored. As the object holding key is destroyed no elelement
        // is left to be displayed.

    }
}

class Temp {

    public String toString() {
        return "temp";
    }

    public void finalize() {
        System.out.println("Finalize method");
    }

}

/*
run:
{temp=durga}
{temp=durga}
Weak Hash Map
{temp=durga}
Finalize method
element{}
BUILD SUCCESSFUL (total time: 6 seconds)

*/

//---------------------------------------------------------------******************************---------------------------------------