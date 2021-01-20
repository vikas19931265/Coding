
package StringAndWrapperClassPrograms;
import java.util.regex.*;
class ValidateEmailAddress
{
    public static void main(String[] args)
    {
        String emailAddress="8gautamv725@gmail.com";

        String emailAddressFormat="[a-zA-Z0-9][a-zA-Z0-9_.]*[@][a-zA-Z0-9]+([.][a-zA-Z]+)+";
        Pattern p=Pattern.compile(emailAddressFormat);
        Matcher m=p.matcher(emailAddress);
        if(m.find() && m.group().equals(emailAddress))
        {
            System.out.println("Valid email address");
        }
        else
        {
            System.out.println("Invalid email address");
        }

    }
}
/*
run:
Invalid email address
BUILD SUCCESSFUL (total time: 0 seconds)
*/