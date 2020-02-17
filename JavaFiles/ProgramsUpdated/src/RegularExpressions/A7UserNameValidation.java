package RegularExpressions;

/*
You are updating the username policy on your company's internal networking platform. According to the policy, a username
is considered valid if all the following constraints are satisfied:

The username consists of 8 to 30 to  characters inclusive. If the username consists of less than  or greater than  characters,
then it is an invalid username.
The username can only contain alphanumeric characters and underscores (_). Alphanumeric characters describe the character 
set consisting of lowercase characters a-z, uppercase characters A-Z, and digits 0-9.
The first character of the username must be an alphabetic character, i.e., either lowercase character a-z or uppercase character A-Z.
*/
import java.util.regex.Matcher;
import java.util.regex.Pattern;

 class IPAddressValidation {

    public static void main(String[] args) {

        String userNamePAttern="[a-zA-Z][a-zA-Z0-9_]{7,29}";
        Pattern p = Pattern.compile(userNamePAttern);
        String matchValue="Samantha_21";
        Matcher m = p.matcher(matchValue);
        if (m.find() && m.group().equals(matchValue)) {
            System.out.println("valid");
        } else {
            System.out.println("invalid");
        }

    }
}

/*
run:
valid
BUILD SUCCESSFUL (total time: 1 second)

*/