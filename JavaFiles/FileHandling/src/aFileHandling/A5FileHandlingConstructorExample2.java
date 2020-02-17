package aFileHandling;


import java.io.File;

import java.io.IOException;

/* Write a code to create a directory named with durga123 in current working directory.
   and create a file named with demo.txt inside the directory. 
*/


 class FileHandlingConstructorExample2 {
    
public static void main( String[] args) throws IOException
{
    
    File f= new File("Durga123");
    
    f.mkdir(); // this will create durga directory.
    
    File f1= new File("Durga123","demo.txt"); // this will create a file object inside the directory durga123
                                              // This is like creating a file object which points to location inside
                                              // the directory.
    
    File f2= new File(f,"demo2.txt");  // this will also create a file object inside file f
    
    f2.createNewFile();

}



}
