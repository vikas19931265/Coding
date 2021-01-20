
package Regex;
/*
Java program to validate a mail ID

example gautamv725@gmail.com

Rule1:

The first character can be a number or a character.

    [a-zA-Z0-9]

The second character be a number or a character or . or underscore and can be
written any number of times or zero number of times.

    [a-zA-Z0-9][a-zA-Z0-9_.]*

the third character is going to be @ symbol

    [a-zA-Z0-9][a-zA-Z0-9_.]*@


The fourth character has to be like gmail. This can be anything and can be repeated 
any number of times at least once.

    [a-zA-Z0-9][a-zA-Z0-9_.]*@[a-zA-Z0-9]+


The fifth character has to be a combination of .com . Please note that we can have
.com or .org or .com.in .com.in.org. This means that this combination can be repeated
any number of times. And this combination should be repeated at least once.

    
    a-zA-Z0-9][a-zA-Z0-9_.]*@[a-zA-Z0-9]+([.][a-zA-Z]+)+

*/

import java.util.Scanner;
import java.util.regex.*;
class MailIdValidate
{
    public static void main(String[] args)
    {
        System.out.println("Enter the mail id");
        Scanner cn = new Scanner(System.in);
        String s = cn.nextLine();
        Pattern p= Pattern.compile("[a-zA-Z0-9][a-zA-Z0-9_.]*@[a-zA-Z0-9]+([.][a-zA-Z]+)+");
        Matcher m = p.matcher(s);
        if(m.find() && m.group().equals(s) )
        {
            System.out.println("Valid mail Id");
        }
        
        else
        {
            System.out.println("Invalid mail id");
        }
    }
}

/*
run:
Enter the mail id
gautamv725@gmail.com
Valid mail Id
BUILD SUCCESSFUL (total time: 8 seconds)

*/