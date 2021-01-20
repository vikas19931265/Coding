
package Regex;
/*

String class also contains split() method to split the target String according to a 
particular pattern.

Note**

Pattern classs split() method can take target String as the argument whereas String
class split() method can take pattern as the argument.


*/

class Demo31
{
    public static void main(String[] args)
    {
        String s ="Durga Software Solutions";
        String[] s1= s.split("\\s");
        for(String s2:s1)
        {
            System.out.println(s2);
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