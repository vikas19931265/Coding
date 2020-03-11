package Regex;  
import java.util.Scanner;
import java.util.regex.*;

class ValidateDate
{
    public static void main(String[] args)
    {
        System.out.println("Enter date ");
        Scanner cn = new Scanner(System.in);
        String s = cn.nextLine();
        Pattern p= Pattern.compile("([0]\\d|[1][1-2])[/]([0]\\d|[1]\\d|[2]\\d|[3][0-1])[/][1-2]\\d{3}");
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
  

