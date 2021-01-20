

package PatternMatching;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

class PatternMatching
{
    public static void main(String[] args)
    {
        String pattern="[a-zA-Z]";
        Pattern p=Pattern.compile(pattern);
        Matcher m=p.matcher("132vikasgautam123");
        if(m.find()) // It will check in m if the pattern (a-zA-Z) exists or not...vikasgautam is pattern existing.
        {
            System.out.println("valid pattern");
        }

        else
        {
            System.out.println("Pattern is not found");
        }

    }
}
/*
run:
valid patter
BUILD SUCCESSFUL (total time: 0 seconds)

*/