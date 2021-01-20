/*
Write a regular expression to validate 10 digit mobile number

Rules

Every number should contain exactly 10 digits. The first digit should be 7, 8 or 9.


We can represent it like

[789][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]

                or
            
            [7-9][0-9]{9}  // 0-9 is repeated 9 time 

Rule 2:
    
    The number could be 10 digit or 11 digits. We can represent it like

    0?[7-9][0-9]{9}

    Here this means at most one Zero or no Zero
    If its one zero then 11th digit is covered 
    and if no zero then 10 digits are covered.

Rule 3:


    The number can be 12 digits also. If its of 12 digits then the first 2 numbers
    should be 91.

        (0|91)?[7-9][0-9]{9}
        
     Here we can either take 0|91 or ignore it. If we are not taking then 10 digit
     number will be formed. And if we are taking then either 0 or 91 will be taken.
     If 0 is taken then 11 digits number will be formed and if 91 is taken then 12
     digit number will be formed.

*/
package Regex;

import java.util.regex.*;

import java.util.Scanner;
class Demp11
{
    public static void main(String[] args)
    {
        System.out.println("Enter phone number");
        
        Scanner cn = new Scanner(System.in);
        
        String n=cn.nextLine();
        
        Pattern p =Pattern.compile("(0|91)?[7-9][0-9]{9}");
        
        Matcher m = p.matcher(n);
    
        int status=0;
        
        if(m.find() && m.group().equals(n))
        {
            System.out.println("Valid number");
        }
                
        else
        {
            System.out.println("Invalid phone number");
        }
                    
                
    
    }
}

/*
run:
Enter phone number
7092198142
Valid number
BUILD SUCCESSFUL (total time: 5 seconds)

*/