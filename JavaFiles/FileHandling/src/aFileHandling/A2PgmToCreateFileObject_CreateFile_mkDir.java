package aFileHandling;


/*

Program to Create a file Object, create file and directory

*/



import java.io.*;

class File1
{
    public static void main(String[] args) throws IOException
    {

        File f = new File("//home//vikas//Desktop//abc");


        System.out.println(f.exists());


        File f1= new File("//home//vikas//Desktop//def");

        
        System.out.println(f1.exists());


        f1.createNewFile();


        File f2= new File("//home//vikas//Desktop//dir");

        f2.mkdir();



    }


 }


/*
run:
true
true
BUILD SUCCESSFUL (total time: 0 seconds)

*/