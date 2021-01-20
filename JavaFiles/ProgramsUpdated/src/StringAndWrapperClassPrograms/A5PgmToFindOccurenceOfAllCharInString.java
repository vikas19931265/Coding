package StringAndWrapperClassPrograms;
/*
Write a java program to count the total number of occurrences of a given character in a string
 */
import java.util.*;
class Sample31 {
    public static void main(String[] args) {
        String ch = "My name is Vikas Gautamm";
        char[] ch1 = ch.toCharArray();
        Arrays.sort(ch1);
        for (char ch2 : ch1) {
            System.out.println(ch2);
        }
        int cursor = 0;
        System.out.println("Finding out the occurence of the characters");
        for (int i = 0; i < ch1.length; i++) {
            System.out.println(ch1[i]);
            int count = 1;
            if ((int) ch1[i] == 32) {
                continue;
            }
            for (int j = i + 1; j < ch1.length; j++) {
                if (ch1[i] == ch1[j]) {
                    count++;
                    cursor = i;
                    cursor++;
                    i = cursor;
                } else {
                    break;
                }
            }
            System.out.println("Count " + count);
        }
    }
}
/*
run:
G
M
V
a
a
a
a
e
i
i
k
m
m
m
n
s
s
t
u
y
Finding out the occurence of the characters
G
Count 1
M
Count 1
V
Count 1
a
Count 4
e
Count 1
i
Count 2
k
Count 1
m
Count 3
n
Count 1
s
Count 2
t
Count 1
u
Count 1
y
Count 1
BUILD SUCCESSFUL (total time: 0 seconds)
*/