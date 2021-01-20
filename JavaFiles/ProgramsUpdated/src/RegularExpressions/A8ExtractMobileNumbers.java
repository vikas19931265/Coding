
package RegularExpressions;

import java.util.regex.Matcher;
import java.util.regex.Pattern;
//("(0|91)?[7-9][0-9]{9}");
class A8ExtractMobileNumbers
{
    public static void main(String[] args)
    {
        String input="I am Vikas gautam my number is 870921981488 and debojyoti number is 6382955585";
        String pattern1= "[0|91]?[6-9][0-9]{9}";
        Pattern p =Pattern.compile(pattern1);
        Matcher m= p.matcher(input);
        while(m.find())
        {
            System.out.println(m.group());
            
        }
    
    }
}

