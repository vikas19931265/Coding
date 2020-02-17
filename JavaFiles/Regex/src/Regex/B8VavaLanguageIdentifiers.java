
package Regex;

/*
Yava langauage identifiers

Rules
======

Allowed characters are 

a to z
A to Z
0 to 9
#
$

Length of each identifier should be two.

The first character should be lower case alphabet symbol from a to k.
The second character should be a digit divisible by 3 [0,3,6,9]

[a-k][0369][a-zA-Z0-9#$]*



*/
import java.util.Scanner;
import java.util.regex.*;
class VavaLanguage
{
    public static void main(String[] args)
    {
        System.out.println("Enter the mail id");
        Scanner cn = new Scanner(System.in);
        String s = cn.nextLine();
        Pattern p= Pattern.compile("[a-k][0369][a-zA-Z0-9#$]*");
        Matcher m = p.matcher(s);
        if(m.find() && m.group().equals(s) )
        {
            System.out.println("Valid");
        }
        
        else
        {
            System.out.println("Invalid");
        }
    }
}

/*
run:
Enter the mail id
a6y
Valid
BUILD SUCCESSFUL (total time: 2 seconds)

*/