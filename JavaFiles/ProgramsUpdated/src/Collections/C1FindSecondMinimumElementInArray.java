
/*
    Write a java code to find the second minimum element in an array using single loop.
 */
package Collections;

import java.util.*;

class Demo3
{

    public static void main(String[] args)
    {
        String value = "102456789";
        char[] ch = value.toCharArray();
        int count = 1;
        TreeSet t = new TreeSet();
        for (char ch1 : ch)
        {
            t.add(ch1);
        }
        List l = new ArrayList(t);
        Collections.sort(l);
        System.out.println(l.get(1));
        /* Iterator itr= t.iterator();
       while(itr.hasNext())
       {
           char element=(char)itr.next();
            if(count==5)
            {
                System.out.println(element);
                break;
            }
            count++;
       }
         */
    }
}
/*
$javac Demo.java
$java -Xmx128M -Xms16M Demo
0000001112
 */
