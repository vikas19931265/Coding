
//Quantifier program

package Regex;

import java.util.regex.*;
class Demo
{
    public static void main(String[] args)
    {
        
        Pattern p = Pattern.compile("a?"); //Atmost one a including 0 number of a's
        Matcher m = p.matcher("vikasgautam");
        
        while(m.find())
        {
            System.out.println(m.start()+"...."+m.end());
            
        }
        
    }
}
/*
run:
0....0
1....1
2....2
3....4
4....4
5....5
6....7
7....7
8....8
9....10
10....10
11....11
BUILD SUCCESSFUL (total time: 0 seconds)

*/