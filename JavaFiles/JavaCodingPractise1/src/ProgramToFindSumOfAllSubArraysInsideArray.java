package New;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;

class FindSumOFSubArray {

    public static void main(String[] args) {
        int[] elements = {1, 3, 4, 6, 1, 4, 4};
        ArrayList<ArrayList> mainList = new ArrayList<>();
        ArrayList<Integer> childList = null;
        for (int i = 0; i < elements.length; i++) {
            for (int j = i; j < elements.length; j++) {
                childList = new ArrayList<>();
                for (int k = i; k <= j; k++) {
                    childList.add(elements[k]);
                }
                mainList.add(childList);
            }

        }
        HashMap<ArrayList, Integer> hasElements = new HashMap<>();
        Iterator itr = mainList.iterator();
        while (itr.hasNext()) {
            ArrayList l = (ArrayList) itr.next();
            int sum = 0;
            Iterator itr1 = l.iterator();
            while (itr1.hasNext()) {
                sum = sum + (int) itr1.next();
            }
            hasElements.put(l, sum);
        }
        System.out.println(hasElements);
        Set s = hasElements.entrySet();
        Iterator itr3 = s.iterator();
        ArrayList<HashMap> mainList1 = new ArrayList<>();
        HashMap<ArrayList, Integer> childList1 = null;
        int count;
        while (itr3.hasNext()) {
            Map.Entry m1 = (Map.Entry) itr3.next();
            int value = (int) m1.getValue();
            count = 0;
            Set s1 = hasElements.entrySet();
            Iterator itr4 = s1.iterator();
            while (itr4.hasNext()) {
                Map.Entry m3 = (Map.Entry) itr4.next();
                if ((int) m3.getValue() == value) {
                    childList1 = new HashMap<>();
                    //childList1.add((ArrayList)m3.getKey());
                    childList1.put(((ArrayList) m1.getKey()), (int) m1.getValue());
                    count++;
                }
            }
            if (count > 1) {
                mainList1.add(childList1);
            }
        }

        System.out.println(mainList1);

    }
}

/*
run:
{[1, 3, 4]=8, [4, 4]=8, [4, 6]=10, [6, 1, 4]=11, [1, 3, 4, 6, 1, 4]=19, [3, 4, 6, 1]=14, [1, 3, 4, 6, 1, 4, 4]=23, [4, 6, 1]=11, [1]=1, [1, 4, 4]=9, [3]=3, [3, 4]=7, [3, 4, 6, 1, 4, 4]=22, [1, 3]=4, [4]=4, [3, 4, 6]=13, [1, 4]=5, [6]=6, [3, 4, 6, 1, 4]=18, [4, 6, 1, 4]=15, [1, 3, 4, 6]=14, [6, 1, 4, 4]=15, [4, 6, 1, 4, 4]=19, [1, 3, 4, 6, 1]=15, [6, 1]=7}
[{[1, 3, 4]=8}, {[4, 4]=8}, {[6, 1, 4]=11}, {[1, 3, 4, 6, 1, 4]=19}, {[3, 4, 6, 1]=14}, {[4, 6, 1]=11}, {[3, 4]=7}, {[1, 3]=4}, {[4]=4}, {[4, 6, 1, 4]=15}, {[1, 3, 4, 6]=14}, {[6, 1, 4, 4]=15}, {[4, 6, 1, 4, 4]=19}, {[1, 3, 4, 6, 1]=15}, {[6, 1]=7}]
BUILD SUCCESSFUL (total time: 0 seconds)

*/