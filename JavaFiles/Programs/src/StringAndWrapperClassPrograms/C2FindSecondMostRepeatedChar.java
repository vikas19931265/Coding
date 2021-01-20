
/*
    java program to find the second repeated occuring character in the string.
*/


package StringAndWrapperClassPrograms;


import java.util.*;

class SecondMostRepeated
{
    public static void main(String[] args)
    {
        String occurence="viaakk";

       for(int i=1 ; i<occurence.length();i++)
       {
           if(i==occurence.length()-1)
           {
                if(occurence.charAt(i)==occurence.charAt(i-1))
                {

                    System.out.println(occurence.charAt(i));
                }

               break;
           }

           if(occurence.charAt(i)==occurence.charAt(i-1))
           {
               if(occurence.charAt(i)!=occurence.charAt(i+1))
               System.out.println(occurence.charAt(i));
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