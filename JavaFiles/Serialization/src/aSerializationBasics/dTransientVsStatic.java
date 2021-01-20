package aSerializationBasics;

/*
Transient vs static
==========================

1. static variable is not part of the object state and hence it wont participate
   in serialization. Due to this declaring a static variable as transient has no
   use.
   
*/


import java.io.*;

class Dogs implements Serializable 
{
   int i =10;
   static transient int j=20;// static variable does not belong to the Object level.
}


class SerializedDemo2
{
    public static void main(String[] args) throws Exception
    {
        Dogs d1= new Dogs();//Created the dog object which will be later saved to the file.
        
        //Serialization
        FileOutputStream fos= new FileOutputStream("/home/vikas/Desktop/serialization/abc.txt"); // These 3 lines are serialization
        ObjectOutputStream oos= new ObjectOutputStream(fos);
        oos.writeObject(d1);
        
        //Deserialization
        FileInputStream fis= new FileInputStream("/home/vikas/Desktop/serialization/abc.txt");
        ObjectInputStream ois= new ObjectInputStream(fis);
        Dogs d2  = (Dogs)ois.readObject(); // return type of readObject() is object
        
        System.out.println(d2.i+"....."+d2.j);
        
    }
    
}

/*
run:
10.....20
BUILD SUCCESSFUL (total time: 0 seconds)

*/