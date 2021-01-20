/*
  Write a Java program to count the number of occurances of each number in a series of numbers.

 */
package Collections;

import java.util.*;

class Demo7
{

    public static void main(String[] args)
    {
        String number = "12345566678";
        HashMap<Character, Integer> m = new HashMap<>();
        int count = 0;
        for (int i = 0; i < number.length(); i++)
        {
            m.put(number.charAt(i), count);
        }

        for (int i = 0; i < number.length(); i++)
        {
            int value = m.get(number.charAt(i));
            m.put(number.charAt(i), value + 1);
        }

        System.out.println(m);

    }

}

/*
$javac Demo.java
$java -Xmx128M -Xms16M Demo
{1=1, 2=1, 3=1, 4=1, 5=2, 6=3, 7=1, 8=1}
*/
