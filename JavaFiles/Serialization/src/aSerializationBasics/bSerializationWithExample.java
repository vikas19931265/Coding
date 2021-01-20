package aSerializationBasics;

/*
Serialization with example
=============================

I want to create the dog object and then save the object to the file. To do that
i have to perform the serialization.


Below code will compile fine if our dog class does not implement Serializable interface
but we will get the run time exception saying NotSerializalbeException

by Durga
---------------

We can serialize only serializable objects. An object is said to be serializable if and only if 
the corresponding class implements serializable interface. Serializable interface is present in
java.io package and it does not contain any methods. It is a marker interface.

If we are trying to serialize an non serializable object then we will get run time exception 
saying RE:NotSerializalbeException

*/

import java.io.*;

class Dog implements Serializable 
{
    int i =10;
    int j=20;
}


class SerializedDemo
{
    public static void main(String[] args) throws FileNotFoundException, IOException, ClassNotFoundException
    {
        Dog d1= new Dog();//Created the dog object which will be later saved to the file.
        
        //Serialization
        FileOutputStream fos= new FileOutputStream("/home/vikas/Desktop/serialization/abc.txt"); // These 3 lines are serialization
        ObjectOutputStream oos= new ObjectOutputStream(fos);
        oos.writeObject(d1);
        
        
        //Deserialization
        FileInputStream fis= new FileInputStream("/home/vikas/Desktop/serialization/abc.txt");
        ObjectInputStream ois= new ObjectInputStream(fis);
        Dog d2  = (Dog)ois.readObject(); // return type of readObject() is object
        
        System.out.println(d2.i+"....."+d2.j);
        
    }
    
}

/*
run:
10.....20
BUILD SUCCESSFUL (total time: 0 seconds)

*/