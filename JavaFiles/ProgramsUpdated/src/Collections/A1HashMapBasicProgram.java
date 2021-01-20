/*
Program illustrating Hashmap
===================================
*/
package Collections;
import java.util.*;
class HashMapDemo
{
    public static void main(String[] args)
    {
        HashMap m = new HashMap();
        m.put(1,"vikas");
        m.put(2,"gautam");
        m.put(3,"dravid");
        Set s =m.entrySet();
        Iterator itr=s.iterator();
        while(itr.hasNext())
        {
            Map.Entry  m1=(Map.Entry)itr.next();
            System.out.println(m1.getKey()+"...."+m1.getValue());
        }
    }
}
/*
run:
1....vikas
2....gautam
3....dravid
BUILD SUCCESSFUL (total time: 0 seconds)
*/