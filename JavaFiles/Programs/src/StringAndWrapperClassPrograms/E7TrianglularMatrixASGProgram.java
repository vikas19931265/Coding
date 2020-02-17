package StringAndWrapperClassPrograms;
import java.util.*;
class ASGProgram {
    static int length;
    static ArrayList<Integer> l = new ArrayList();
    static int[] n;
    public static void main(String[] args) {
        int[][] elements = {
            {4},
            {6, 8},
            {8, 7, 9},
            {9, 8, 7, 5},
            {5, 4, 6,6,5,7}
        };
        int[] ele2 = findThePath(elements);
        for (int ele : ele2) {
            System.out.print(ele + "\t");
        }
    }
    public static int[] findThePath(int[][] elements) {
        n = new int[elements.length];
        l1:
        for (int[] ele : elements) {
            if (ele.length == 1) {
                l.add(ele[0]);
                continue l1;
            }
            if (ele[0] > ele[1]) {
                l.add(ele[0]);
                continue l1;
            } else if (ele[1] > ele[0]) {
                l.add(ele[1]);
                continue l1;
            }
        }
        Object[] obj = l.toArray();
        int k = 0;
        for (Object obj1 : obj) {
            n[k] = (Integer) obj1;
            k++;
        }
        return n;
    }
}

/*
run:
4	8	8	9	5	BUILD SUCCESSFUL (total time: 0 seconds)

*/
