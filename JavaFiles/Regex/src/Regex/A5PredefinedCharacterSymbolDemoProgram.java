package Regex;

import java.util.regex.*;

class Demo2
{

    public static void main(String[] args)
    {
        Pattern p = Pattern.compile("\\S"); // it checks for the non space character.
        Matcher m = p.matcher("gautamv725@");
        while(m.find())
        {
            System.out.println(m.start()+"....."+m.end());
        }
    }
}

/*
run:
0.....1
1.....2
2.....3
3.....4
4.....5
5.....6
6.....7
7.....8
8.....9
9.....10
10.....11
BUILD SUCCESSFUL (total time: 0 seconds)

*/