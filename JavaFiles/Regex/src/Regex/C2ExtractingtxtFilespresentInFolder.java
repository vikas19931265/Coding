package Regex;
import java.io.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;


/*

Write a program to display all .txt file names present inside C://DurgaClasses.
*/

class Demo45
{
    public static void main(String[] args)
    {


        Pattern p= Pattern.compile("[a-zA-Z0-9_.$]+[.]txt"); //.txt file format.
        File f = new File("C:\\durga_classes");
        String[] s = f.list();
        int count=0;
        for(String s1:s)
        {
            Matcher m =p.matcher(s1);
            if(m.find() && m.group().equals(s))
            /*
                abc.txt.bak match is also there. so we
                we have to compare the group in which this match is found
                with file name(s1)

            */
            {
                count++;
                System.out.println(s1);
            }
        }

        System.out.println("The total number:"+count);


    }



    }
