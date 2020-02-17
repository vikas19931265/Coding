/*
    Sort an array containing only 0,1,and 2 such that all zeroes ones and twos come together.
*/
package StringAndWrapperClassPrograms;
import java.util.*;
class Demo5
{
    public static void main(String[] args)
    {
        String s ="1000121000";
        char[] ch =s.toCharArray();
        Arrays.sort(ch);
        System.out.println(ch);
    }
}
/*
$javac Demo.java
$java -Xmx128M -Xms16M Demo
0000001112
*/