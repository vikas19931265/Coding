package bFileWriter_FileReader;

/* FILE WRITER.

        We can use FileWriter  to write character data to the file.


CONSTRUCTORS:
---------------------

    FileWriter fw= new FileWriter(String fname);

    FileWriter fw= new FileWriter( File f);


The above file writers meant for overriding of existing data. This means that
when we will run the program again then the data stored earlier in the file
will be deleted and will be replaced by the new data.



Instead of overriding if we want append operations then we have to create FileWriter 
by using the following constructors.


    FileWriter fw= new FileWriter( String filename, boolean append);

    FileWriter fw= new FileWriter( String filename, boolean append)


[note]

    If the specified file is not already available then all the above constructors will create that file.


*/

/*
METHODS

1. write( int ch)
        
        to write a single character to the file.

2. write( char[] ch)

        to write an array of character

3. write( String s)

        to writer String to the file.

4. flush()

       applicable to only writers.
       to give the guarantee that total data, including last character will be written to the file.

5. close()

         method used to close the writer.

*/

import java.io.*;

class FilwWriterDemo2
{
    public static void main( String[] args) throws IOException
    {
        FileWriter fw= new FileWriter("//home//vikas//Desktop//f2", true); // this will override by default, to append provide true
        fw.write(100);
        fw.write("urga\nSoftwareSolutions");
        fw.write('\n');
        char[] ch={'a','b','c'};
        fw.write(ch);
        fw.flush();
        fw.close();
    }
}  
/*
note

    in the above example FileWriter perform overriding of the existing data.
instead of overriding if we want append operation than we have to create FileWriter 
Object as follows

            FileWriter fw= new FileWriter("abc.txt",true);



note

    The main problem with FileWriter is  that  we have to insert line separator(\n) manually which is varied from system to system.
    This is a difficulty to the programmer. We can solve this problem by using BufferedWriter and PrintWriter classes.

    We don't have a facility like as in Printer class where we can write line out.println() in order to give a new line.
*/    







/*
durga
SoftwareSolutions
abc
*/