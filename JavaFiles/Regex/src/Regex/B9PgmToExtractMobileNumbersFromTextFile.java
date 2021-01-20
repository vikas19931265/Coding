
package Regex;
import java.io.*;
import java.util.regex.*;

/*

Write a program to read all the mobile numbers present inside the given the input
file where mobile numbers are mixed with normal text data.

*/

class Demo11
{
    public static void main(String[] args) throws Exception
    {

        PrintWriter pw = new PrintWriter("output.txt");
        Pattern p =Pattern.compile("(0|91)?[7-9][0-9]{9}");
        BufferedReader br = new BufferedReader(new FileReader("input.txt"));
        String line=br.readLine();
        while(line!=null) //First line is not empty so the loop continues. This loop
                          // will continue until loop finds an empty line.
        {
            Matcher m = p.matcher(line);
            while(m.find())
            {
                pw.println(m.group());
            }

            line=br.readLine();

        }
        pw.flush();
        pw.close();

    }



    }
