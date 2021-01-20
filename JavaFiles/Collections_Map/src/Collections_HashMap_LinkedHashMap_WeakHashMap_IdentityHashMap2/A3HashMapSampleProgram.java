/*

Hashmap program
=====================================
 
*/
package Collections_HashMap_LinkedHashMap_WeakHashMap_IdentityHashMap2;

import java.util.*;

class HashMapDemo2 {

    public static void main(String[] args) {
        HashMap m = new HashMap();
        m.put("chiranjeevi", 700);
        m.put("balaih", 800);
        m.put("venkatesh", 200);
        m.put("nagarjuna", 500);

        System.out.println(m);//{balaih=800, nagarjuna=500, venkatesh=200, chiranjeevi=700}

        System.out.println(m.put("chiranjeevi", 1000));//700( trying to replace will return object getting replaced

        Set s = m.keySet();

        System.out.println(s);//[balaih, nagarjuna, venkatesh, chiranjeevi]

        Collection c = m.values();

        System.out.println(c);//[800, 500, 200, 1000]

        Set s1 = m.entrySet();

        System.out.println(s1);//[balaih=800, nagarjuna=500, venkatesh=200, chiranjeevi=1000]

        Iterator itr = s1.iterator();

        while (itr.hasNext()) {
            Map.Entry m1 = (Map.Entry) itr.next();

            System.out.println(m1.getKey() + "....." + m1.getValue());

            if (m1.getKey().equals("nagarjuna")) {
                m1.setValue(10000);
            }
        }

        System.out.println(m); //{balaih=800, nagarjuna=10000, venkatesh=200, chiranjeevi=1000}

        /*
    [balaih=800, nagarjuna=500, venkatesh=200, chiranjeevi=1000]
balaih.....800
nagarjuna.....500
venkatesh.....200
chiranjeevi.....1000   
       
       
         */
    }
} 
 
 
/*
run:
{balaih=800, nagarjuna=500, venkatesh=200, chiranjeevi=700}
700
[balaih, nagarjuna, venkatesh, chiranjeevi]
[800, 500, 200, 1000]
[balaih=800, nagarjuna=500, venkatesh=200, chiranjeevi=1000]
balaih.....800
nagarjuna.....500
venkatesh.....200
chiranjeevi.....1000
{balaih=800, nagarjuna=10000, venkatesh=200, chiranjeevi=1000}
BUILD SUCCESSFUL (total time: 0 seconds)




*/
