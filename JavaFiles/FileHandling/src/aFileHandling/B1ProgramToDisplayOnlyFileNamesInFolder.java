
package aFileHandling;

import java.io.*;


class Samples
{

    public static void main(String[] args)
    {

        File f = new File("//home//vikas//Desktop//dir");

        String[] s = f.list();

        for(String s1: s)
        {

            File f1 = new File(f,s1);

            /*

            This will create a file object pointing to location s1 in the directory
            to which f1 is pointing to.

            In short this can be said like f1 is pointing to a path f.concat(s1)
            that is //home//vikas//Desktop//dir//s1


            */

            if(f1.isFile())
            {

                System.out.println(s1);
            }


        }


    }
}

/*
run:
f1
BUILD SUCCESSFUL (total time: 0 seconds)

*/