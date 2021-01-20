/*
Given a string containing alphanumeric characters, calculate sum of all numbers present in the string.
=====================================================================================================

Examples:

Input:  1abc23
Output: 24

Input:  geeks4geeks
Output: 4

Input:  1abc2x30yz67
Output: 100

Input:  123abc
Output: 123

 */
package StringAndWrapperClassPrograms;

class B7GeekyForGeeks_FindSumOfDigitsInString
{

    static int result = 0;

    public static void main(String[] args)
    {
        String str = "1abc2x30yz67";
        str = str.replaceAll("[a-z]", "a");
        System.out.println(str);
        str = str.replaceAll("a+", "+");

        if(str.charAt(0)=='+')
        {
            str=str.substring(1,str.length());
        }


        System.out.println(str);
        str = str.replace("+", " + ");
        str = str.replace("-", " - ");
        //System.out.println(str);

        String[] finalValueArray = str.split(" ");
        String flag = "add";

        for (int i = 0; i < finalValueArray.length; i++)
        {

            if (i % 2 != 0)
            {
                if (finalValueArray[i].equals("-"))
                {
                    flag = "sub";
                } else
                {
                    flag = "add";
                }

            } else
            {
                if (flag.equals("add"))
                {

                    result = add(Integer.parseInt(finalValueArray[i]));

                } else
                {
                    result = sub(Integer.parseInt(finalValueArray[i]));
                }

            }

        }

        System.out.println("result is " + result);

    }

    public static int add(int res)
    {
        result = result + res;
        return result;
    }

    public static int sub(int res)
    {
        result = result - res;
        return result;
    }

}

/*
run:
1aaa2a30aa67
1+2+30+67
result is 100
BUILD SUCCESSFUL (total time: 0 seconds)

*/