package Regex;
import java.io.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/*

Write a program to extract all the mailIDs present in the given input file where mailIds
are mixed with the normal text data.

this program is very much similar to mobile number extraction program as we have to replace
mobile number regular expression with mail id

*/

class Demos
{
    public static void main(String[] args) throws Exception
    {

        PrintWriter pw = new PrintWriter("output.txt");
        Pattern p= Pattern.compile("[a-zA-Z0-9][a-zA-Z0-9_.]*@[a-zA-Z0-9]+([.][a-zA-Z]+)+");
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
