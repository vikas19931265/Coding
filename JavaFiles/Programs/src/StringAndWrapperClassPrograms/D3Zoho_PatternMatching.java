package StringAndWrapperClassPrograms;

/*





if list contains 10-20 strings and if input is like c*i o/p should print all string in a

list contains words starting with 'c' and ending with 'i'

eg:

list = [chennai, covai, madurai, delhi, dubai, mumbai]

then if i/p = c*i*i o/p-->> chennaii, covai

if i/p = d*i o/p --->> dubai, delhi



 */

import java.util.regex.*;

import java.util.*;

 class Test

{

    public static void main(String[] args)

    {

        String pattern = "c*i";

        ArrayList l = new ArrayList();

        l.add("chennai");

        l.add("madurai");

        l.add("covai");

        l.add("dubai");

        l.add("delhi");

        char firstIndex = pattern.charAt(0);

        char lastIndex = pattern.charAt(2);

        String patternMake = String.format("[%c][a-z]{1,}[%c]", firstIndex, lastIndex);

        System.out.println(patternMake);

        Pattern p = Pattern.compile(patternMake);

        Iterator itr = l.iterator();

        while (itr.hasNext())

        {

            String element = (String) itr.next();

            Matcher m = p.matcher(element);

            if (m.find() && m.group().equals(element))

            {

                System.out.println(element);

            }

        }

    }

}



/*

$javac Test.java

Note: Test.java uses unchecked or unsafe operations.

Note: Recompile with -Xlint:unchecked for details.

$java -Xmx128M -Xms16M Test

[d][a-z]{1,}[i]

dubai

delhi



*/
