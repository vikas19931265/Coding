/*
HashMap program to find occuerence of a given character
============================================================
*/
package Collections;
import java.util.*;
class Demo2
{
    static int count=0;
    public static void main(String[] args)
    {
        String s ="I am Vikas Gautam";
        HashMap<Character,Integer> m1= new HashMap<>();
        for(int i=0;i<s.length();i++)
        {
            m1.put(s.charAt(i), count);
        }
        for(int i=0;i<s.length();i++)
        {
            if(m1.containsKey(s.charAt(i)))
            {
                int value= m1.get(s.charAt(i));
                m1.put(s.charAt(i), value+1);
            }
        }
       System.out.println(m1);
    }
}
/*
run:
{ =3, a=4, s=1, t=1, u=1, V=1, G=1, I=1, i=1, k=1, m=2}
BUILD SUCCESSFUL (total time: 0 seconds)
*/