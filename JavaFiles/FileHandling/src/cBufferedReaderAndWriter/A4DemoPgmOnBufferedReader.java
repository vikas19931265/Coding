
/*

Note:

    Whenever we are closing the BufferedReader automatically the underlying FileReader
will automatically get closed and is not required to be closed explicitly.

   This rule is applicable to the the BuffereWriter as well.

*/

package cBufferedReaderAndWriter;

import java.io.*;


class BufReader
{
    public static void main(String[] args) throws IOException
    {
        
        FileReader fr= new FileReader("//home//vikas//Desktop//vikasgautam.docx");
        
        BufferedReader br = new BufferedReader(fr);
        
       
        String line= br.readLine();
        
        while(line!=null)
        {
            
            System.out.println(line);
            
            line=br.readLine();
            
            
            
        }
        
            br.close();
        
        
    
    }
    
    
}

/*
run:
d
abcd
VikasGautam
Software Solutions
BUILD SUCCESSFUL (total time: 0 seconds)

*/