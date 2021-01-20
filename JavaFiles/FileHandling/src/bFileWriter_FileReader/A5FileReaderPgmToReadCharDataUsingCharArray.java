package bFileWriter_FileReader;

/* FILE READER

CONSTRUCTORS

1. We can use FileReader to read the character data from the file.

FileReader fr= new FileReader( String fname);

FileReader fr= new FileReader( File f)




Methods

 1. int read()

   it attempts to read next character from the file and returns its unicode value.
   if the next charcter is not available then this method returns -1.
   As this method returns int value, at the time of printing we have to perfom
   tyecasting to char.


2. int ( char[] ch)

    It attmpts to read enough characters from the file into the char array and returns number of characters copied from the file.

*/
import java.io.File;
import java.io.FileReader;
import java.io.IOException;


class FileReader2 {

 public static void main( String [] args)  throws IOException

 {
     FileReader fr= new FileReader("//home//vikas//Desktop//f2");

     File f1= new File("//home//vikas//Desktop//f2");

    char[] ch= new char[(int)f1.length()];

    int i= fr.read(ch);

    System.out.println(i);

    for(char c: ch)
    {
        System.out.print(c);
    }


    fr.close();
 }

 }
