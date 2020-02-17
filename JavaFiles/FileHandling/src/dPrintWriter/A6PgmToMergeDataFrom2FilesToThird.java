/*

Write a program to merge data from two files into a third file.???

note
-------

In this program we have opened only one PrintWriter hence continuation (append) is there from two files.
However if we would have opened another PrintWriter then the first PrintWriter data would have
got overridden.


This means only one PrintWriter can write data to the file at a time.


*/
package dPrintWriter;

import java.io.*;

 class FileRead {

     public static void main(String[] args) throws FileNotFoundException, IOException
     {

     PrintWriter pw = new PrintWriter("//home//vikas//Desktop//f3");

     BufferedReader br = new BufferedReader(new FileReader("//home//vikas//Desktop//f1"));

     String line = br.readLine();

     while(line!=null)
     {
         pw.write(line);

          pw.println();

         line=br.readLine();

      }

     br=new BufferedReader(new FileReader("//home//vikas//Desktop//f2"));

     line=br.readLine();

     while(line!=null)
     {
         pw.write(line);

         pw.println();

         line=br.readLine();

      }

     pw.flush();

     pw.close();

     br.close();



     }



 }
/*
AAA
BBB
CCC

222
333
444
555
666
*/