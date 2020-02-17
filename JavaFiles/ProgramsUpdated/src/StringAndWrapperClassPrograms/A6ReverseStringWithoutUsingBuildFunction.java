package StringAndWrapperClassPrograms;

/*
    Write a java program to reverse a string without using build in function.
 */
class StringRevers
{

    public static void main(String[] args)
    {
        String s = "My name is Vikas Gautam";
        char[] ch = s.toCharArray();
        for (int i = ch.length - 1; i >= 0; i--)
        {
            System.out.print(ch[i]);
        }
    }
}
/*
run:
matuaG sakiV si eman yMBUILD SUCCESSFUL (total time: 0 seconds)
*/
