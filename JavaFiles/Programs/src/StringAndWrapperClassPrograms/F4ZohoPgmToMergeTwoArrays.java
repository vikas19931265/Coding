/*
5. Given two sorted arrays, merge them such that the elements are not repeated

Eg 1: Input:
        Array 1: 2,4,5,6,7,9,10,13
        Array 2: 2,3,4,5,6,7,8,9,11,15
       Output:
       Merged array: 2,3,4,5,6,7,8,9,10,11,13,15

*/
package StringAndWrapperClassPrograms;
import java.util.*;

class ZohoPgm3
{
    public static void main(String[] args)
    {
        int[] input1= {2,4,5,6,7,9,10,13};
        int[] input2= {2,3,4,5,6,7,8,9,11,15};
        Set s = new HashSet();

        for(int inp: input1)
        {
            s.add(inp);
        }
        for(int inp: input2)
        {
            s.add(inp);
        }
        List l = new ArrayList(s);
        Collections.sort(l);
        System.out.println(l);
    }
}

/*
run:
[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15]
BUILD SUCCESSFUL (total time: 0 seconds)

*/