
package dPrintWriter;

import java.io.*;


 class PrintWriterDemo1 {
    
     public static void main(String[] args) throws IOException
     {
         
         FileWriter fw = new FileWriter("//home//vikas//Desktop//sample");
         
         PrintWriter out = new PrintWriter(fw);
         
         out.write(100);// This will add ASCII value of 100 , as 100 of int type will be 
                        // converted to byte format when taken to the file.
         
         out.println(100); // This will add number 100....First print and then give line
         
         out.println(true);
         
         out.println('c');
         
         out.println("durga");
         
         out.flush();
         
        
         out.close();
         
         
     }
 
 
 
 }

/*
d100
true
c
durga
*/

/*


*/