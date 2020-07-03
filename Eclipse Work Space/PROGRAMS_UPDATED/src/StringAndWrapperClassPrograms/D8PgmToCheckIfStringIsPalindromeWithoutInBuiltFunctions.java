package StringAndWrapperClassPrograms;
// Pgm to check if string is palindrome without using inbuilt library

class Demo11df
{

    public static void main(String[] args)
    {
        String str = "viv";
        char[] ch = new char[str.length()];
        int j = 0;
        for (int i = str.length() - 1; i >= 0; i--)
        {
            ch[j] = str.charAt(i);
            j++;
        }
        String newString = new String(ch);
        if (str.equalsIgnoreCase(newString))
        {
            System.out.println("Palindrome String");
        } else
        {
            System.out.println("Non palindrome string");
        }
    }
}
/*
run:
Non palindrome string
BUILD SUCCESSFUL (total time: 0 seconds)
*/
