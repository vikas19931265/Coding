package RegularExpressions;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

class RegexStringManipulation
{
    public static void main(String[] args)
    {
        
        //String pattern="([2][0-5][0-5]|[0|1][0-9][0-9]|[0-9][0-9]|[0-9])\\.([2][0-5][0-5]|[0|1][0-9][0-9]|[0-9][0-9]|[0-9])\\.([2][0-5][0-5]|[0|1][0-9][0-9]|[0-9][0-9]|[0-9])\\.([2][0-5][0-5]|[0|1][0-9][0-9]|[0-9][0-9]|[0-9])";
        String pattern="(([2][0-5][0-5]|[2][0-4][0-9]|(0|1)[0-9][0-9]|[0-9][0-9]|[0-9])\\.){3}([2][0-5][0-5]|[2][0-4][0-9]|(0|1)[0-9][0-9]|[0-9][0-9]|[0-9])";
        Pattern p =Pattern.compile(pattern);
        String matcher="249.249.249.249";
        Matcher m =p.matcher(matcher);
        if(m.find() && m.group().equals(matcher))
        {    System.out.println(m.group());
             System.out.println("valid");
        }
        
        else
        {
            System.out.println("invalid");
        }
    }
}

/*
run:
invalid
BUILD SUCCESSFUL (total time: 0 seconds)

*/