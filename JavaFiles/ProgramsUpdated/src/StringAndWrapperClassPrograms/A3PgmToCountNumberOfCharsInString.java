/*
Java Program to count the number of characters in String
 */
package StringAndWrapperClassPrograms;

import java.util.*;

class Sample2
{

    public static void main(String[] args)
    {
        String name = "Vikas Gautam";
        char[] ch = name.toCharArray();
        int count = 0;
        for (char ch2 : ch)
        {
            count++;
        }
        System.out.println("count of the words is " + count);
    }
}
/*
run:
count of the words is 12
BUILD SUCCESSFUL (total time: 0 seconds)
*/
