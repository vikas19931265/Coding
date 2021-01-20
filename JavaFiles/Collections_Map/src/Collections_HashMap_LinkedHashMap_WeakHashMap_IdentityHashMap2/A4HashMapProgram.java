package Collections_HashMap_LinkedHashMap_WeakHashMap_IdentityHashMap2;

/*

HashMap program

*/
import java.util.*;

class Hashmaps
{
    public static void main(String[] args)
    {

        HashMap m = new HashMap();

        m.put(1, "vikas");

        m.put(2, "Dravid");

        m.put(3,"Dhoni");

        Set s  = m.keySet();

        System.out.println(s);//[1, 2, 3]

        /*

         Here keySet is a method which will be present inside the HashMap
         class. This method return type is of Set type.

         In actual HashMap contains an inner class(java.util.HashMap$KeySet).
         The implementation for the method is given by the inner class that
         is KeySet.


         */

         System.out.println(s.getClass().getName());//java.util.HashMap$KeySet

         Collection c = m.values(); // [vikas, Dravid, Dhoni]

         System.out.println(c);

         Set s1=m.entrySet();

         Iterator itr=s1.iterator();

         while(itr.hasNext())
         {
             System.out.println(itr.next());
             /*
             1=vikas
            2=Dravid
            3=Dhoni
             */
         }


         Iterator itr1= s1.iterator();

         while(itr1.hasNext())
         {
             /*
             Here itr1.next() is holding an object of type Map.Entry.
             Hence we have typecasted the itr1.next() of type object
             into Map.Entry so that we can call entry related methods
             on the object.

             */

             Map.Entry m2= (Map.Entry) itr1.next();


             System.out.println(m2.getKey()+"....."+ m2.getValue());/*1.....vikas
                                                                      2.....Dravid
                                                                      3.....Dhoni

                                                                     */


         }


    }

}

/*
run:
[1, 2, 3]
java.util.HashMap$KeySet
[vikas, Dravid, Dhoni]
1=vikas
2=Dravid
3=Dhoni
1.....vikas
2.....Dravid
3.....Dhoni
BUILD SUCCESSFUL (total time: 0 seconds)

*/

//-------------------------------------------------------------------------**********************-------------------------------------