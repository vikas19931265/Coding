
import java.io.*;
import java.util.*;

class Solu
{

    public static void main(String[] args)
    {
        Scanner scan = new Scanner(System.in);
        String input = scan.nextLine();
        input = input.trim();
        if (!input.isEmpty())
        {
            input = input.replaceAll("![! \\?\\.]+", "!");
            input = input.replaceAll("\\.[! \\?\\.]+", ".");
            input = input.replaceAll(",[! \\?\\.]+", ",");
            input = input.replaceAll("\\?[! \\?\\.]+", "?");
            input = input.replaceAll("'[! \\?\\.]+", "'");
            input = input.replaceAll("\\s[! \\?\\.]+", " ");
            input = input.replaceAll("_[! \\?\\.]+", " ");
            input = input.replaceAll("@[! \\?\\.]+", " ");
            input = input.trim();
            //System.out.println("input is\n" + input);
            String in[] = input.split("[\\s\\?'!\\._,@]");
            int count = 0;
            for (String in1 : in)
            {
                count++;

            }
            System.out.println(count);
            for (String in1 : in)
            {
                System.out.println(in1);
            }
        } else
        {
            System.out.println(0);
        }

    }

}

/*
run:
hi, how r u
4
hi
how
r
u
BUILD SUCCESSFUL (total time: 5 seconds)

*/
