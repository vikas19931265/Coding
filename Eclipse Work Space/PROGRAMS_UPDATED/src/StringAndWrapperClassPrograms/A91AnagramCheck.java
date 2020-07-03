package StringAndWrapperClassPrograms;

/*
 Write a java program to check whether one string is a rotation of another?
 */
import java.util.*;

class MainClasss
{

    public static void main(String[] args)
    {
        System.out.println("Checking the anagram");
        String s = "eEp";
        String s1 = "peek";
        String s3 = s.toLowerCase();
        String s4 = s1.toLowerCase();
        System.out.println(s4);
        StringBuffer sb1 = new StringBuffer();
        StringBuffer sb2 = new StringBuffer();
        for (int i = 0; i < s3.length(); i++)
        {
            if ((int) s3.charAt(i) == 32)
            {
                continue;
            } else
            {
                sb1.append(s3.charAt(i));
            }
        }
        System.out.println(sb1);
        for (int i1 = 0; i1 < s4.length(); i1++)
        {
            if ((int) s4.charAt(i1) == 32)
            {
                continue;
            } else
            {
                sb2.append(s4.charAt(i1));
            }
        }
        String s5 = new String(sb1);
        String s6 = new String(sb2);
        char[] ch1 = s5.toCharArray();
        char[] ch2 = s6.toCharArray();
        Arrays.sort(ch1);
        Arrays.sort(ch2);
        int status = 0;
        for (int i = 0, j = 0; i < ch1.length && j < ch2.length; i++, j++)
        {
            if (ch1.length != ch2.length)
            {
                status = 1;
                break;
            } else
            {
                if (ch1[i] != ch2[j])
                {
                    status = 1;
                    break;
                } else
                {
                    status = 0;
                }
            }
        }
        if (status == 1)
        {
            System.out.println("They are not anagram");
        }
        if (status == 0)
        {
            System.out.println("They are anagram");
        }
    }
}
/*
run:
Checking the anagram
peek
eep
They are not anagram
BUILD SUCCESSFUL (total time: 0 seconds)
*/
