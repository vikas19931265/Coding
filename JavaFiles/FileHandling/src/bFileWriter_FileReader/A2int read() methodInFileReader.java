
/* int read() method in FileReader to read data from the file character by character
 manner */

package bFileWriter_FileReader;

import java.io.*;

class Demo2
{
    
    public static void main(String[] args) throws IOException
    {
        
        File f = new File("//home//vikas//Desktop//f2");
        
        long length=f.length();
        
        System.out.println("Length of the file is"+length);
        
        FileReader f2= new FileReader(f);
        
        int reading=0;
        
        while(reading!=-1)// -1 indicates end of the file.
        
        {
            
            
            reading= f2.read();
            
            System.out.print((char) reading);
                  
            
            
        }
        
        
      f2.close();// Please close FileReader after opening it.
    
    }
    
    
}

/*
run:
Length of the file is27
durga
SoftwareSolutions
abc￿BUILD SUCCESSFUL (total time: 0 seconds)

*/