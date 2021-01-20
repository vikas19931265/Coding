package aFileHandling;

/*

Write a program to display the names of all files and directories present in C:durgaclasses

*/


import java.io.File;


class FileClassMethodExample1 {
    
public static void main( String[] args)
{
    int count=0;
    
    File f= new File("D:\\WHOLESALEWHC3_RBK_MODELC_1");
    /*
    
    1. With this line an object will be created in the memory.
    2. This object will contain the directory contents.
    3. The reference of this object is f.
    4. Using this we can list out all the files or directory names present inside the location.
    
    */
    
    String[] s=f.list();
    
    /*
        This method will return an array of all the names
    */

    for( String s1: s) // example of for each loop statement in java. This takes values from s1 to s;
    {
        count++; 
        System.out.println(s1);
    }


    System.out.println(count);
}



}
