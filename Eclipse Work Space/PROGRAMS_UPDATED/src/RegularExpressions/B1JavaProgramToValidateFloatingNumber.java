//"(([+-]?[0-9]+)|([+-]?[0-9]+[\\.][0-9]+)|([+-]?[0-9]+[Ee][0-9]+))"; 
/*
[0-9]+ means match 1 or more then one digits.
*/
package RegularExpressions;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

class JavaProgramToValidateNumber
{
    public static void main(String[] args)
    {
        String input="11.570";
        String pattern="[+-]?[\\d]+[\\.][\\d]+"; 
        Pattern p= Pattern.compile(pattern);
        Matcher m=p.matcher(input);
        while(m.find())
        {
            System.out.println(m.group());
        }
    }
}


/*
run:
11.570
BUILD SUCCESSFUL (total time: 0 seconds)

*/