package StringAndWrapperClassPrograms;

class Demo44
{

    public static void main(String[] args)
    {
        int number = 1221;
        String num = Integer.valueOf(number).toString();
        String reverseNum = new StringBuffer(Integer.valueOf(number).toString()).reverse().toString();
        if (num.equals(reverseNum))
        {
            System.out.println("Palindrome number");
        } else
        {
            System.out.println("Non Palindrome number");
        }
    }
}
/*
run:
Palindrome number
BUILD SUCCESSFUL (total time: 0 seconds)
*/
