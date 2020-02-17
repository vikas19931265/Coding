/*
Program to find upper case letters in the String
*/
package StringAndWrapperClassPrograms;
class Demo
{
    public static void main(String[] args)
    {
        String s = "My name Is Vikas Gautam";
        String[] s1= s.split(" ");
        for(String s2: s1)
        {
            if ( (int ) s2.charAt(0)>=65 && (int ) s2.charAt(0)<=90)
            {
                System.out.print(" "+ s2);
            }
        }
    }
}
/*
run:
 My Is Vikas GautamBUILD SUCCESSFUL (total time: 0 seconds)
*/