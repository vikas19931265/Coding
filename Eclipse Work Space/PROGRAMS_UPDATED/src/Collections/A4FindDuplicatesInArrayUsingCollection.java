package Collections;
/*
To find duplicates in Array using Collections.
============================================================
 */
import java.util.*;
class Sample {
    static int count = 0;
    public static void main(String[] args) {
        int[] s = {1, 2, 3, 4, 1, 2, 3, 3, 3, 3, 3};
        HashMap<Integer, Integer> m1 = new HashMap();
        for (int i = 0; i < s.length; i++) {
            m1.put(s[i], count);
        }
        for (int i = 0; i < s.length; i++) {
            System.out.println(s[i]);
            if (m1.containsKey(s[i])) {
                count = m1.get(s[i]);
                count++;
                m1.put(s[i], count);
            }
        }
        System.out.println(m1);
    }
}
/*
run:
1
2
3
4
1
2
3
3
3
3
3
{1=2, 2=2, 3=6, 4=1}
BUILD SUCCESSFUL (total time: 0 seconds)
 */
