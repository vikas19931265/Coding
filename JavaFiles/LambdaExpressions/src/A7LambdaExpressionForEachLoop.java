/*
Java Lambda Expression Example: Foreach Loop

 */

import java.util.*;

class Driver7
{

    public static void main(String[] args)
    {
        ArrayList l = new ArrayList();
        l.add(1);
        l.add(2);
        l.add(3);
        l.add(4);
        l.forEach(
                value ->
        {
            System.out.println(value);
        }
        );
    }
}

/*

1
2
3
4

*/
