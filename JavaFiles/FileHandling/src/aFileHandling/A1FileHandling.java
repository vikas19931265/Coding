package aFileHandling;


import java.io.File;

import java.io.IOException;

class FileHandling {

public static void main(String[] args ) throws IOException
{
    File f= new File("account.txt");

    /*

    1.This line will not create any physical file.
    2. First it will check , is there any physical file named with acc.txt is available or not.
    3. If it is available, then f simply refers that file.
    4. If it is not available , then we are just creating java file object to represent the name abc.txt.
    */

    System.out.println(f.exists());
    f.createNewFile(); // We are creating the actual physical file.
    System.out.println(f.exists());


/*

    1. We can use java file object to represent directory also.

*/

File newFile= new File("vikas");
System.out.println(newFile.exists());
newFile.mkdir();
System.out.println(newFile.exists());

/*

[note]
    In UNIX everything is treated as a file, jave file IO concept is implemented based on unix operating system.
Hence java file object can be used to represent both files and directories.
*/

}


}
/*
run:
true
true
true
true
BUILD SUCCESSFUL (total time: 0 seconds)

*/
