package StringAndWrapperClassPrograms;

import java.util.Scanner;

class Solution11111
{

    static boolean isAnagram(String a, String b)
    {
        char[] ainput = a.toLowerCase().toCharArray();  // very important to change both to lower
        char[] binput = b.toLowerCase().toCharArray();
        String aString = null;
        String bString = null;
        for (int i = 0; i < ainput.length; i++)
        {
            for (int j = i + 1; j < ainput.length; j++)
            {
                if ((int) ainput[i] > (int) ainput[j])
                {
                    char temp = ainput[j];
                    ainput[j] = ainput[i];
                    ainput[i] = temp;
                }
            }
        }
        aString = String.valueOf(ainput);
        System.out.println("after sorting 1" + aString);
        for (int i = 0; i < binput.length; i++)
        {
            for (int j = i + 1; j < binput.length; j++)
            {
                if ((int) binput[i] > (int) binput[j])
                {
                    char temp = binput[j];
                    binput[j] = binput[i];
                    binput[i] = temp;
                }
            }
        }
        bString = String.valueOf(binput);
        System.out.println("after sorting 2" + bString);
        if (aString.equalsIgnoreCase(bString))
        {
            return true;
        } else
        {
            return false;
        }
    }

    public static void main(String[] args)
    {
        Scanner scan = new Scanner(System.in);
        String a = scan.nextLine();
        String b = scan.nextLine();
        scan.close();
        boolean ret = isAnagram(a, b);
        System.out.println((ret) ? "Anagrams" : "Not Anagrams");
    }
}
/*
run:
Hello
hello
after sorting 1ehllo
after sorting 2ehllo
Anagrams
BUILD SUCCESSFUL (total time: 4 seconds)
*/
