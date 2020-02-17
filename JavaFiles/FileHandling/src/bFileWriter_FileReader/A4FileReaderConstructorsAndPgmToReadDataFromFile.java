package bFileWriter_FileReader;

/* FILE READER

CONSTRUCTORS

1. We can use FileReader to read the character data from the file.

FileReader fr= new FileReader( String fname);

FileReader fr= new FileReader( File f)




Methods

 1. int read()

   It attempts to read next character from the file and returns its unicode value.
   if the next character is not available then this method returns -1.
   As this method returns int value, at the time of printing we have to perform
   typecasting to char.


2. int read ( char[] ch)

    It attempts to read enough characters from the file into the char array and returns number of characters copied from the file.

*/
import java.io.FileReader;  
import java.io.IOException;
 
class FileReader1 {
    
 public static void main( String [] args)  throws IOException
 {
     FileReader fr= new FileReader("C:\\Users\\VIKAS GAUTAM\\Documents\\NetBeansProjects\\FileHandling\\FulfilmentDecomposition_FD265539_A.10.xml");
   
     
     long count=0;
     int i=fr.read(); // method returns an int value after reading the first character from the file

   
     while(i!=-1) // i value is checked for -1 indicating file is empty
    {
     i=fr.read(); // if not empty read the next character and store it in i
       
     System.out.print((char)i); // type cast the ASCII code value to the int value.
 
    
    
    count++;
    }
    
      System.out.println(count); 
     fr.close();
 }


}