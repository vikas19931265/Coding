/*

find even number in collection using the lambda for each

 */

import java.util.*;
class Driver14
{
    public static void main(String[] args)
    {
        ArrayList<Integer> l = new ArrayList();
        l.add(2);
        l.add(7);
        l.add(4);
        l.forEach(
                value ->
        {
            if ((Integer) value % 2 == 0)
            {
                System.out.println(value);
            }
        }
        );
    }

}

/*
run:
2
4
BUILD SUCCESSFUL (total time: 0 seconds)

*/
