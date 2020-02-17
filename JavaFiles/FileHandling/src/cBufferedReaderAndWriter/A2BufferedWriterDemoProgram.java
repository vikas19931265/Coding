/*


Note:

Whenever we are closing BufferedWriter automatically underlying writer will be closed and we are 
not required to close it explicitly.
    

*/
package cBufferedReaderAndWriter;

import java.io.*;


class BuffWriter
{
    
    public static void main(String[] args) throws IOException
    {
        
          FileWriter fr= new FileWriter("//home//vikas//Desktop//FileWriter");
          
          BufferedWriter bw= new BufferedWriter(fr);
          
          bw.write(100);
          
          bw.newLine();
          
          char[] ch={'a','b','c','d'};
          
          bw.write(ch);
          
          bw.newLine();
          
          bw.write("VikasGautam");
          
          bw.newLine();
          
          bw.write("Software Solutions");
          
          bw.flush(); // note flush is applicable only for the writers.
    
          bw.close(); 
    
    }
}


/*
d
abcd
VikasGautam
Software Solutions
*/