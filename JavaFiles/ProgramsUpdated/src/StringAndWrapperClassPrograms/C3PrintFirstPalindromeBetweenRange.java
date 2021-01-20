/*
   Write a program to print first palindrome between 20 and 90.
   note that reverse() method can only be called on the string buffer and not on
   on the the String class.
 */
package StringAndWrapperClassPrograms;

import java.util.*;

class Demo1
{

    public static void main(String[] args)
    {
        //int count=0;
        int reverse = 0;
        for (Integer i = 20; i <= 90; i++)
        {
            reverse = Integer.parseInt(new StringBuffer(i.toString()).reverse().toString());
            if (i == reverse)
            {
                System.out.println("first prime number is" + i);
                break;
            }
        }
    }
}
/*
$javac Demo.java
$java -Xmx128M -Xms16M Demo
0000001112
*/
