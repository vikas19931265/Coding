/*

I/p: {1,2,3,1,2,3,1,5,5,6}

O/P:{1,1,1,5,5,3,3,2,2,6}
what a program for this
frequency wise sorting

*/
package Collections;

import java.util.*;
class Pgmss
{
    public static void main(String[] args)
    {
        int[] input={1,2,3,1,2,3,1,5,5,6};
        HashMap<Integer,Integer> m= new HashMap();
        List<Map.Entry> m1= new ArrayList();
        for(int in: input)
        {
            if(m.containsKey(in))
            {
                int value=m.get(in);
                m.put(in, value+1);
            }
            else
            {
                m.put(in,1);
            }
        }
        Set s = m.entrySet();
        Iterator itr=s.iterator();
        while(itr.hasNext())
        {
            Map.Entry m2=(Map.Entry)itr.next();
            m1.add(m2);
        }
       System.out.println(m1);

      Collections.sort(m1,(p1,p2)
                         ->
                            {
                               int value1=(int)p1.getValue();
                               int value2=(int)p2.getValue();
                               if(value2>value1)
                               {
                                   return +1;
                               }
                               else if(value2<value1)
                               {
                                   return -1;
                               }
                               else
                               {
                                   return -1;
                               }
                            }
        );
        for(Map.Entry map: m1)
        {
            int key=(int)map.getKey();
            int value=(int)map.getValue();
            for(int i =0;i<value;i++)
            {
                System.out.print(key);
            }
        }
        System.out.println();
    }
}

/*
[1=3, 5=2, 3=2, 2=2, 6=1]
1115533226
BUILD SUCCESSFUL (total time: 0 seconds)

*/