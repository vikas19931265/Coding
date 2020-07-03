
package StringAndWrapperClassPrograms;

import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
class ReverseChars
{
    public static void main(String[] args)
    {
        String input="J@av!a";
        HashMap m = new HashMap<>();
        int k=0;
        for(int i =0 ; i<input.length();i++)
        {
            char aciiValue=(input.charAt(i));
            Pattern p =Pattern.compile("[a-zA-Z0-9]");
            Matcher m1= p.matcher(Character.toString(aciiValue));
            if(m1.find())
            {
                k++;
            }
            else
            {
                m.put(aciiValue, k);
                k++;
            }
        }
        System.out.println(m);
        StringBuffer input1= new StringBuffer(input.replaceAll("[^a-zA-Z0-9]","")).reverse();
        System.out.println("after reverse " + input1);
        Set s =m.entrySet();
        Iterator itr=s.iterator();
        while(itr.hasNext())
        {
            Map.Entry m3=(Map.Entry)itr.next();
            int indexValue =(int)m3.getValue();
            Character value= (Character)m3.getKey();
            input1.insert(indexValue, value);



        }
    System.out.println(input1);
    }
}

/*
run:
{@=1, !=4}
after reverse avaJ
a@va!J
BUILD SUCCESSFUL (total time: 0 seconds)

*/