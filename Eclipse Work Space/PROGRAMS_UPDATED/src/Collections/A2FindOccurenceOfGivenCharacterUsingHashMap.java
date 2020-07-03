package Collections;
/*
Java program to find occurences of given character in string using hashmap.
 */
import java.util.*;
class Sample23 {
    static int count = 0;
    public static void main(String[] args) {
        String s = "I am Vikas Gautam";
        HashMap<Character, Integer> m1 = new HashMap();
        for (int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i);
            m1.put(ch, count);
        }
        for (int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i);
            System.out.println(ch);
            if (m1.containsKey(ch)) {
                count = m1.get(ch);
                count++;
                m1.put(ch, count);
            }
        }
        System.out.println(m1);
    }
}
/*
run:
I
a
m
V
i
k
a
s
G
a
u
t
a
m
{ =3, a=4, s=1, t=1, u=1, V=1, G=1, I=1, i=1, k=1, m=2}
BUILD SUCCESSFUL (total time: 0 seconds)
 */
