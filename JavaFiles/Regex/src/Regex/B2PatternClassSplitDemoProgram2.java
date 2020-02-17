/*

Here in this program if we take just "." then JVM will treat everthing except all
as token which result in no ouput. So we have to use dot as a symbol and thats why
we have to write like \\. or [.].

*/

package Regex;

import java.util.regex.*;

class Demo3
{
    public static void main(String[] args)
    {
        Pattern p = Pattern.compile("\\.");
        String[] s =p.split("www.durgasoft.com");
        for(String s1:s)
        {
            System.out.println(s1);
        }
    }
}
/*
run:
www
durgasoft
com
BUILD SUCCESSFUL (total time: 0 seconds)

*/