
package Collections;
import java.util.*;
class RemoveDuplicateChars1
{
   public static void main(String[] args)
    {
        Map<Character,Integer> s = new LinkedHashMap();
        String input="vviiiikaaass";
        String newInput="";
        char[] inputElements= input.toCharArray();
        for(char ch1: inputElements)
        {
            if(s.containsKey(ch1))
            {
                int value= s.get(ch1);
                s.put(ch1, value+1);
            }
            else
            {
                s.put(ch1, 1);
            }
        }
        Set s1= s.entrySet();
        Iterator itr=s1.iterator();
        while(itr.hasNext())
        {
            Map.Entry m1=(Map.Entry) itr.next();
            if((int)m1.getValue()<=2)
            {
                newInput= newInput+Character.toString((char)m1.getKey());
            }
        }
        input=newInput;
        System.out.println(input);
    }
}
/*
run:
vikas
BUILD SUCCESSFUL (total time: 1 second)
*/
