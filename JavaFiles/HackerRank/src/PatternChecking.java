
import java.util.regex.Pattern;
import java.util.regex.PatternSyntaxException;


class PatternChecking
{
    public static void main(String[] args)
    {
        String pattern="ab";
        try
        {
            Pattern p=Pattern.compile(pattern);
            System.out.println("valid");
        }
        catch(PatternSyntaxException e)
        {
            System.out.println("invalid");
        }

        }
}

/*
run:
valid
BUILD SUCCESSFUL (total time: 0 seconds)

*/