package RegularExpressions;


import java.util.regex.Matcher;
import java.util.regex.Pattern;

/*
match function checking
 */
class A6Regex_QuantifierQuestionMark {

    public static void main(String[] args) {
        String ipPattern = "[0-9]?[0-9]{2}"; // here question mark means optional.
        Pattern p = Pattern.compile(ipPattern);
        String matchString = "23";
        Matcher m = p.matcher(matchString);
        if (m.find() && m.group().equals(matchString)) {
            System.out.println(m.group());
            System.out.println("valid");
        } else {
            System.out.println("invalid");
        }

    }
}

/*
run:
invalid
BUILD SUCCESSFUL (total time: 0 seconds)

*/