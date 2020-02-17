
/*
Program to reverse vowels alone in a given string
====================================================

Given a string, your task is to reverse only the vowels of string.

Examples:

Input : hello
Output : holle

Input : hello world
Output : hollo werld



 */

package StringAndWrapperClassPrograms;


class Driver
{

    public static void main(String[] args)
    {
        String str = "";

        String input = "hello world";

        String indexPos = "";

        int position;

        char value;

        for (int i = 0; i < input.length(); i++)
        {
            if (input.charAt(i) == 'a' || input.charAt(i) == 'e' || input.charAt(i) == 'i' || input.charAt(i) == 'o' || input.charAt(i) == 'u')
            {
                str = str + input.charAt(i);

                indexPos = indexPos + i;
            }
        }

        char[] vowels = str.toCharArray();

        char[] index = indexPos.toCharArray();

        StringBuilder input2 = new StringBuilder(new String(input));

        for (int i = vowels.length - 1, j = 0; (i >= 0 && j < indexPos.length()); j++, i--)
        {

            position = Integer.parseInt(Character.valueOf(indexPos.charAt(j)).toString());

            value = vowels[i];

            input2.setCharAt(position, value);

        }

        System.out.println(input2);

    }
}

/*
run:
hollo werld
BUILD SUCCESSFUL (total time: 0 seconds)

*/