/*
Regex Program to extract the numbers from String.
*/
package RegularExpressions;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

class ExtractNumbersFromString
{
    public static void main(String[] args)
    {
        String input="vik34s90";
        Pattern p= Pattern.compile("\\d");  // search only for digit
        Matcher m = p.matcher(input);
        String numberInput="";
        while(m.find())
        {
            numberInput=numberInput+m.group();
            
        }
        System.out.println(numberInput);
    }
    
}

/*
run:
3490
BUILD SUCCESSFUL (total time: 1 second)

*/