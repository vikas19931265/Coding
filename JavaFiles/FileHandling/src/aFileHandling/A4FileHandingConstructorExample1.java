package aFileHandling;


import java.io.File;

import java.io.IOException;

/*

1. Write a code to create a file named abc.txt in current working directory.

*/


 class FileHandingConstructorExample1 {

public static void main( String[] args) throws IOException
{

    File a= new File("/home/vikas/Desktop/vikas.txt"); // this will first check if file abc.txt , exists in current working directory or not
                                 // if the file does not exist then , it will be created in the current working directory.
                                 // Remember the point that this will not create actual file, instead only a file object will be created.

    System.out.println(a.exists());

    a.createNewFile(); // this will create the file with the name abct.txt in the current working directory.

}



}
