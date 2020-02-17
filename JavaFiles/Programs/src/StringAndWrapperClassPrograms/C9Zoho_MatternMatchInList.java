/*
if list contains 10-20 strings and if input is like c*i o/p should print all string in a
list contains words starting with 'c' and ending with 'i'
eg:
list = [chennai, covai, madurai, delhi, dubai, mumbai]
then if i/p = c*i o/p-->> chennai, covai
if i/p = d*i o/p --->> dubai, delhi
*/
package StringAndWrapperClassPrograms;

import java.util.*;

class Demo11
{
    public static void main(String[] args)
    {
        List<String> l= new ArrayList();

        l.add("chennai");
        l.add("covai");
        l.add("madurai");
        l.add("delhi");
        l.add("dubai");
        l.add("mumbai");

     System.out.println("Enter the pattern");
     Scanner cn = new Scanner(System.in);
     String input=cn.nextLine();

     String[] patternElements = input.split("\\*");


     Iterator itr=l.iterator();
     while(itr.hasNext())
     {
         String element=(String)itr.next();
         if(element.startsWith(patternElements[0])&&element.endsWith(patternElements[1]))
         {
             System.out.println(element);
         }
     }
    }
}

/*
run:
Enter the pattern
m*i
madurai
mumbai
BUILD SUCCESSFUL (total time: 3 seconds)

*/