/*
Program to remove duplicates from Array Using HashMap
==============================================================
*/
package Collections;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
class Test
{
    public static void main(String[] args)
    {
         int count=0;
         int[] a ={1,1,2,2,2,3,4,4};
         ConcurrentHashMap<Integer,Integer> m1= new ConcurrentHashMap<>();
         for(int i =0;i<a.length;i++)
         {
           m1.put(a[i], count);
         }
         for(int i=0; i<a.length;i++)
         {
             if(m1.containsKey(a[i]))
             {
                 int value= m1.get(a[i]);
                 m1.put(a[i], value+1);
             }
         }
         Set s1= m1.entrySet();
         Iterator itr=s1.iterator();
         while(itr.hasNext())
         {
             Map.Entry m2=(Map.Entry)itr.next();
             if((int)m2.getValue()>1)
             {
                 m1.remove(m2.getKey()); //chance of concurrent exception hence use concurrent hashmap
             }
         }
         System.out.println(m1);
    }
}
/*
run:
{3=1}
BUILD SUCCESSFUL (total time: 0 seconds)
*/