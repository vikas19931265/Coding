/*
    Write a program to find length of integer without using library function?
 */
package StringAndWrapperClassPrograms;
import java.util.*;
class Demo4
{
    public static void main(String[] args)
    {
        String value = "102456789";
        char[] ch = value.toCharArray();
        int count = 0;
        for (char ch2 : ch)
        {
            count++;
        }
        System.out.println("length of number is " + count);
    }
}
/*
run:
length of number is 9
BUILD SUCCESSFUL (total time: 0 seconds)
*/
