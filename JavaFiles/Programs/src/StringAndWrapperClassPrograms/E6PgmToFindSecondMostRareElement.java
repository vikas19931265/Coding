package StringAndWrapperClassPrograms;

import java.util.*;

class Demos {

    static HashMap<Integer, Integer> m = new HashMap();
    static int[] elements = {1, 2, 3, 4, 5, 6, 8, 8, 8, 9, 1, 0};
    static int element1;
    public static void main(String[] args) {

        int n = findRareElement(elements, 2);
        System.out.println(n);
    }

    public static int findRareElement(int[] ele, int element) {
        for (int e : ele) {
            m.put(e, 0);
        }

        for (int e : elements) {
            int value = m.get(e);
            m.put(e, value + 1);
        }
        System.out.println(m);
        Set s = m.entrySet();
        Iterator itr = s.iterator();
        while (itr.hasNext()) {
            Map.Entry m1 = (Map.Entry) itr.next();
            if ((Integer) m1.getValue() == element) {
                element1 = (Integer) m1.getKey();
            }
        }

        return element1;
    }

}

/*
run:
{0=1, 1=2, 2=1, 3=1, 4=1, 5=1, 6=1, 8=3, 9=1}
1
BUILD SUCCESSFUL (total time: 0 seconds)

*/