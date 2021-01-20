
package Regex;



import java.util.StringTokenizer;

class Demo32
{
    public static void main(String[] args)
    {
        StringTokenizer st = new StringTokenizer("19-10-2018","-");
        
        while(st.hasMoreTokens())
        {
            System.out.println(st.nextToken());
        }
    }
}
/*
run:
19
10
2018
BUILD SUCCESSFUL (total time: 0 seconds)

*/