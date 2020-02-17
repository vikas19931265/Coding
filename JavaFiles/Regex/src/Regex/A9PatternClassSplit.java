
package Regex;

/*
Pattern class split() method
====================================

We can use pattern class split() method  to split the target String according to
a particular pattern


Pattern class contains split() method to split the given string against a regular
expression.

This is like dividing with respect to space. Except space in this case remaining all
are tokens.


*/

import java.util.regex.*;

class RegexDemo1
{
    public static void main(String[] args)
    {
        Pattern p =Pattern.compile("\\s");
        String[] s =p.split("Durga Software Solutions");
        for(String s1:s)
        {
            System.out.println(s1);
        }
    }
}

/*
run:
Durga
Software
Solutions
BUILD SUCCESSFUL (total time: 0 seconds)

*/


//======================================================================*******************************=================================================