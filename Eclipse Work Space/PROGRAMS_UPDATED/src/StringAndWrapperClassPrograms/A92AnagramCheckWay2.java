/*
Anagram program check
 */
package StringAndWrapperClassPrograms;

import java.util.*;

class DemoClass
{

    public static void main(String[] args)
    {
        System.out.println("Checking the anagram");
        String s = "vikas";
        String s1 = "sakiv";
        char[] ch1 = s.toCharArray();
        Arrays.sort(ch1);
        char[] ch2 = s1.toCharArray();
        Arrays.sort(ch2);
        StringBuffer sb1 = new StringBuffer();
        StringBuffer sb2 = new StringBuffer();
        for (char ch : ch1)
        {
            sb1.append(ch);
        }
        for (char ch : ch2)
        {
            sb2.append(ch);
        }
        if (new String(sb1).equalsIgnoreCase(new String(sb2)))
        {
            System.out.println("They are anagram");
        } else
        {
            System.out.println("They are not anagram");
        }
    }
}
/*
run:
Checking the anagram
They are anagram
BUILD SUCCESSFUL (total time: 0 seconds)
*/
