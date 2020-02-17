/* int read() method in FileReader to read data from the file character by character
 manner */


package bFileWriter_FileReader;

import java.io.*;

class Demo212
{
    public static void main(String[] args) throws IOException
    {
        File f = new File("//home//vikas//Desktop//f2");
        
        FileReader f2= new FileReader(f);
        
        char[] ch= new char[(int)f.length()];// Later this empty character array will
                                             // be filled with character data read from file.
        
        int reading= f2.read(ch);
        
                /*
        Here in this case this read method will pass ch as arguments.
        This ch is character array. When this argument is passed internally
        implemented read method will store all the characters of file to 
        to which FileReader is pointing to into the character array.
        
        Now the character array which was empty before will have data
        present inside it and we can read that easily by usage of the
        for-each loop.
        
        
        This method will also return the number of character read from the file.
        
                */
        
        
         System.out.println("Number of chars read from file"+reading);// f2.read(ch) will return number of characters which       
                                     // which are read from the file.   
    
    
         for(char ch1: ch)
         {
             
             System.out.print(ch1);
             
         }
                                     
                                     
    
    }
    
    
}

/*
run:
Number of chars read from file27
durga
SoftwareSolutions
abcBUILD SUCCESSFUL (total time: 0 seconds)

*/