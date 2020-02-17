
package Regex;

import java.util.regex.*;

class RegexDemo2
{
    public static void main(String[] args)
    {
        Pattern p =Pattern.compile("a");
        String[] s =p.split("Durga Software Solutions");
        for(String s1:s)
        {
            System.out.println(s1);
        }
    }
}   

/*
run:
Durg
 Softw
re Solutions
BUILD SUCCESSFUL (total time: 0 seconds)

*/