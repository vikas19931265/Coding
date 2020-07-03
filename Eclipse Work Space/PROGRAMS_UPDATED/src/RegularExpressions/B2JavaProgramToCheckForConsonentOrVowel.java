
package RegularExpressions;

import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

class VowelConsonentChecker
{
    public static void main(String[] args)
    {
        System.out.println("Enter the input");
        Scanner n = new Scanner(System.in);
        String input= n.next();
        String pattern="[aeiou]|[AEIOU]";
        Pattern p= Pattern.compile(pattern);
        Matcher m= p.matcher(input);
        if(m.find() && m.group().equals(input))
        {
            System.out.println("Vowel");
        }
        else
        {
            System.out.println("Consonent");
        }
    }
}

