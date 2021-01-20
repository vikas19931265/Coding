package Collections;

import java.util.*;

 class Test2 implements Comparator {

    static LinkedHashMap<String, Integer> m1 = new LinkedHashMap<>();

    public static void main(String[] args) {

        m1.put("vikas", 26);

        m1.put("favi", 20);

        m1.put("amar", 45);

        Set s = m1.entrySet();

        List l = new ArrayList(s);

        System.out.println("list" + l);

        Collections.sort(l, new Test2()); // sort method can take only list object , hence conversion of set to list.

        System.out.println(l);

    }

    public int compare(Object obj1, Object obj2) {

        Map.Entry m1 = (Map.Entry) obj1;

        Map.Entry m2 = (Map.Entry) obj2;

        int val1 = (int) m1.getValue();

        int val2 = (int) m2.getValue();

        if (val1 > val2) {

            return +1;

        } else if (val1 < val2) {

            return -1;

        } else {

            return 0;

        }

    }

}

/*
run:
list[vikas=26, favi=20, amar=45]
[favi=20, vikas=26, amar=45]
BUILD SUCCESSFUL (total time: 0 seconds)

*/