package RegularExpressions;

import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
/*
<h1><h1>Sanjay has no watch</h1></h1><par>So wait for a while</par>
Pattern r = Pattern.compile("<(.+)>([^<]+)</\\1>");

Let me try to explain the regular expression:

<(.+)>
matches HTML start tags. The parentheses save the contents inside the brackets into Group #1.

([^<]+)
matches all the text in between the HTML start and end tags. We place a special restriction on the 
text in that it can't have the "<" symbol. The characters inside the parenthesis are saved into Group #2.

</\\1>
is to match the HTML end brace that corresponds to our previous start brace. The \1 is here to match all 
text from Group #1.

*/

/* Solution assumes we can't have the symbol "<" as text between tags */
 class Solution11{
    public static void main(String[] args){
        Scanner scan = new Scanner(System.in);
        int testCases = Integer.parseInt(scan.nextLine());
        
        while (testCases-- > 0) {
            String line = scan.nextLine();
            
            boolean matchFound = false;
            Pattern r = Pattern.compile("<(.+)>([^<]+)</\\1>");
            Matcher m = r.matcher(line);

            while (m.find()) {
                System.out.println(m.group(2));
                matchFound = true;
            }
            if ( ! matchFound) {
                System.out.println("None");
            }
        }
    }
}

/*
run:
1
<h1><h2>Sanjay has no watch</h2></h1><par>So wait for a while</par>
Sanjay has no watch
So wait for a while
BUILD SUCCESSFUL (total time: 9 seconds)

*/