/*

StringTokenizer
====================

It is a specially designed class for tokenization activity. StringTokenizer is 
present in java.util package.

The default regular expression for the String Tokenizer is space.
*/

package Regex;

import java.util.StringTokenizer;

class Demo34
{
    public static void main(String[] args)
    {
        StringTokenizer st = new StringTokenizer("Durga Software Solutions");
        
        while(st.hasMoreTokens())
        {
            System.out.println(st.nextToken());
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