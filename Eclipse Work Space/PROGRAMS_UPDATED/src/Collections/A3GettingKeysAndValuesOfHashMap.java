
package Collections;
import java.util.*;
class Demo
{
    public static void main(String[] args)
    {
        HashMap m = new HashMap();
        m.put(1,"vikas");
        m.put(2,"gautam");
        m.put(3,"dravid");
        Set s = m.keySet();
        Iterator itr=s.iterator();
        while(itr.hasNext())
        {
            System.out.println(itr.next());
        }
        Collection c= m.values();
        Iterator itr2=c.iterator();
        while(itr2.hasNext())
        {
            System.out.println(itr2.next());
        }
    }
}
/*
run:
1
2
3
vikas
gautam
dravid
BUILD SUCCESSFUL (total time: 0 seconds)
*/