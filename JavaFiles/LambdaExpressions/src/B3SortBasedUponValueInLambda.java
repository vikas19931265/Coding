/*

sort based upon the value in the lambda expresion
*/

import java.util.*;

class Driver13
{
   public static void main(String[] args)
    {
        HashMap<String, Integer> m = new HashMap();
        m.put("vikas", 2);
        m.put("ravi", 1);
        m.put("ajit", 7);
        m.put("amar", 6);
        m.put("mukesh", 5);
        m.put("akash", 9);
        Set s = m.entrySet();
        List<Map.Entry> l = new ArrayList(s);
      // System.out.println(l);
       /*
   Here Collections.sort(List l , Comparator c) has got two arguments one is the
    list object and the other one is the comparator object.
   Comparator is interface having only one method that is public int compare(object1, Object2).
   We are going to sort based upon the the comparator interface. Hence we have overridden
    the only method present inside the comparator interface that is public int compare(object1, object2)
    accepting two arguments.
        */
        Collections.sort(l, (p1, p2)
                ->
        {
            return ((Integer) p1.getValue() - (Integer) p2.getValue());
        });
       System.out.println(l);
   }

}

/*
run:
[ravi=1, vikas=2, mukesh=5, amar=6, ajit=7, akash=9]
BUILD SUCCESSFUL (total time: 0 seconds)

*/