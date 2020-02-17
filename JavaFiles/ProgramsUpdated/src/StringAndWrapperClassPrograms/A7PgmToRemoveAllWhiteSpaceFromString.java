package StringAndWrapperClassPrograms;

/*
    Write a java program to remove all white spaces from a string?
 */
class RemoveWhiteSpaceFromString
{

    public static void main(String[] args)
    {
        String s = "My name is Vikas Gautam";
        StringBuffer sb = new StringBuffer();
        for (int i = 0; i < s.length(); i++)
        {
            if ((int) s.charAt(i) == 32)
            {
                continue;
            } else
            {
                sb.append(s.charAt(i));
            }
        }
        System.out.println(sb);
    }
}
/*
run:
MynameisVikasGautam
BUILD SUCCESSFUL (total time: 0 seconds)
 */
