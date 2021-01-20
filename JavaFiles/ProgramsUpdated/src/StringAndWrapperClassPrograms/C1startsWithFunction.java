/*
Java starts with
=======================
 */
package StringAndWrapperClassPrograms;

import java.util.*;

class StartWithProgram
{

    public static void main(String[] args)
    {
        ArrayList<String> l = new ArrayList<>();
        l.add("EX002");
        l.add("VX005");
        l.add("EX007");
        Iterator itr = l.iterator();
        while (itr.hasNext())
        {
            String value = (String) itr.next();
            if (value.startsWith("EX"))
            {
                System.out.println(value);
            }
        }
    }
}
/*
$javac StartWithProgram.java
$java -Xmx128M -Xms16M StartWithProgram
EX002
EX007
*/
