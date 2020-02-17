package aFileHandling;


import java.io.File;
import java.io.IOException;

/*
 
Write a code to create a file named with abc.txt in E:xyz folder

*/


 class FileHandlingConstructorExample3 {
    
public static void main( String[] args) throws IOException
{
    
    File f= new File( "D://check","ab.txt");
   /*
    
    This will create a file object pointing to a location inside the D drive and
    folder check.
    
    */
    
    f.createNewFile();

    f.delete();
}



}
